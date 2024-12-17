import { el } from "date-fns/locale"

export default function DisplaySpecificTodo(List){


document.querySelectorAll(`.show-button`).forEach((Show)=>{

Show.addEventListener(`click`,()=>{




List.forEach((element)=>{


    if(element.ProjectName === Show.dataset.projectNumber){


        if(element.Array.length !== 0){

            let LargeDiv;

            element.Array.forEach((Piece)=>{
            
            LargeDiv += `<div>
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



})


})

})


}