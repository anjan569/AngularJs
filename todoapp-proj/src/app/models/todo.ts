export class Todo{
    id:string;
    name:string;
    iscomplete:boolean;
    type:string;
    currentDt:number;
    finishedDt:number;
    constructor(id:string,name:string,isDone:boolean,type:string,cDt:number,fDt:number){
        this.id = id;
        this.name = name;
        this.iscomplete = isDone;
        this.type =type;
        this.currentDt = cDt;
        this.finishedDt =fDt
    
    }
}
