import { Heading , MenuOrder } from "./Home";
import  {MenuDetails}  from "./Menu.js";

export let ContactDetails;

export function Contact(){

    console.log(`Contact-Tab`)


ContactDetails = document.createElement("div");

ContactDetails.innerHTML = `<div class="contact-div">

<div>Contact Info:- 8272XXXXXX
</div>
<div>Gmail:- ManishTewatiaXXXXXXXXXXX
</div>
<div>
Address:-
1234 Wobbly Lane,
Clumsyville


</div>
</div>`;

ContactDetails.classList.add(`contact-details`);



document.getElementById(`content`).appendChild(ContactDetails);

if(document.getElementById(`content`).contains(Heading)){
document.getElementById(`content`).removeChild(Heading)}

if(document.getElementById(`content`).contains(MenuOrder)){
document.getElementById(`content`).removeChild(MenuOrder)}

if(document.getElementById(`content`).contains(MenuDetails)){

    document.getElementById(`content`).removeChild(MenuDetails)


}



}