import "./styles.css";
import MenuFunction from "./Home.js";
import {Contact} from "./ContactInfo.js"
import {MenuOrderDetail} from "./Menu.js";
import { MenuDetails } from "./Menu.js";
import { ContactDetails } from "./ContactInfo.js";

import { Heading } from "./Home.js";

document.querySelector(`.body`).classList.add(`background-image`)

MenuFunction();

let TopBar = document.createElement("div");
TopBar.classList.add(`top-bar`);

TopBar.innerHTML = `
    <div class="Home-tab">Home</div>
    <div class="Menu-tab">Menu</div>
    <div class="Contact-tab">contact</div>
    `

document.getElementById(`content`).appendChild(TopBar);

document.querySelector(`.Home-tab`).addEventListener(`click`,()=>{

if(!document.getElementById(`content`).contains(Heading)){

    MenuFunction();
}else{

    alert(`You are already in the Home tab silly`)
    
    }
})


document.querySelector(`.Menu-tab`).addEventListener(`click`,()=>{

if(!document.getElementById(`content`).contains(MenuDetails)){

    MenuOrderDetail();


}else{

alert(`You are already in the Menu tab silly`)

}
})


document.querySelector(`.Contact-tab`).addEventListener(`click`,()=>{


    if(!document.getElementById(`content`).contains(ContactDetails)){
    Contact();
    }else{

        alert(`You are already in the Contact tab silly`)
        
        }


})



