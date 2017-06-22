import { browser, by, element } from 'protractor';

export class ProfilePage {

  navigateTo() {
    return browser.get('/perX');
  }

  getElementByID(id: string) {
    return element(by.id(id)).getText();
  }

}
