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
