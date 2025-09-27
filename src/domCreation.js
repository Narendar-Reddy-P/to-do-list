import hashtag from "../media/svg/hash-tag.svg";
import deleteIcon from "../media/svg/delete.svg";
import editIcon from "../media/svg/edit.svg"


export function domProject(name,id){
   let li=document.createElement("li");
   li.setAttribute("id",`project${id}`);
   let img=document.createElement("img");
   img.src= hashtag;
   img.setAttribute("class","headicon");
   li.appendChild(img);
   let div=document.createElement("div");
   div.setAttribute("class","headlist");
   div.setAttribute("id",`projectName${id}`);
   div.textContent=name;
   li.appendChild(div);
   //edit
   let editImg=document.createElement("img");
   editImg.src=editIcon;
   editImg.setAttribute("class","headicon");
   editImg.setAttribute("id",`edit${id}`);
   editImg.dataset.id=id;
   console.log(editImg.dataset.id);
   li.appendChild(editImg);
   //delete
   let deleteImg=document.createElement("img");
   deleteImg.src= deleteIcon;
   deleteImg.setAttribute("class","headicon");
   deleteImg.setAttribute("id",`delete${id}`);
   deleteImg.dataset.id=id;
   li.appendChild(deleteImg);
   //dialog
   let dialog=document.createElement("dialog");
   dialog.setAttribute("id",`dialog${id}`);

   let input=document.createElement("input");
   input.setAttribute("type","text");
   input.value=div.textContent;
   input.setAttribute("id",`input${id}`);
   input.dataset.id=id;
   dialog.append(input);

   let save=document.createElement("button");
   save.setAttribute("id",`save${id}`);
   save.textContent="save";
   save.dataset.id=id;
   dialog.append(save);

   li.appendChild(dialog);
   return li;
}
export function deleteFunction(deleteImg,id){
   deleteImg.addEventListener("click",()=>{
      projectList
   });
}
export function domToDo(){

}
const projectList = document.querySelector("#projectList");