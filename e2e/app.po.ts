import { browser, by, element } from 'protractor';
import { ExpectedConditions } from 'protractor/built';
import { ElementArrayFinder, ElementFinder } from 'protractor/built/element';
import * as _superagent from 'superagent';

import { environment } from '../src/environments/environment';

export class SBTodoAppPage {

  public PageBaseHref = '/#';
  public ApiBaseURL = environment.apiBaseUrl;
  public defaultUser = 'S1234567D';
  public defaultLogisticsGroup = 'ADMIN-INTRANET';
  public defaultStoreGroup = 'PORTAL-INTERNET';
  public defaultLoginType = 'EarthPass';

  defaultVisibilityTimeout = 6000;
  defaultVisibilityTimeoutMsg = 'Taking too long to display (or hide) element.';
  EC = ExpectedConditions;

  defaultHttpRequestTimeout = 24000;

  navigateToPath(path?: any) {
    if (!path) {
      path = '/';
    }
    if (path.indexOf(this.PageBaseHref) !== 0) {
      this.navigateToPath(this.PageBaseHref + path);
    } else {
      this.navigateToPath(path);
    }
  }

  public setTestingCookie(xxUser?: string, ivGroup?: string, loginType?: string): Promise<any> {

    xxUser = xxUser || this.defaultUser;
    ivGroup = ivGroup || this.defaultLogisticsGroup;
    loginType = loginType || this.defaultLoginType;

    // Unable to set cross-domain cookie. Have to redirect and then set.
    browser.waitForAngularEnabled(false);
    this.navigateToPath(this.ApiBaseURL);
    browser.manage().deleteAllCookies();
    return Promise.all([
      this.setCookie('xx-user', xxUser),
      this.setCookie('xx-groups', ivGroup),
      this.setCookie('logintype', loginType)
    ]);
  }

  /**
   * @param name
   * @param value
   */
  public setCookie(name: string, value: string): Promise<void> {
    // Protractor bug: browser.manage() TS definition is never updated. Have to cast as "any".
    return (browser.manage() as any).addCookie({ 'name': name, 'value': value });
  }

  getElementByCss(cssSelector: string) {
    return element(by.css(cssSelector));
  }

  getAllElementsByCss(cssSelector: string) {
    return element.all(by.css(cssSelector));
  }

  getButtonByText(text: string) {
    return element(by.buttonText(text));
  }

  getFilterButton() {
    return this.getButtonByText('Filter');
  }

  getSearchButton() {
    return this.getButtonByText('Search');
  }

  getSaveButton() {
    return this.getButtonByText('Save');
  }

  getBackButton() {
    return this.getButtonByText('Back');
  }

  getConfirmButton() {
    return this.getButtonByText('Confirm');
  }

  getContinueButton() {
    return this.getButtonByText('Continue');
  }



  /**
   * Custom element visibility lock. Only needed before click/sendKey actions.
   * @param {any} elm
   * @param {number} [timeout]
   * @param {string} [msg]
   * @memberof StorePage
   */
  async awaitVisibility(elm, timeout?: number, msg?: string): Promise<void> {
    await browser.wait(this.EC.visibilityOf(elm),
      timeout || this.defaultVisibilityTimeout,
      msg || this.defaultVisibilityTimeoutMsg);
  }

  // This only works for BootStrap3/4 Modal shade..
  async awaitBootStrapModalVisibility(modalOn: boolean): Promise<void> {
    const modalFadeAnimation = this.getElementByCss('.modal-backdrop.fade');
    return modalOn ? await this.awaitVisibility(modalFadeAnimation) : await this.awaitInVisibility(modalFadeAnimation);
  }

  async awaitInVisibility(elm, timeout?: number, msg?: string): Promise<void> {
    await browser.wait(this.EC.invisibilityOf(elm),
      timeout || this.defaultVisibilityTimeout,
      msg || this.defaultVisibilityTimeoutMsg);
  }

  async scrollToBottom(): Promise<void> {
    await browser.executeScript('window.scrollTo(0,10000);');
  }

  async enforceElementCheckedStatus(elm: ElementFinder, clickTarget: ElementFinder, toChecked: boolean): Promise<void> {
    if (await elm.isPresent() && await clickTarget.isDisplayed()) {
      const currentStatus = (await elm.getAttribute('checked') === 'true');
      if (toChecked !== currentStatus) {
        await clickTarget.click();
      }
    }
  }

  async locateElementByTraversePaginations(elm: ElementFinder, nextBtn: ElementFinder): Promise<boolean> {
    let nextBtnDisabled: Boolean = false;
    let elmFound: boolean;
    do {
      await this.awaitBootStrapModalVisibility(false);
      await this.awaitVisibility(nextBtn);
      elmFound = (await elm.isPresent());
      nextBtnDisabled = (await nextBtn.getAttribute('disabled') != null); // .isEnabled() is not working
      if (!elmFound && !nextBtnDisabled) {
        await nextBtn.click();
        browser.waitForAngular();
      }
    } while (!elmFound && !nextBtnDisabled);

    return elmFound;
  }

  async countElementsByTraversePaginations(elmArray: ElementArrayFinder, nextBtn: ElementFinder): Promise<number> {

    let sum = 0;
    let nextBtnDisabled: Boolean = false;
    do {
      await this.awaitBootStrapModalVisibility(false);
      await this.awaitVisibility(nextBtn);
      sum += await elmArray.count();
      nextBtnDisabled = (await nextBtn.getAttribute('disabled') != null); // .isEnabled() is not working
      if (!nextBtnDisabled) {
        await nextBtn.click();
        browser.waitForAngular();
      }
    } while (!nextBtnDisabled);

    return sum;
  }

  async simplePOST(path: string, postbody: any, ivUser?: string, ivGroup?: string, loginType?: string): Promise<any> {

    const endpoint = this.ApiBaseURL + path;
    ivUser = ivUser || this.defaultUser;
    ivGroup = ivGroup || this.defaultStoreGroup;
    loginType = loginType || this.defaultLoginType;

    const cookiestr = 'iv-groups=' + ivGroup + ';iv-user=' + ivUser + ';logintype=' + loginType;
    const respbody = await this.simpleRestfulPOST(endpoint, postbody, cookiestr);
    return (!respbody && respbody.status > 300) ? null : respbody.data;
  }


  /**
   *
   * @param {string} url
   * @param {*} postbody
   * @param {string} [cookiestr]
   * @returns {Promise<any>}
   * @memberof LogisticsPage
   */
  async simpleRestfulPOST(url: string, postbody: any, cookiestr?: string): Promise<any> {

    console.log('simpleRestfulPOST with body', url, postbody);
    return _superagent.post(url)
      .set('Content-Type', 'application/json;charset=UTF-8')
      .set('Cookie', cookiestr || '')
      .send(postbody)
      .timeout(this.defaultHttpRequestTimeout)
      .then(
      resp => {
        console.log('>>>>>> Responded: ', resp.body)
        return resp.body;
      },
      err => {
        console.log('>>>>>> Request Failed: ', err);
        return null;
      }
      );
  }


}
