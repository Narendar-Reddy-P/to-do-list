import {trackerDict,setTracker} from "../src/index.js";
import plusIcon from "../media/svg/plus.svg";
export function createProjectPage(project){
   let content=document.createElement("div");
   let id= project.dataset.id;
   content.setAttribute("id",`projectPage${id}`);
   //select project elements
   let projectName=document.querySelector(`#projectName${id}`);
   let title=document.createElement("div");
   title.textContent=projectName.textContent;
   title.setAttribute("class","pageTitle");
   title.setAttribute("id",`projectPageTitle${id}`);
   content.appendChild(title);
   //taskContainer
   let taskContainer=document.createElement("div");
   taskContainer.setAttribute("id",`taskContainerProject${id}`);
   taskContainer.setAttribute("class","taskContainer");
   content.appendChild(taskContainer);
   //<---add task
   let addTaskInPage=document.createElement("div");
   addTaskInPage.setAttribute("id",`addTaskTextProject${id}`);
   //img
   let img=document.createElement("img");
   img.src=plusIcon;
   img.setAttribute("class","headicon");
   addTaskInPage.appendChild(img);
   //text
   let addTaskTextInPage=document.createElement("div");
   addTaskTextInPage.textContent="add Task";
   addTaskTextInPage.setAttribute("id",`addTaskTextProject${id}`);
   addTaskInPage.appendChild(addTaskTextInPage);
   //event listener
   let todoDialog=document.querySelector("#todoDialog");
   let select=document.querySelector("#selectTodo");
   trackerDict[`project${id}`]=`taskContainerProject${id}`;
   console.log(trackerDict);
   addTaskInPage.addEventListener("click",()=>{
      select.value=title.textContent;
      setTracker(`project${id}`);
      todoDialog.show();
   });
   content.appendChild(addTaskInPage);
   return content;
}
