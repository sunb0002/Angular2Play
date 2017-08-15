import { browser, by, element } from 'protractor';

import { TodoItemClass } from './../src/app/shared/todo-item';

export class ProfilePage {

  navigateTo() {
    return browser.get('/perX');
  }

  getElementByID(id: string) {
    return element(by.id(id)).getText();
  }

  async postComment(): Promise<any> {

    const todo: TodoItemClass = <TodoItemClass>{};
    todo.value = 'hahahaha';
    // const postbody = '{\r\n  \"alternateEmail\": \"alibaba@gmail.com\"\r\n}';

    return _superagent.post('http://jsonplaceholder.typicode.com/posts')
      .set('Content-Type', 'application/json')
      .send(todo)
      .timeout(6000)
      .then(
      payload => { console.log('request ok.'); return payload.body; },
      err => { console.log('request failed: ', err); return null; }
      );

  }



}
