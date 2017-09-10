import { TodoService } from './../services/todolist.service';
import { Component, OnInit,Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  

  constructor(private todoService: TodoService) { }

  ngOnInit() {
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
