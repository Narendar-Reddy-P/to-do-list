let tracker;
export function setTracker(val){
   tracker=val;
}
function getTracker(){
   return tracker;
}
export let trackerDict={};
trackerDict["inbox"]="taskContainerInbox";
trackerDict["today"]="taskContainerToday";
trackerDict["completed"]="taskContainerCompleted";

import {Project} from "./project";
import { domProject } from "./domCreation";
import {mainContent as todayPage} from "./Today";
import { mainContent as completedPage } from "./Completed";
import {mainContent as inboxPage} from "./Inbox";
import { createProjectPage } from "./projectPage";
import "./style.css";

//text:id
//<-------mainContent-------->
//main content
let mainContent=document.querySelector("#mainContent");
todayPage.style.display="none";
inboxPage.style.display="none";
completedPage.style.display="none";
mainContent.appendChild(todayPage);
mainContent.appendChild(completedPage);
mainContent.appendChild(inboxPage);
//buttons
let todayButton=document.querySelector("#today");
let completedButton=document.querySelector("#completed");
let inboxButton=document.querySelector("#inbox");
//lists
let togglePLList=[todayPage, completedPage, inboxPage];
let togglePLButtonList=[todayButton, inboxButton, completedButton];
//function to activate
function setActive(activeContent, activeButton){
   togglePLList.forEach(c=>c.style.display="none");
   togglePLButtonList.forEach(b=>b.classList.remove("pressed"));
   activeContent.style.display="block";
   activeButton.classList.add("pressed");
}
setActive(inboxPage,inboxButton);
mainContent.dataset.currentPage=`inboxPage`;
todayButton.addEventListener("click",()=>{
   setActive(todayPage,todayButton);
   mainContent.dataset.currentPage=`todayButton`;
});
inboxButton.addEventListener("click",()=>{
   setActive(inboxPage,inboxButton);
   mainContent.dataset.currentPage=`inboxButton`;
});
completedButton.addEventListener("click",()=>{
   setActive(completedPage,completedButton);
   mainContent.dataset.currentPage=`completedButton`;
});
//select Todo is todoDialog
let selectTodo= document.querySelector("#selectTodo");
//ProjectCreation
let projectId=1;
let projectList={};
let olPL=document.querySelector("#projectList");
function createProject(name){
   projectList[`${projectId}`]=new Project(name,projectId);
   let tempProject=domProject(name,projectId);
   tempProject.dataset.id=projectId;
   olPL.appendChild(tempProject);
   //selection in task
   let option= document.createElement("option");
   option.setAttribute("id",`option${projectId}`);
   option.textContent=name;
   selectTodo.appendChild(option);
   //projectPage setup
   let tempProjectPage=createProjectPage(tempProject);
   tempProjectPage.style.display="none";
   togglePLList.push(tempProjectPage);
   togglePLButtonList.push(tempProject);
   mainContent.append(tempProjectPage);
   //project Name event listener
   let tempProjectName=document.querySelector(`#projectName${projectId}`);
   tempProjectName.addEventListener("click",()=>{
      setActive(tempProjectPage,tempProject);
      mainContent.dataset.currentPage=tempProjectName.id;
   });
   //delete
   let deleteitem=document.querySelector(`#delete${projectId}`);
   deleteitem.addEventListener("click",()=>{
      let tempID=deleteitem.dataset.id;
      delete projectList[tempID];//project list mean just a line in nav
      let tempPL=document.querySelector(`#project${tempID}`);
      let tempOption=document.querySelector(`#option${tempID}`);
      tempOption.remove();
      togglePLList.splice(togglePLList.indexOf(tempProjectPage),1);
      togglePLButtonList.splice(togglePLButtonList.indexOf(tempPL),1);
      tempProjectPage.style.display="none";
      tempProjectPage.remove();
      tempPL.remove();
      if(mainContent.dataset.currentPage==tempProjectName.id){
         setActive(inboxPage,inboxButton);
         mainContent.dataset.currentPage=`inboxPage`;
      }
      console.log(trackerDict);
      delete trackerDict[`project${tempID}`];
      console.log(trackerDict);
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
      let projectPageTitle=document.querySelector(`#projectPageTitle${tempID}`);
      console.log(projectPageTitle);
      projectPageTitle.textContent=tempInput.value;
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

//add Todo
let todoDialog=document.querySelector("#todoDialog");
let addTodoButton=document.querySelector("#addTodo");
addTodoButton.addEventListener("click",()=>{
   todoDialog.show();
});
let cancelTodoDialog=document.querySelector("#cancelTodoDialog");
cancelTodoDialog.addEventListener("click",(e)=>{
   e.preventDefault();
   todoDialog.close();
});
let saveTodoDialog=document.querySelector("#saveTodoDialog");
saveTodoDialog.addEventListener("click",(e)=>{
   console.log(trackerDict[getTracker()]);
   console.log(getTracker());
   console.log(tracker);
   e.preventDefault();
   todoDialog.close();
});
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