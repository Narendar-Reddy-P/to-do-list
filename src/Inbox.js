import plusIcon from "../media/svg/plus.svg";
import {setTracker} from "../src/index.js";
export let mainContent=document.createElement("div");
mainContent.setAttribute("id","inboxPage");
//title
let title=document.createElement("div");
title.textContent="Inbox";
title.setAttribute("id","pageTitle");
mainContent.append(title);
//tasks Container
let taskContainer=document.createElement("div");
taskContainer.setAttribute("id","taskContainerInbox");
taskContainer.setAttribute("class","taskContainer");
mainContent.appendChild(taskContainer);
//<!-------add task
let addTaskInPage=document.createElement("div");
addTaskInPage.setAttribute("id","addTaskTextInbox");
addTaskInPage.setAttribute("class","addTaskInPage");
//img
let img=document.createElement("img");
img.src=plusIcon;
img.setAttribute("class","headicon");
addTaskInPage.appendChild(img);
//text
let addTaskTextInPage=document.createElement("div");
addTaskTextInPage.setAttribute("id","addTaskTextInbox");
addTaskTextInPage.textContent="add Task";
addTaskInPage.appendChild(addTaskTextInPage);
//event listener
let todoDialog=document.querySelector("#todoDialog");
let select=document.querySelector("#selectTodo");
addTaskInPage.addEventListener("click",()=>{
   setTracker("inbox");
   select.value="inbox";
   todoDialog.show();
});

// appending to mainContent
mainContent.appendChild(addTaskInPage);