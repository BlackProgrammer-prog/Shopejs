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
let DivNum;
import {product} from "./Product.js";
const Product1 = document.getElementById("product1");
const Product2 = document.getElementById("product2");
const Product3 = document.getElementById("product3");
const Product4 = document.getElementById("product4");
const Product5 = document.getElementById("product5");
const Product6 = document.getElementById("product6");
const Product7 = document.getElementById("product7");
const Product8 = document.getElementById("product8");
const Product9 = document.getElementById("product9");
const Product10 = document.getElementById("product10");
const Product11 = document.getElementById("product11");
const Product12 = document.getElementById("product12");
const Product13 = document.getElementById("product13");
const Product14 = document.getElementById("product14");
const Product15 = document.getElementById("product15");
const Product16 = document.getElementById("product16");
const Product17 = document.getElementById("product17");
const Product18 = document.getElementById("product18");
const Product19 = document.getElementById("product19");
const Product20 = document.getElementById("product20");
const Product21 = document.getElementById("product21");
const Product22 = document.getElementById("product22");
const Product23 = document.getElementById("product23");
const Product24 = document.getElementById("product24");
const Product25 = document.getElementById("product25");
const Product26 = document.getElementById("product26");
const Product27 = document.getElementById("product27");
const Product28 = document.getElementById("product28");
const Product29 = document.getElementById("product29");
const Product30 = document.getElementById("product30");
const Product31 = document.getElementById("product31");
const Product32 = document.getElementById("product32");
const Product33 = document.getElementById("product33");
const Product34 = document.getElementById("product34");
const Product35 = document.getElementById("product35");
const Product36 = document.getElementById("product36");
const Product37 = document.getElementById("product37");
const Product38 = document.getElementById("product38");
const Product39 = document.getElementById("product39");
const Product40 = document.getElementById("product40");
const Product41 = document.getElementById("product41");
const Product42 = document.getElementById("product42");
const Product43 = document.getElementById("product43");
const Product44 = document.getElementById("product44");
const Product45 = document.getElementById("product45");
const Product46 = document.getElementById("product46");
const Product47 = document.getElementById("product47");
const Product48 = document.getElementById("product48");
const Product49 = document.getElementById("product49");
const Product50 = document.getElementById("product50");
const Product51 = document.getElementById("product51");
const Product52 = document.getElementById("product52");
const Product53 = document.getElementById("product53");
const Product54 = document.getElementById("product54");
const Product55 = document.getElementById("product55");
const Product56 = document.getElementById("product56");
Product1.addEventListener("click",()=>{
    DivNum=1;
    product(DivNum);
});
Product2.addEventListener("click",()=>{
    DivNum=2;
    product(DivNum);
});
Product3.addEventListener("click",()=>{
    DivNum=3;
    product(DivNum);
});
Product4.addEventListener("click",()=>{
    DivNum=4;
    product(DivNum);
});
Product5.addEventListener("click",()=>{
    DivNum=5;
    product(DivNum);
});
Product6.addEventListener("click",()=>{
    DivNum=6;
    product(DivNum);
});
Product7.addEventListener("click",()=>{
    DivNum=7;
    product(DivNum);
});
Product8.addEventListener("click",()=>{
    DivNum=8;
    product(DivNum);
});
Product9.addEventListener("click",()=>{
    DivNum=9;
    product(DivNum);
});
Product10.addEventListener("click",()=>{
    DivNum=10;
    product(DivNum);
});
Product11.addEventListener("click",()=>{
    DivNum=11;
    product(DivNum);
});
Product12.addEventListener("click",()=>{
    DivNum=12;
    product(DivNum);
});
Product13.addEventListener("click",()=>{
    DivNum=13;
    product(DivNum);
});
Product14.addEventListener("click",()=>{
    DivNum=14;
    product(DivNum);
});
Product15.addEventListener("click",()=>{
    DivNum=15;
    product(DivNum);
});
Product16.addEventListener("click",()=>{
    DivNum=16;
    product(DivNum);
});
Product17.addEventListener("click",()=>{
    DivNum=17;
    product(DivNum);
});
Product18.addEventListener("click",()=>{
    DivNum=18;
    product(DivNum);
});
Product19.addEventListener("click",()=>{
    DivNum=19;
    product(DivNum);
});
Product20.addEventListener("click",()=>{
    DivNum=20;
    product(DivNum);
});
Product21.addEventListener("click",()=>{
    DivNum=21;
    product(DivNum);
});
Product22.addEventListener("click",()=>{
    DivNum=22;
    product(DivNum);
});
Product23.addEventListener("click",()=>{
    DivNum=23;
    product(DivNum);
});
Product24.addEventListener("click",()=>{
    DivNum=24;
    product(DivNum);
});
Product25.addEventListener("click",()=>{
    DivNum=25;
    product(DivNum);
});
Product26.addEventListener("click",()=>{
    DivNum=26;
    product(DivNum);
});
Product27.addEventListener("click",()=>{
    DivNum=27;
    product(DivNum);
});
Product28.addEventListener("click",()=>{
    DivNum=28;
    product(DivNum);
});
Product29.addEventListener("click",()=>{
    DivNum=29;
    product(DivNum);
});
Product30.addEventListener("click",()=>{
    DivNum=30;
    product(DivNum);
});
Product31.addEventListener("click",()=>{
    DivNum=31;
    product(DivNum);
});
Product32.addEventListener("click",()=>{
    DivNum=32;
    product(DivNum);
});
Product33.addEventListener("click",()=>{
    DivNum=33;
    product(DivNum);
});
Product34.addEventListener("click",()=>{
    DivNum=34;
    product(DivNum);
});
Product35.addEventListener("click",()=>{
    DivNum=35;
    product(DivNum);
});
Product36.addEventListener("click",()=>{
    DivNum=36;
    product(DivNum);
});
Product37.addEventListener("click",()=>{
    DivNum=37;
    product(DivNum);
});
Product38.addEventListener("click",()=>{
    DivNum=38;
    product(DivNum);
});
Product39.addEventListener("click",()=>{
    DivNum=39;
    product(DivNum);
});
Product40.addEventListener("click",()=>{
    DivNum=40;
    product(DivNum);
});
Product41.addEventListener("click",()=>{
    DivNum=41;
    product(DivNum);
});
Product42.addEventListener("click",()=>{
    DivNum=42;
    product(DivNum);
});
Product43.addEventListener("click",()=>{
    DivNum=43;
    product(DivNum);
});
Product44.addEventListener("click",()=>{
    DivNum=44;
    product(DivNum);
});
Product45.addEventListener("click",()=>{
    DivNum=45;
    product(DivNum);
});
Product46.addEventListener("click",()=>{
    DivNum=46;
    product(DivNum);
});
Product47.addEventListener("click",()=>{
    DivNum=47;
    product(DivNum);
});
Product48.addEventListener("click",()=>{
    DivNum=48;
    product(DivNum);
});
Product49.addEventListener("click",()=>{
    DivNum=49;
    product(DivNum);
});
Product50.addEventListener("click",()=>{
    DivNum=50;
    product(DivNum);
});
Product51.addEventListener("click",()=>{
    DivNum=51;
    product(DivNum);
});
Product52.addEventListener("click",()=>{
    DivNum=52;
    product(DivNum);
});
Product53.addEventListener("click",()=>{
    DivNum=53;
    product(DivNum);
});
Product54.addEventListener("click",()=>{
    DivNum=54;
    product(DivNum);
});
Product55.addEventListener("click",()=>{
    DivNum=55;
    product(DivNum);
});
Product56.addEventListener("click",()=>{
    DivNum=56;
    product(DivNum);
});


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
