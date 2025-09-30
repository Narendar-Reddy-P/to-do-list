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
   content.append(title);
   console.log(content);
   return content;
}
