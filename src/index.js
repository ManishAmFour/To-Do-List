import { ProjectCreation, ToDoList} from "./document.js";
import './styles.css';
import DisplaySpecificTodo from "./SpecificPresentation.js";

let List = JSON.parse(localStorage.getItem(`List`));
let EmptyToDo = JSON.parse(localStorage.getItem(`EmptyToDo`));


RenderFullList();

function RenderFullList(){

    let ListDiv = document.createElement(`div`);

    ListDiv.classList.add(`list-div`);

    document.getElementById(`content`).appendChild(ListDiv);

    let ListBigDiv;

    if(List !== null){

    List.forEach((element)=>{

        if(element.Array.length !== 0){

        element.Array.forEach((IndividualElement)=>{

            ListBigDiv += `<div>${IndividualElement.title}</div>
            <div>${IndividualElement.priority}</div>
            <div>${IndividualElement.notes}</div>
            <div>${IndividualElement.dueDate}</div>
            <div>${IndividualElement.description}</div>

            `


        })

        
        document.querySelector(`.list-div`).innerHTML = ListBigDiv;
        }
    })
    }

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
        <button class="show-button" data-project-id = "${index1}" data-project-number ="${element.ProjectName}" >Show</button>
        </div>`;

    })


document.querySelector(`.project-list`).innerHTML = `${BigDiv}`;
DisplaySpecificTodo(List);

}

AdditionOfToDo();

function AdditionOfToDo(){

document.querySelector(`.create-todo-button`).addEventListener(`click`,()=>{

        let InputProject = document.createElement(`select`);
        let InputTitle = document.createElement(`input`);
        let InputDescription = document.createElement(`input`);
        let InputDueDate = document.createElement(`input`);
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

document.getElementById(`content`).appendChild(InputProject);
document.getElementById(`content`).appendChild(InputTitle);
document.getElementById(`content`).appendChild(InputDescription);
document.getElementById(`content`).appendChild(InputDueDate);
document.getElementById(`content`).appendChild(InputNotes);
document.getElementById(`content`).appendChild(InputPriority);
document.getElementById(`content`).appendChild(EnterButton);




       
      /*  document.querySelector(`.Project-${ProjectName.dataset.projectId}`).appendChild(InputTitle);
       document.querySelector(`.Project-${ProjectName.dataset.projectId}`).appendChild(InputDescription);
       document.querySelector(`.Project-${ProjectName.dataset.projectId}`).appendChild(InputDueDate);
       document.querySelector(`.Project-${ProjectName.dataset.projectId}`).appendChild(InputNotes);
       document.querySelector(`.Project-${ProjectName.dataset.projectId}`).appendChild(InputPriority);
       document.querySelector(`.Project-${ProjectName.dataset.projectId}`).appendChild(EnterButton);
*/


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

       window.location.reload();

    }
   else{
    
    alert(`Entert The input first`);


   }




})

      
       


    


})

 


}





