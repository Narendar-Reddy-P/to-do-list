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
   li.appendChild(editImg)
   //delete
   let deleteImg=document.createElement("img");
   deleteImg.src= deleteIcon;
   deleteImg.setAttribute("class","headicon");
   deleteImg.setAttribute("id",`delete${id}`);
   deleteImg.dataset.id=id;
   li.appendChild(deleteImg);
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