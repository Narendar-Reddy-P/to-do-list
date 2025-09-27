import { ToDo } from "./todo";
import {Project} from "./project";
import { domProject } from "./domCreation";
import { deleteFunction } from "./domCreation";
import "./style.css";



let selectTodo= document.querySelector("#selectTodo");
//ProjectCreation
let projectId=1;
let projectList={}
let olPL=document.querySelector("#projectList");
function createProject(name){
   projectList[`${projectId}`]=new Project(name,projectId);
   olPL.appendChild(domProject(name,projectId));
   //selection in task
   let option= document.createElement("option");
   option.setAttribute("id",`option${projectId}`);
   option.textContent=name;
   selectTodo.appendChild(option);
   //delete
   let deleteitem=document.querySelector(`#delete${projectId}`);
   deleteitem.addEventListener("click",()=>{
      let tempID=deleteitem.dataset.id;
      delete projectList[tempID];
      let tempPL=document.querySelector(`#project${tempID}`);
      tempPL.remove();
      let tempOption=document.querySelector(`#option${tempID}`);
      tempOption.remove();
   });
   //edit dialog opening
   let editItem=document.querySelector(`#edit${projectId}`);
   editItem.addEventListener("click",()=>{
      let tempID=editItem.dataset.id;
      let tempDialog=document.querySelector(`#dialog${tempID}`);
      tempDialog.show();  
   });
   // actual project name edit
   let saveEditedProjectName=document.querySelector(`#save${projectId}`);
   saveEditedProjectName.addEventListener("click",()=>{
      let tempID=saveEditedProjectName.dataset.id;
      let tempInput=document.querySelector(`#input${tempID}`);
      let tempPN=document.querySelector(`#projectName${tempID}`);
      tempPN.textContent=tempInput.value;
      let tempDialog=document.querySelector(`#dialog${tempID}`);
      tempDialog.close();
      projectList[`${tempID}`].editName(tempInput.value);
      let tempOption=document.querySelector(`#option${tempID}`);
      tempOption.textContent=tempInput.value;
      console.log(tempOption);
   });
   projectId++;
}

//Dialog
let addProject= document.querySelector("#plusCategory");
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

//ToDo
function createTodo(){
   
   let todo=new ToDo();

}




//ToDoCreation
let textTodo= document.querySelector("#textTodo");
let descriptionTodo= document.querySelector("#descriptionTodo");

let priorityTodo= document.querySelector("#priorityTodo");
let checkboxTodo= document.querySelector("#checkboxTodo");
let saveTodo= document.querySelector("#saveTodo");

saveTodo.addEventListener("click",()=>{

});


//main
let projectNone= new Project("none",0);

//DOM stuff
const head=document.querySelector("#head");
const sidebar = document.querySelector("#sidebar");
const sidebarInMain = document.querySelector("#sidebarInMain")
sidebar.addEventListener("click",()=>{
   head.classList.toggle("hidden");
   sidebarInMain.classList.toggle("hidden");
});
sidebarInMain.addEventListener("click",()=>{
   head.classList.toggle("hidden");
   sidebarInMain.classList.toggle("hidden");
});

const projectDropdown = document.querySelector("#projectDropdown");
const projectListDom=document.querySelector("#projectList");
projectDropdown.addEventListener("click",()=>{
   projectDropdown.classList.toggle("rotateRA");
   projectListDom.classList.toggle("hidden");
});