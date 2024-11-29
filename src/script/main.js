import '../style/style.css'
import {progressBar} from './progress-bar.js';
document.addEventListener("DOMContentLoaded", progressBar);
import {Begin} from "./Begin.js";
Begin();
import {Login} from "./Login.js";
Login();
function ProductStructureDiv(){
    const DropdownButton = document.getElementById("DropdownButton");
    const SizeList = document.getElementById("SizeList");
    const DropdownButtonColor = document.getElementById("DropdownButtonColor");
    const InputColor = document.getElementById("InputColor");
    DropdownButton.addEventListener("click",(event)=>{
        event.stopPropagation();
        if (SizeList.style.display==="none"||SizeList.style.display===""){
            SizeList.style.display = "block";
        }
        else {
            SizeList.style.display = "none";
        }
    });
    document.addEventListener("click",()=>{
        SizeList.style.display = "none";
    });
    SizeList.addEventListener("click",(event)=>{
        event.stopPropagation();
    });
    DropdownButtonColor.addEventListener("click",(event)=>{
        event.stopPropagation();
        if (InputColor.style.display==="none"||InputColor.style.display===""){
            InputColor.style.display="block";
        }
        else {
            InputColor.style.display="none";
        }
    });
    document.addEventListener("click",()=>{
        InputColor.style.display="none";
    });
    InputColor.addEventListener("click",(event)=>{
        event.stopPropagation();
    })
}
ProductStructureDiv();
function Like(){
    const DomImage = document.getElementById("like");
    const image1 = "src/assets/whitelike.png";
    const image2 = "src/assets/Red heart.png";
    DomImage.addEventListener("click",()=>{
        if (DomImage.src.includes(image1)){
            DomImage.src = image2;
        }
        else {
            DomImage.src = image1;
        }
    })
}
Like();
import {UserClick} from "./UserClick.js";
UserClick();
function DivMenU(){
    let Brands = document.getElementById("Brands");
    let Menu = document.getElementById("Menu");
    Brands.addEventListener("click",(event)=>{
        event.stopPropagation();
        if (Menu.style.display==="none"|| Menu.style.display===""){
            Menu.style.display = "block";
        }
        else {
            Menu.style.display = "none";
        }
    });
    document.addEventListener("click",()=>{
        Menu.style.display = "none";
    });
    Menu.addEventListener("click",(event)=>{
        event.stopPropagation();
    });
}
DivMenU();
import {search} from "./search.js";
import {ShowHistory} from "./search.js";
let MagnifyingGlassSearch = document.getElementById("MagnifyingGlassSearch");
MagnifyingGlassSearch.addEventListener("click",()=>{
    search();
    ShowHistory();
})
function ClickInputSearch(){
    const InputSearch = document.getElementById("search");
    const HistorySearch = document.getElementById("HistorySearch");
    InputSearch.addEventListener("click",(event)=>{
        event.stopPropagation();
        HistorySearch.style.display = "block";
    });
    document.addEventListener("click",()=>{
        HistorySearch.style.display = "none";
    });
    HistorySearch.addEventListener("click",(event)=>{
        event.stopPropagation();
    });
}
ClickInputSearch();



// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
