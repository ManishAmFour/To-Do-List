import { ProjectCreation, ToDoList} from "./document.js";
import './styles.css';
import DisplaySpecificTodo from "./SpecificPresentation.js";
import DeleteImageSrc from './delete.png'

import { DefaultList } from "./SpecificPresentation.js";
import { tr } from "date-fns/locale";
//import {  format, formatDistance, formatRelative, subDays } from 'date-fns'

let List = JSON.parse(localStorage.getItem(`List`));
let EmptyToDo = JSON.parse(localStorage.getItem(`EmptyToDo`));

//DefaultList(List);


DomArrange();
BasicLayout();

function BasicLayout(){


    let TopBar = document.createElement(`div`);
    let SideBar = document.createElement(`div`);


    TopBar.classList.add(`top-bar`);
    document.getElementById(`content`).appendChild(TopBar);

    SideBar.classList.add(`side-bar`);
    SideBar.innerHTML = `<div class="new-button">Menu buttons</div>`
    document.getElementById(`content`).appendChild(SideBar);


}






function RenderFullList(){

    let ListDiv = document.createElement(`div`);

    ListDiv.classList.add(`list-div`);

    document.getElementById(`content`).appendChild(ListDiv);

    let ListBigDiv = ``;
    let ProjectHeading;

    if(List !== null){

    List.forEach((element)=>{
        
        ProjectHeading = `<div class="project-title">${element.ProjectName}</div>`;
        ListBigDiv += ProjectHeading;

        if(element.Array.length !== 0){

        element.Array.forEach((IndividualElement)=>{




            ListBigDiv += `
            <div class="render-list">
            <div>${IndividualElement.title}</div>
            <div>${IndividualElement.priority}</div>
            <div>${IndividualElement.notes}</div>
            <div>${IndividualElement.dueDate}</div>
            <div>${IndividualElement.description}</div>
            </div>
            `


        })
        }




    })


    document.querySelector(`.list-div`).innerHTML = ListBigDiv;


    }

}





if(List === null){

List = [];
}


if(EmptyToDo === null){

    EmptyToDo = [];
}

let Meter = true;
let DefaultValue = false;

function DomArrange(){

document.querySelector(`.create-button`).addEventListener(`click`,()=>{


let InputFields = document.createElement(`div`);
InputFields.innerHTML = `<div class="full-project-field">
<input class="input-projectName input-fields" maxlength="17" >
<button class="enter-button">Enter</button>
</div>`


    if(Meter === true || DefaultValue === true){

        document.getElementById(`content`).appendChild(InputFields);
        ToggleThePage();

    CreationOfTodo(InputFields,Meter);
    Meter = false;


    }
   
});
}


function ToggleThePage(){

document.querySelectorAll(`.default-button`).forEach((button)=>{

    if(!button.classList.contains(`display-none`)){

    button.classList.add(`display-none`);
    }else{

        button.classList.remove(`display-none`);

    }

})

    if(!document.querySelector(`.new-button`).classList.contains(`display-none`)){


        document.querySelector(`.new-button`).classList.add(`display-none`);


    }
 


document.querySelectorAll(`.project-list`).forEach((project)=>{

    if(!project.classList.contains(`display-none`)){

    project.classList.add(`display-none`)}else{

        project.classList.remove(`display-none`)

    }


})


if(!document.querySelector(`.project-upper`).classList.contains(`display-none`)){
    document.querySelector(`.project-upper`).classList.add(`display-none`);

}else{

    document.querySelector(`.project-upper`).classList.remove(`display-none`);



}

if(!document.querySelector(`.Project-header`).classList.contains(`display-none`)){

    document.querySelector(`.Project-header`).classList.add(`display-none`);


}else{

    document.querySelector(`.Project-header`).classList.remove(`display-none`);



}


}


function CreationOfTodo(InputFields){

document.querySelector(`.enter-button`).addEventListener(`click`,()=>{

if(List.length <= 9){

    let ProjectName  = document.querySelector(`.input-projectName`).value;

let NewObject = new ProjectCreation(ProjectName);

if(ProjectName !== ``){

List.push(NewObject);
SavingTheList();

RenderProjects();



Meter = true;
document.getElementById(`content`).removeChild(InputFields);
ToggleThePage();


}else{

    alert(`Enter Valid Project Name`);

}

}else{

    alert(`List poori ho gyi bhai`);
    document.getElementById(`content`).removeChild(InputFields);
    ToggleThePage();
   DefaultValue = true;
}




})
}


function SavingTheList(){

localStorage.setItem(`List`, JSON.stringify(List));

}

RenderProjects();
ProjectTitleManu();

function ProjectTitleManu(){

    let ProjectTitle = document.createElement(`div`);
    ProjectTitle.innerText = `Project Title`;
    ProjectTitle.classList.add(`project-upper`)
    document.body.appendChild(ProjectTitle);

}

