import { TestBed, inject } from '@angular/core/testing';

import { TodoService } from './todolist.service';

describe('TodolistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoService]
    });
  });

  it('should be created', inject([TodoService], (service: TodoService) => {
    expect(service).toBeTruthy();
  }));
});
