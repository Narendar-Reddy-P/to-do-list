import paper from "../media/svg/default.svg";

export function domProject(name,id){
   let li=document.createElement("li");
   li.setAttribute("id",`${id}`);
   let img=document.createElement("img");
   img.src= paper;
   img.setAttribute("class","headicon");
   li.appendChild(img);
   let div=document.createElement("div");
   div.setAttribute("class","headlist");
   div.textContent=name;
   li.appendChild(div);
   return li;
}

export function domToDo(){

}