function RenderProjects(){

    let BigDiv = ``;
   

    List.forEach((element,index1)=>{

        BigDiv += `<div class="Project Project-${index1}" data-project-id="${index1}" >
        <div class="element-name" data-project-id = "${index1}">${element.ProjectName}</div>
        <button class="delete-button" data-project-id = "${index1}" data-project-number ="${element.ProjectName}"></button>
        </div>`;

    })


document.querySelector(`.project-list`).innerHTML = BigDiv;

document.querySelectorAll(`.delete-button`).forEach((button)=>{

    let DeleteImage = document.createElement('img');
    DeleteImage.src = DeleteImageSrc;
    DeleteImage.classList.add('delete-img-button')

    button.appendChild(DeleteImage);

})
ProjectDeletion();

document.querySelectorAll(`.Project`).forEach((Project)=>{


    Project.addEventListener(`click`,()=>{

        let innerText = Project.innerText;

        DisplaySpecificTodo(innerText);
    


    
    })


    

})


}

AdditionOfToDo();

function AdditionOfToDo(){

let Meter = true;

document.querySelector(`.create-todo-button`).addEventListener(`click`,()=>{
    
    console.log(List);

    if(List.length !== 0){

     


        let InputProject = document.createElement(`select`);
        InputProject.classList.add(`todo-element`);

        let InputTitle = document.createElement(`input`);
        InputTitle.setAttribute('maxlength',17);
        InputTitle.classList.add(`todo-element`)
        InputTitle.classList.add(`input-title`)

        let InputDescription = document.createElement(`input`);
        InputDescription.setAttribute('maxlength',55);

        InputDescription.classList.add(`todo-element`)
        InputDescription.classList.add(`input-description`)

        let InputDueDate = document.createElement(`input`);
        InputDueDate.classList.add(`todo-element`)
        InputDueDate.classList.add(`input-duedate`)
        InputDueDate.type = "date";

      

        let InputPriority = document.createElement(`select`);
        InputPriority.innerHTML = `<option>
        High
        </option>
        <option>
        Medium
        </option>
        <option>
        Low
        </option>
        `;
        InputPriority.classList.add(`todo-element`)
        InputPriority.classList.add(`input-priority`)

        let EnterButton = document.createElement(`button`);
        EnterButton.innerText = `Enter`;
        EnterButton.classList.add(`enter-button-input`)
       
    InputProject.classList.add(`project-select`);

    let OptionSelector = ``;

    List.forEach((element)=>{

      let SingleOption =  `<option class="${element.ProjectName}">${element.ProjectName}</option>`
        
      OptionSelector += SingleOption;

    })
    
    InputProject.innerHTML = OptionSelector;
    ToggleThePage();

    if(Meter === true){

    document.querySelector(`.Project-display`).appendChild(InputProject);

    document.querySelector(`.Project-display`).appendChild(InputTitle);
    document.querySelector(`.Project-display`).appendChild(InputDescription);
    document.querySelector(`.Project-display`).appendChild(InputDueDate);
    document.querySelector(`.Project-display`).appendChild(InputPriority);
    document.querySelector(`.Project-display`).appendChild(EnterButton);

  


    Meter = false;

    }

    document.querySelectorAll(`.enter-button-input`).forEach((button)=>{

    button.addEventListener(`click`,()=>{

        if(InputTitle.value !== `` && InputDescription.value !== `` && InputDueDate.value !== `` && InputPriority.value !== ``){

        
            let NewObject = new ToDoList(InputTitle.value,InputDescription.value,InputDueDate.value,InputPriority.value);
        
             List.forEach((Individual)=>{
        
                if(InputProject.value === Individual.ProjectName){
        
                 Individual.Array.push(NewObject);
                    SavingTheList();
                
                }
        
        
               })
        
             
        
        
          
               

            document.querySelector(`.Project-display`).removeChild(InputProject);
            document.querySelector(`.Project-display`).removeChild(InputTitle);
            document.querySelector(`.Project-display`).removeChild(InputDescription);
            document.querySelector(`.Project-display`).removeChild(InputDueDate);
            document.querySelector(`.Project-display`).removeChild(InputPriority);
            document.querySelector(`.Project-display`).removeChild(EnterButton);
                

        ToggleThePage();
        console.log(List);
            Meter = true;       
        
            }
           else{
            
            alert(`Entert The input first`);
        
        
           }
        

    })



    })
 

}else{

    alert(`No Projects Found`);

}



})

 


}

function ProjectDeletion(){

document.querySelectorAll(`.delete-button`).forEach((button)=>{

button.addEventListener(`click`,()=>{

List.forEach((element,index)=>{

if(element.ProjectName === button.dataset.projectNumber){

    List.splice(index,1);

    SavingTheList();
    RenderProjects();

}



})


})

})


}





