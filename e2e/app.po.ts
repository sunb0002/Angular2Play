import { browser, by, element } from 'protractor';

export class SBTodoAppPage {

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

}
