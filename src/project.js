export class Project{
   constructor(name, id){
      this.name=name;
      this.todos={};
      this.id= id;
      this.counter=0;
   }
   addTodo(todo){
      this.array.push(todo);
   }
   removeTodo(todo){
      let idx= this.array.indexOf(todo);
      if (idx ==-1) this.array.splice(idx,1);
   }
}