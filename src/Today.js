import { setTracker } from "../src/index.js";
import plusIcon from "../media/svg/plus.svg"
export let mainContent=document.createElement("div");
mainContent.setAttribute("id","todayPage");
let title=document.createElement("div");
title.textContent="Today";
title.setAttribute("id","pageTitle");
mainContent.append(title);
//tasks Container
let taskContainer=document.createElement("div");
taskContainer.setAttribute("id","taskContainerToday");
taskContainer.setAttribute("class","taskContainer");
mainContent.appendChild(taskContainer);
//<!-------add task
let addTaskInPage=document.createElement("div");
addTaskInPage.setAttribute("id","addTaskTextToday");
addTaskInPage.setAttribute("class","addTaskInPage");
//img
let img=document.createElement("img");
img.src=plusIcon;
img.setAttribute("class","headicon");
addTaskInPage.appendChild(img);
//text
let addTaskTextInPage=document.createElement("div");
addTaskTextInPage.setAttribute("id","addTaskTextToday");
addTaskTextInPage.textContent="add Task";
addTaskInPage.appendChild(addTaskTextInPage);
//event listener
let todoDialog=document.querySelector("#todoDialog");
let select=document.querySelector("#selectTodo");
addTaskInPage.addEventListener("click",()=>{
   select.value="today";
   setTracker("today");
   todoDialog.show();
});

// appending to mainContent
mainContent.appendChild(addTaskInPage);