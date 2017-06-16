import { browser } from 'protractor';
import { SBTodoAppPage } from './app.po';

describe('sbtodo-app App', () => {
  let page: SBTodoAppPage;

  beforeEach(() => {
    page = new SBTodoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

describe('App Page', () => {
  it('should have a title of wth', () => {
    browser.get('/perX');
  });
});
