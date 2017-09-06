import { TestBed, inject } from '@angular/core/testing';

import { Todolist } from './todolist.service';

describe('TodolistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Todolist]
    });
  });

  it('should be created', inject([Todolist], (service: Todolist) => {
    expect(service).toBeTruthy();
  }));
});
