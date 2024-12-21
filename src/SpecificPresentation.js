import { el } from "date-fns/locale"


export function DefaultList(List){

  document.querySelector(`.current-project-name`).innerText = `Default Projects`;

  List.forEach((project)=>{

    let ProjectSummary = document.createElement(`div`);
    ProjectSummary.innerHTML = `<div>${project.ProjectName}</div>`

    document.querySelector(`.Project-display`).appendChild(ProjectSummary);

  })

}


export default function DisplaySpecificTodo(innerText){


  document.querySelector(`.current-project-name`).innerText = `${innerText}`;


  /*
List.forEach((element)=>{


    if(element.ProjectName === Show.dataset.projectNumber){


        if(element.Array.length !== 0){

            let LargeDiv = ``;

            element.Array.forEach((Piece)=>{
            
            LargeDiv += `
            <div class="specific-list">
            <div>
            ${Piece.title}
            </div>
            <div>
              ${Piece.description}  
            </div>
            <div>
              ${Piece.dueDate}  
            </div>
            <div>
              ${Piece.priority}  
            </div>
            <div>
              ${Piece.notes}  
            </div>
            </div>
            `



        })

        LargeDiv += `<button class="go-back" >Go Back</button>`;


        document.getElementById(`content`).innerHTML = LargeDiv;

        document.querySelector(`.go-back`).addEventListener(`click`,()=>{

            window.location.reload();
        
        
        })
        
        }else{

            alert(`Empty Project Click Edit to add Todo`)


        }


    }



})*/







}