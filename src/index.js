import { ToDoList , ProjectConstructor } from "./document.js";

DomArrange();

let ProjectList = [];
function DomArrange(){

document.querySelector(`.create-button`).addEventListener(`click`,()=>{

let InputFields = document.createElement(`div`);
InputFields.innerHTML = `<div><input class="input-title input-fields"><button class="enter-button">Enter</button></div>`

document.getElementById(`content`).appendChild(InputFields);

AddingToDo();

});
}

function AddingToDo(){

if(document.querySelector(`.enter-button`) !== null){    
document.querySelector(`.enter-button`).addEventListener(`click`,()=>{
    
    let inputTitle = document.querySelector(`.input-title`).value;
    let NewToDo = new ProjectConstructor(`${inputTitle}`);


    ProjectList.push(NewToDo.CreateProject());
    localStorage.setItem(`ProjectList`, JSON.stringify(ProjectList))
    document.querySelector(`.input-title`).value = ``;
    CreatingTheProjectDiv();
    RenderTheProject();


})}}


function CreatingTheProjectDiv(){

    let LatestDiv;

    JSON.parse(localStorage.getItem(`ProjectList`)).forEach((Project,index)=>{

        LatestDiv = index;


    })

document.querySelector(`.project-list`).innerHTML += `<div class="new-div" data-project-no="${LatestDiv}"></div>`

}


function RenderTheProject(){

document.querySelectorAll(`.new-div`).forEach((NewDiv)=>{

  
JSON.parse(localStorage.getItem(`ProjectList`)).forEach((Project,index)=>{


if(NewDiv.dataset.projectNo === String (index)){

    NewDiv.innerHTML = Project

}



})

})

}





