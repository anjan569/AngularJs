import { Directive,Input,OnInit,ElementRef,Renderer2 } from '@angular/core';
import { Todo } from './models/todo';

@Directive({
  selector: '[appStatusHighlighter]'
})
export class StatusHighlighterDirective implements OnInit {
 
 @Input() todo:Todo;
  
  constructor(private el:ElementRef,private renderer:Renderer2) {
    console.log('In Directive');
    
  }

  ngOnInit(){
    let classToBeAdded;
    switch(this.getElapsedDays(this.todo.startDt)){
      case 0:
          classToBeAdded ='status-green';
          break;
      case 1:
          classToBeAdded ='status-amber';
          break;
      case 2:
          classToBeAdded='status-red';
          break;
    }
    this.renderer.addClass(this.el.nativeElement,classToBeAdded);

  }

  //return 0 if same day
  // Return 1 if between 1 or 2 days
  //Return othercases

  getElapsedDays(startDt:number){
     const currentDtInMs = Date.now();
     const noOfMsInDays = 24*60*60*1000;
     const noOfMsIn2Days = 2 * noOfMsInDays;

     const diffInMs = currentDtInMs - startDt;

     if(diffInMs <= noOfMsInDays){
       return 0;
     }else if(diffInMs  > noOfMsInDays && diffInMs <= noOfMsIn2Days){
       return 1;
     } else{
       return 2;
     }
     
  }

}
