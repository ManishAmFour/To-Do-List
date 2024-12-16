
export default function SpecificPresentation(div){

document.querySelector(`.project-list`).innerHTML = div;

let backButton = document.createElement(`button`);

backButton.innerHTML = `<div class="go-back">Back</div>`

document.querySelector(`.project-list`).appendChild(backButton);

document.querySelector(`.go-back`).addEventListener(`click`,()=>{

window.location.reload();


})

}