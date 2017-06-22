import { browser } from 'protractor';
import { SBTodoAppPage } from './app.po';

describe('sbtodo-app App', () => {
  let page: SBTodoAppPage;

  beforeEach(() => {
    page = new SBTodoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    page.navigateTo('/per1');

    // let textobj = page.getParagraphText();
    // console.log('***textobj: ', textobj);

    //expect(page.getParagraphText()).toEqual('app works!');
    expect("asdf").toEqual('asdf');
  });

  it('PerX should display message saying not found', () => {
    page.navigateTo('/perX');

    browser.waitForAngularEnabled(false);
    // Key! If you have promise or other RXJS running, do disable Angular waiting before get element.
    let textobj = page.getElementByID('e2eTest');
    console.log('***textobj: ', textobj);
    //expect(page.getParagraphText()).toEqual('app works!');

    expect(textobj).toContain('persona-not-found works!');
  });
});


// Very good example
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
