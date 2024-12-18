import { ProjectCreation, ToDoList} from "./document.js";
import './styles.css';
import DisplaySpecificTodo from "./SpecificPresentation.js";
//import {  format, formatDistance, formatRelative, subDays } from 'date-fns'

let List = JSON.parse(localStorage.getItem(`List`));
let EmptyToDo = JSON.parse(localStorage.getItem(`EmptyToDo`));

DomArrange();

RenderFullList();


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

function DomArrange(){

document.querySelector(`.create-button`).addEventListener(`click`,()=>{

let InputFields = document.createElement(`div`);
InputFields.innerHTML = `<div class="full-project-field">
<input class="input-projectName input-fields">
<button class="enter-button">Enter</button>
</div>`


    if(Meter === true){

    document.getElementById(`content`).appendChild(InputFields);
    CreationOfTodo(InputFields,Meter);
    Meter = false;
    }
   
});
}

function CreationOfTodo(InputFields){

document.querySelector(`.enter-button`).addEventListener(`click`,()=>{

let ProjectName  = document.querySelector(`.input-projectName`).value;

let NewObject = new ProjectCreation(ProjectName);

if(ProjectName !== ``){

List.push(NewObject);
SavingTheList();
RenderProjects();
Meter = true;
document.getElementById(`content`).removeChild(InputFields);
}else{

    alert(`Enter Valid Project Name`);

}



})
}


function SavingTheList(){

localStorage.setItem(`List`, JSON.stringify(List));

}

RenderProjects();

function RenderProjects(){

    let BigDiv = ``;

    List.forEach((element,index1)=>{

        BigDiv += `<div class="Project Project-${index1}" data-project-id="${index1}" >
        <div class="element-name" data-project-id = "${index1}">${element.ProjectName}</div>
        <button class="show-button" data-project-id = "${index1}" data-project-number ="${element.ProjectName}" >Show</button>
        <button class="delete-button" data-project-id = "${index1}" data-project-number ="${element.ProjectName}">Delete</button>
        </div>`;

    })


document.querySelector(`.project-list`).innerHTML = `${BigDiv}`;
DisplaySpecificTodo(List);
ProjectDeletion();

}

AdditionOfToDo();

function AdditionOfToDo(){

let Meter = true;

document.querySelector(`.create-todo-button`).addEventListener(`click`,()=>{

        let InputProject = document.createElement(`select`);
        let InputTitle = document.createElement(`input`);
        let InputDescription = document.createElement(`input`);
        let InputDueDate = document.createElement(`input`);
        InputDueDate.type = "date";

        let InputNotes = document.createElement(`input`);
        let InputPriority = document.createElement(`input`);
        let EnterButton = document.createElement(`button`);
        EnterButton.innerHTML = `<div class="enter-button-todo">Enter</div>`;
       
    InputProject.classList.add(`project-select`);

    let OptionSelector = ``;


    List.forEach((element)=>{

      let SingleOption =  `<option class="${element.ProjectName}">${element.ProjectName}</option>`
        
      OptionSelector += SingleOption;

    })
    
InputProject.innerHTML = OptionSelector;


document.querySelector(`.create-button`).classList.add(`display-none`);
document.querySelector(`.list-div`).classList.add(`display-none`);

document.querySelectorAll(`.project-list`).forEach((List)=>{

    List.classList.add(`display-none`);


})

document.querySelectorAll(`.full-project-field`).forEach((Input)=>{

    Input.classList.add(`display-none`);



})


if(Meter === true){

    document.getElementById(`content`).appendChild(InputProject);
    document.getElementById(`content`).appendChild(InputTitle);
    document.getElementById(`content`).appendChild(InputDescription);
    document.getElementById(`content`).appendChild(InputDueDate);
    document.getElementById(`content`).appendChild(InputNotes);
    document.getElementById(`content`).appendChild(InputPriority);
    document.getElementById(`content`).appendChild(EnterButton);


    Meter = false;

}
 
      document.querySelector(`.enter-button-todo`).addEventListener(`click`,()=>{
        
    if(InputTitle.value !== `` && InputDescription.value !== `` && InputDueDate.value !== `` && InputNotes.value !== `` && InputPriority.value !== ``){

    let NewObject = new ToDoList(InputTitle.value,InputDescription.value,InputDueDate.value,InputNotes.value,InputPriority.value);

     List.forEach((Individual)=>{

        if(InputProject.value === Individual.ProjectName){

         Individual.Array.push(NewObject);
            SavingTheList();
        
        }


       })

       document.querySelector(`.create-button`).classList.remove(`display-none`);
       document.querySelector(`.list-div`).classList.remove(`display-none`);



       document.querySelectorAll(`.project-list`).forEach((List)=>{
       
           List.classList.remove(`display-none`);
       
       
       })
       

  
       
       document.getElementById(`content`).removeChild(InputTitle);
       document.getElementById(`content`).removeChild(InputDescription);
       document.getElementById(`content`).removeChild(InputDueDate);
       document.getElementById(`content`).removeChild(InputNotes);
       document.getElementById(`content`).removeChild(InputPriority);
       document.getElementById(`content`).removeChild(EnterButton);


       

    }
   else{
    
    alert(`Entert The input first`);


   }




})

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





