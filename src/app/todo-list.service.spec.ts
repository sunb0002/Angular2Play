import { TestBed, inject } from '@angular/core/testing';

import { TodoListService } from './todo-list.service';
import { HttpModule } from '@angular/http'; // Use MockBackend instead, if to test real HTTP call.

describe('TodoListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [TodoListService]
    });
  });

  it('should be created', inject([TodoListService], (service: TodoListService) => {
    expect(service).toBeTruthy();
  }));
});
