export class Todo{
    name:string;
    iscompleted:boolean;
    type:string;

    constructor(name:string,isDone:boolean,type:string){
        this.name = name;
        this.iscompleted = isDone;
        this.type =type;
    
    }
}
