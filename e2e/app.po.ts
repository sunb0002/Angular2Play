import { browser, by, element } from 'protractor';
import * as _superagent from 'superagent';

export class SBTodoAppPage {

  defaultHttpRequestTimeout = 12000;

  navigateTo(path?: any) {
    if (!path) {
      path = '/';
    }
    return browser.get(path);
  }


  getParagraphTextOriginal() {
    return element(by.css('app-root h1')).getText();
  }


  getParagraphText() {
    return element.all(by.css('.link')).first().getText();
  }

  getTestComponentParam1() {
    return element(by.css('.param1')).getText();
  }

  getTestComponentParam2() {
    return element(by.css('.param2')).getText();
  }

  getClickResult() {
    element(by.css('button')).click();
    return element(by.css('.clicktest')).getText();
  }

  getTodoTitle() {
    return element(by.css('.title')).getText();
  }

  getElementByID(id: string) {
    return element(by.id(id)).getText();
  }



  /**
   *
   * @param {string} url
   * @param {*} postbody
   * @param {string} [cookiestr]
   * @returns {Promise<any>}
   * @memberof EmartLogisticsPage
   */
  async simpleRestfulPOST(url: string, postbody: any, cookiestr?: string): Promise<any> {

    console.log('simpleRestfulPOST with body', url, postbody);
    return _superagent.post(url)
      .set('Content-Type', 'application/json;charset=UTF-8')
      .set('Cookie', cookiestr || '')
      .send(postbody)
      .timeout(this.defaultHttpRequestTimeout)
      .then(
      resp => resp.body,
      err => {
        console.log('Request Failed: ', err);
        return null;
      }
      );
  }

}
