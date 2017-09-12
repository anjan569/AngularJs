import { Todo } from './../models/todo';
import { TodoService } from './../services/todolist.service';
import { DatePipe } from '@angular/common';
import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-itemcards',
  templateUrl: './itemcards.component.html',
  styleUrls: ['./itemcards.component.css']
})
export class ItemcardsComponent implements OnInit {
  @Input() todoList:Todo[];

 @Output() itemDelete:EventEmitter<string> = new EventEmitter();
 @Output() itemUndo:EventEmitter<string> = new EventEmitter();

  today:Number;
  constructor(private todoService: TodoService) { 
    this.today = Date.now();

  }

  ngOnInit() {
  }

  undoTodoItem(id:string){
    console.log("card click:"+id);
    this.itemUndo.emit(id);
  }

  deteleTodoItem(id:string){
     console.log("card click:"+id);
    this.itemDelete.emit(id);
  }
}
