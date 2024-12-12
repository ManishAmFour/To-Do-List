
import { MenuDetails } from "./Menu.js";
import HomeImage from "./HomeImage.jpg"

import { ContactDetails } from "./ContactInfo.js";

export let Heading;
export let MenuOrder;

export default function MenuFunction(){
    

   Heading = document.createElement("div");
     MenuOrder = document.createElement("div");
    
    Heading.innerHTML = `<div class="Heading">RESTAURANT</div>`
   MenuOrder.innerHTML = `<div class="Home-Text" >Welcome To our Restaurant's Website </div>`
    
    MenuOrder.classList.add(`menu-order`)

    if(document.getElementById(`content`).contains(MenuDetails)){

        document.getElementById(`content`).removeChild(MenuDetails)

    }

    if(document.getElementById(`content`).contains(ContactDetails)){

        document.getElementById(`content`).removeChild(ContactDetails);

    }



    document.getElementById(`content`).appendChild(Heading)


    

    document.getElementById(`content`).appendChild(MenuOrder)


  


}

