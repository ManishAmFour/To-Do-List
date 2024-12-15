import { ProjectCreation, ToDoList} from "./document.js";
import './styles.css';

let List = JSON.parse(localStorage.getItem(`List`));
let EmptyToDo = JSON.parse(localStorage.getItem(`EmptyToDo`));


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
CreationOfTodo();
});
}

function CreationOfTodo(){

document.querySelector(`.enter-button`).addEventListener(`click`,()=>{

let ProjectName  = document.querySelector(`.input-projectName`).value;

let NewObject = new ProjectCreation(ProjectName);

List.push(NewObject);
SavingTheList();
RenderProjects();

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
        <div class="element-name">${element.ProjectName}</div>
        </div>`;

    })


document.querySelector(`.project-list`).innerHTML = `${BigDiv}`;
AdditionOfToDo();


}

function AdditionOfToDo(){

document.querySelectorAll(`.Project`).forEach((Name)=>{

Name.addEventListener(`click`,()=>{

    let InputTitle = document.createElement(`input`);
    let EnterButton = document.createElement(`button`);
    EnterButton.innerHTML = `<div class="enter-button-todo">Enter</div>`;
    document.querySelector(`.Project-${Name.dataset.projectId}`).appendChild(InputTitle);
   document.querySelector(`.Project-${Name.dataset.projectId}`).appendChild(EnterButton);



})

  


})


}



/*

function EditTheToDo(){

    document.querySelectorAll(`.project-name`).forEach((div)=>{


    div.addEventListener(`click`,()=>{

    List.forEach((Project,index)=>{
        if(Project.ProjectName === div.innerText){

            let element = List[index];

            let InputFields = document.createElement(`div`);
    InputFields.innerHTML = `<div>
    <input class="editInput-title input-fields">
    <input class="editInput-description input-fields">
    <input class="editInput-dueDate input-fields">
    <input class="editInput-priority input-fields">
    <input class="editInput-notes input-fields">
    <input class="editInput-checklist input-fields">
    <button class="enter-button-edit">Enter</button>
    <button class="delete-button-edit">Delete</button>

    </div>`


    document.getElementById(`content`).appendChild(InputFields);


    document.querySelectorAll(`.enter-button-edit`).forEach((edit)=>{

        edit.addEventListener(`click`,()=>{

            element.title = document.querySelector(`.editInput-title`).value;

            
            element.description = document.querySelector(`.editInput-description`).value;
            element.dueDate = document.querySelector(`.editInput-dueDate`).value;
            element.priority = document.querySelector(`.editInput-priority`).value;
            element.notes = document.querySelector(`.editInput-notes`).value;
            element.checklist = document.querySelector(`.editInput-checklist`).value;
            
            SavingTheList();
    
        })
        
        

    })


         
        }



    })




})

   
        
    })

}



function DeleteToDo(element){

    document.querySelectorAll(`.delete-button-edit`).forEach((button)=>{

        button.addEventListener(`click`,()=>{



            List.forEach((Name,index)=>{

                if(Name.ProjectName === element.ProjectName){

                      List.splice(index,1);  


                }

                SavingTheList();


            })
    
            RenderToDo();
    
        })

    })



}
*/
