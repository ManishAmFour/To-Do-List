import { ProjectCreation, ToDoList} from "./document.js";
import './styles.css';
import SpecificPresentation from "./SpecificPresentation.js";

let List = JSON.parse(localStorage.getItem(`List`));
let EmptyToDo = JSON.parse(localStorage.getItem(`EmptyToDo`));


console.log(List);

function RenderFullList(){

    document.querySelectorAll(`.Project`).forEach((div)=>{

        List.forEach((singular)=>{
        
            if(singular.ProjectName === div.innerText){

                singular.Array.forEach((element)=>{

                    div.innerHTML += `<div>${element.title}</div>
                    <div>${element.description}</div>
                    <div>${element.dueDate}</div>
                    <div>${element.priority}</div>
                    `


                })


            }


        })



    })



    document.querySelectorAll(`.Project`).forEach((div)=>{

        List.forEach((element)=>{


                div.addEventListener(`click`,()=>{


                    SpecificPresentation(div.innerHTML);
        
        
                })


            


        })




        


    })


}



if(List === null){

List = [];
}


if(EmptyToDo === null){

    EmptyToDo = [];
}


DomArrange();
function DomArrange(){

document.querySelector(`.create-button`).addEventListener(`click`,()=>{

let InputFields = document.createElement(`div`);
InputFields.innerHTML = `<div>
<input class="input-projectName input-fields">
<button class="enter-button">Enter</button>
</div>`


    
        document.getElementById(`content`).appendChild(InputFields);

        
    

CreationOfTodo(InputFields);

});
}

function CreationOfTodo(InputFields){

document.querySelector(`.enter-button`).addEventListener(`click`,()=>{

let ProjectName  = document.querySelector(`.input-projectName`).value;

let NewObject = new ProjectCreation(ProjectName);

List.push(NewObject);
SavingTheList();
RenderProjects();
document.getElementById(`content`).removeChild(InputFields);
//RenderFullList();
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
        <button class="edit-button" data-project-id = "${index1}" data-project-number ="${element.ProjectName}" >Edit</button>
        </div>`;

    })


document.querySelector(`.project-list`).innerHTML = `${BigDiv}`;
AdditionOfToDo();


}

function AdditionOfToDo(){

document.querySelectorAll(`.edit-button`).forEach((ProjectName)=>{

    ProjectName.addEventListener(`click`,()=>{

        

        let InputTitle = document.createElement(`input`);
        let InputDescription = document.createElement(`input`);
        let InputDueDate = document.createElement(`input`);
        let InputNotes = document.createElement(`input`);
        let InputPriority = document.createElement(`input`);
        let EnterButton = document.createElement(`button`);
        EnterButton.innerHTML = `<div class="enter-button-todo">Enter</div>`;
       
       
        document.querySelector(`.Project-${ProjectName.dataset.projectId}`).appendChild(InputTitle);
       document.querySelector(`.Project-${ProjectName.dataset.projectId}`).appendChild(InputDescription);
       document.querySelector(`.Project-${ProjectName.dataset.projectId}`).appendChild(InputDueDate);
       document.querySelector(`.Project-${ProjectName.dataset.projectId}`).appendChild(InputNotes);
       document.querySelector(`.Project-${ProjectName.dataset.projectId}`).appendChild(InputPriority);
       document.querySelector(`.Project-${ProjectName.dataset.projectId}`).appendChild(EnterButton);



       document.querySelectorAll(`.enter-button-todo`).forEach((enterButton)=>{

        enterButton.addEventListener(`click`,()=>{
    

            if(InputTitle.value !== ``){

            let NewObject = new ToDoList(InputTitle.value,InputDescription.value,InputDueDate.value,InputNotes.value,InputPriority.value);
           
                (ProjectName.dataset.projectNumber);

            List.forEach((Individual)=>{

                if(ProjectName.dataset.projectNumber === Individual.ProjectName){
   

                 Individual.Array.push(NewObject);
                    SavingTheList();
                   }
   
console.log(List);

   
               })
   
               document.querySelector(`.Project-${ProjectName.dataset.projectId}`).removeChild(InputTitle);
               document.querySelector(`.Project-${ProjectName.dataset.projectId}`).removeChild(InputDescription);
               document.querySelector(`.Project-${ProjectName.dataset.projectId}`).removeChild(InputDueDate);
               document.querySelector(`.Project-${ProjectName.dataset.projectId}`).removeChild(InputNotes);
               document.querySelector(`.Project-${ProjectName.dataset.projectId}`).removeChild(InputPriority);
               document.querySelector(`.Project-${ProjectName.dataset.projectId}`).removeChild(EnterButton);


            }
           else{
            
            alert(`Entert The input first`);


           }


        })


       })


    })



})



}

//RenderFullList();