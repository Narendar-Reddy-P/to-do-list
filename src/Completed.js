import { setTracker } from "../src/index.js";
import plusIcon from "../media/svg/plus.svg";
export let mainContent=document.createElement("div");
mainContent.setAttribute("id","completedPage");
let title=document.createElement("div");
title.textContent="Completed";
title.setAttribute("id","pageTitle");
mainContent.append(title);
//tasks Container
let taskContainer=document.createElement("div");
taskContainer.setAttribute("id","taskContainerCompleted");
taskContainer.setAttribute("class","taskContainer");
mainContent.appendChild(taskContainer);
//<!-------add task
let addTaskInPage=document.createElement("div");
addTaskInPage.setAttribute("id","addTaskTextCompleted");
addTaskInPage.setAttribute("class","addTaskInPage");
//img
let img=document.createElement("img");
img.src=plusIcon;
img.setAttribute("class","headicon");
addTaskInPage.appendChild(img);
//text
let addTaskTextInPage=document.createElement("div");
addTaskTextInPage.setAttribute("id","addTaskTextCompleted");
addTaskTextInPage.textContent="add Task";
addTaskInPage.appendChild(addTaskTextInPage);
//event listener
let todoDialog=document.querySelector("#todoDialog");
let select=document.querySelector("#selectTodo");
let checkbox=document.querySelector("#checkboxTodo");
addTaskInPage.addEventListener("click",()=>{
   select.value="completed";
   setTracker("completed");
   checkbox.checked=true;
   todoDialog.show();
});

// appending to mainContent
mainContent.appendChild(addTaskInPage);