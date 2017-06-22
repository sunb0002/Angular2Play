import { browser } from 'protractor';
import { SBTodoAppPage } from './app.po';
import { ProfilePage } from './ProfilePage.po';

describe('ProfilePage App', () => {
  let page: ProfilePage;

  beforeEach(() => {
    page = new ProfilePage();
  });

  it('should display message containing precure-not-found', () => {
    page.navigateTo();

    // If you have promise or RXJS not yet unsubscribed, 
    // do disable Angular waiting before get element.
    browser.waitForAngularEnabled(false);

    let testObj = page.getElementByID('e2eTest');
    console.log('***testObj: ', testObj);
    expect(testObj).toContain('precure-not-found works!');

  });
});

describe('sbtodo-app Page', () => {
  let page: SBTodoAppPage;

  beforeEach(() => {
    page = new SBTodoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    page.navigateTo('/per1');

    browser.pause(); // Super useful
    //expect(page.getParagraphText()).toEqual('app works!');
    expect("asdf").toEqual('asdf');
  });

  xit('PerX should display message saying not found', () => {
    page.navigateTo('/perX');

    browser.waitForAngularEnabled(false);
    // Key! If you have promise or other RXJS running, do disable Angular waiting before get element.
    let textobj = page.getElementByID('e2eTest');
    // console.log('***textobj: ', textobj);
    //expect(page.getParagraphText()).toEqual('app works!');

    expect(textobj).toContain('percure');
  });
});

xdescribe('App Page', () => {

  let page: SBTodoAppPage;

  it('should have a title of wth', () => {
    page.navigateTo('/perX');
    expect("asdf").toEqual('asdf');
  });

  it('test page display check1', () => {
    page.navigateTo('/test/50/20');
    expect(page.getTestComponentParam1()).toBe('50');
  });

  it('test page display check2', () => {
    page.navigateTo('/test/10/abc');
    expect(page.getTestComponentParam2()).toBe('abc');
  });

  it('test page click check2', () => {
    page.navigateTo('/test/10/abc');
    expect(page.getClickResult()).toBe('ok');
  });

  it('todo page display', () => {
    page.navigateTo('/todo');
    expect(page.getTodoTitle()).toBe('todo Works!');
  });

});
