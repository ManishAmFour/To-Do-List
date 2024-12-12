
import { Heading , MenuOrder } from "./Home";

import { ContactDetails } from "./ContactInfo.js";

import Panner from "./paneer.jpg"

import Bread from "./hq720.jpg"

import aalo from "./aloo-gobi.jpg"

export let MenuDetails;

export function MenuOrderDetail(){

console.log(`Menu-Tab`)

MenuDetails = document.createElement("div");

MenuDetails.innerHTML = `<div class="First-Food foods-div">
<img class="food-photos food-first" src="${Panner}">
Shahi Paneer is a rich and creamy North Indian curry made with paneer (Indian cottage cheese) in a flavorful, mildly spiced gravy. The dish typically consists of a blend of ingredients like tomatoes, onions, yogurt, cream, and a variety of aromatic spices such as cumin, garam masala, turmeric, and coriander.
</div>
<div class="First-Food foods-div">
<img class="food-photos food-second" src="${Bread}">
Bread Omelette is a popular and quick breakfast or snack item in many countries, particularly in India, where it's commonly served as street food. It consists of a simple omelette made with beaten eggs, often seasoned with spices like salt, pepper, and sometimes chopped onions, tomatoes, green chilies, and herbs.</div>

`

MenuDetails.classList.add(`menu-details`)

console.log(MenuDetails)
document.getElementById(`content`).appendChild(MenuDetails)
if(document.getElementById(`content`).contains(Heading)){
document.getElementById(`content`).removeChild(Heading)}

if(document.getElementById(`content`).contains(MenuOrder)){
document.getElementById(`content`).removeChild(MenuOrder)}

if(document.getElementById(`content`).contains(ContactDetails)){
document.getElementById(`content`).removeChild(ContactDetails)
}




}

