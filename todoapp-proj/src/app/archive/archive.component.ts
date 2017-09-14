import { TodoService } from './../services/todolist.service';
import { Todo } from './../models/todo'
import { Component, OnInit,Output ,EventEmitter} from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  searchVal :Subject<string>;

  filteredArchiveList: Todo[];

  constructor(private todoService: TodoService) { 
    this.searchVal = new Subject();
  }

  ngOnInit() {
    this.filteredArchiveList =[];
    this.todoService.todoList$.subscribe(todoList => {
          this.filteredArchiveList   = todoList.filter(todo => todo.iscomplete);
    });
    this.searchVal.subscribe(val => {
       console.log(val);
      this.filteredArchiveList =  this.todoService.getArchivedTodos().filter(todo => todo.name.includes(val));
       
    })
  }

  onKeyUp(searchVal:string){
    this.searchVal.next(searchVal);
  }

  markItemAsUndo(id:string){
    console.log("archive click:"+id);
    this.todoService.markItemAsInCompleted(id);
  }

  deletedItem(id:string){
    console.log("deleted id"+id);
    this.todoService.markItemAsDeleted(id);
  }
}
