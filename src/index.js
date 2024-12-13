import { ToDoList } from "./document.js";


DomArrange();

function DomArrange(){

document.querySelector(`.create-button`).addEventListener(`click`,()=>{

let InputFields = document.createElement(`div`);
InputFields.innerHTML = `<div><input class="input-title input-fields"><input class="input-description input-fields"><input class="input-dueDate input-fields"><input class="input-priority input-fields"><input class="input-notes input-fields"><input class="input-checklist input-fields"><button class="enter-button">Enter</button></div>`

document.getElementById(`content`).appendChild(InputFields);

AddingToDo();

});
}

export function AddingToDo(){

if(document.querySelector(`.enter-button`) !== null){    
document.querySelector(`.enter-button`).addEventListener(`click`,()=>{
    
    let inputTitle = document.querySelector(`.input-title`).value;
    let inputDescription = document.querySelector(`.input-description`).value;
    let inputDueDate = document.querySelector(`.input-dueDate`).value;
    let inputPriority = document.querySelector(`.input-priority`).value;
    let inputNotes = document.querySelector(`.input-notes`).value;
    let inputChecklist = document.querySelector(`.input-checklist`).value;
    
    let NewToDo = new ToDoList(`${inputTitle}`,`${inputDescription}`,`${inputDueDate}`,`${inputPriority}`,`${inputNotes}`,`${inputChecklist}`);


    console.log(NewToDo);
    


})
}

}

export default DomArrange;







