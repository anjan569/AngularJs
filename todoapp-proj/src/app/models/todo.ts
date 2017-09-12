export class Todo{
    id:string;
    name:string;
    iscomplete:boolean;
    type:string;
    startDt:number;
    endDt:number;
    constructor(id:string,name:string,isDone:boolean,type:string,sDate:number,eDate:number = null){
        this.id = id;
        this.name = name;
        this.iscomplete = isDone;
        this.type =type;
        this.startDt = sDate;
        this.endDt =eDate;
    
    }
}
