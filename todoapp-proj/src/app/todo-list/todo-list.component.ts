import { Todo } from './../models/todo';
import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todoList:Todo[];
  @Input() title:string;

  @Output() itemAdded:EventEmitter<string> = new EventEmitter();
  @Output() itemChecked:EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onEnterPress(text:string){
    this.itemAdded.emit(text);
  }

  onClick(id:string){
    this.itemChecked.emit(id);
  }


}
