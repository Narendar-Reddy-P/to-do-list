class Project{
   constructor(){
      this.array=[];
   }
   addTodo(todo){
      this.array.push(todo);
   }
   removeTodo(todo){
      let idx= this.array.indexOf(todo);
      if (idx ==-1) this.array.splice(idx,1);
   }
}