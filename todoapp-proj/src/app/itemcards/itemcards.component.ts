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
  @Input() filteredList:Todo[];

 @Output() itemDelete:EventEmitter<string> = new EventEmitter();
 @Output() itemUndo:EventEmitter<string> = new EventEmitter();

  constructor(private todoService: TodoService) { 

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
