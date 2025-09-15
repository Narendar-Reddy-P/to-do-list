import { ToDo } from "./todo";
import {Project} from "./project";
import { domProject } from "./domCreation";
import "./style.css";




//ProjectCreation
let projectId=1;
let projectList={}
let ol=document.querySelector("ol");
function createProject(name){
   projectList[`${projectId}`]=new Project(name,projectId);
   console.log(ol);
   ol.appendChild(domProject(name,projectId++));
   // let option= document.createElement("option");
   // option.setAttribute("value",name);
   // option.textContent=name;
   // selectTodo.appendChild(option);
}

//Dialog
let addProject= document.querySelector("#addProject");
let projectDialog= document.querySelector("#projectDialog");
let cancelDialog=document.querySelector("#closeDialog");
let saveDialog=document.querySelector("#saveDialog");
let textDialog=document.querySelector("#textDialog");
addProject.addEventListener("click",()=>{
   projectDialog.showModal();
});
cancelDialog.addEventListener("click",()=>{
   projectDialog.close();
});
saveDialog.addEventListener("click",()=>{
   createProject(textDialog.value);
   projectDialog.close();
});
let todoSave= document.querySelector("#todoSave");
todoSave.addEventListener("click",()=>{
   createProject(textDialog.value);
});

//ToDo
function createTodo(){
   let todo=new ToDo();
}



//ToDoCreation
let textTodo= document.querySelector("#textTodo");
let descriptionTodo= document.querySelector("#descriptionTodo");
let selectTodo= document.querySelector("#selectTodo");
let priorityTodo= document.querySelector("#priorityTodo");
let checkboxTodo= document.querySelector("#checkboxTodo");
let saveTodo= document.querySelector("#saveTodo");

saveTodo.addEventListener("click",()=>{

});


//main
let projectNone= new Project("none",0);