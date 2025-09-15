export class ToDo{
   constructor(title,description,dueDate,priority){
      this.title= title;
      this.description= description;
      this.dueDate=dueDate;
      this.priority=priority;
      this.checklist=checklist;
   }
   setTitle(title){
      this.title= title;
   }
   setDescription(description){
      this.description= description;
   }
   setDueDate(dueDate){
      this.dueDate=dueDate;
   }
   setPriority(priority){
      this.priority= priority;
   }
   setChecklist(value){
      this.checklist= value;
   }
}