// import {l} from "vite/dist/node/types.d-aGj9QkWt.js";
export function product(productId){
    // let ProductPhoto = document.getElementById("ProductPhoto");
    // let ProductName = document.getElementById("ProductName");
    // let ProductDescription = document.getElementById("ProductDescription");
    // let Size1 = document.getElementById("Size1");
    // let Size2 = document.getElementById("Size2");
    // let Size3 = document.getElementById("Size3");
    // let Color1 = document.getElementById("Color1");
    // let Color2 = document.getElementById("Color2");
    // let Color3 = document.getElementById("Color3");
    // let Color4 = document.getElementById("Color4");
    // let ProductPrice = document.getElementById("ProductPrice");
    let Url = `http://localhost:3000/Products/${productId}`;
    fetch(Url).then((response)=>{
        if (!response.ok){
            throw new Error("محصول یافت نشد");
        }
        return response.json();
    })
        .then((product)=>{
            console.log('اطلاعات محصول', product);
        })
        .catch((error)=>{
            console.log("خطا در دریافت محصول:", error);
    });



}
