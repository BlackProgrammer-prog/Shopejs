// import {l} from "vite/dist/node/types.d-aGj9QkWt.js";
export function product(productId){
    let ProductObject;
    let ProductPhoto = document.getElementById("ProductPhoto");
    let ProductName = document.getElementById("ProductName");
    let ProductDescription = document.getElementById("ProductDescription");
    let Size1 = document.getElementById("Size1");
    let Size2 = document.getElementById("Size2");
    let Size3 = document.getElementById("Size3");
    let Color1 = document.getElementById("Color1");
    let Color2 = document.getElementById("Color2");
    let Color3 = document.getElementById("Color3");
    let Color4 = document.getElementById("Color4");
    let ProductPrice = document.getElementById("ProductPrice");
    let Url = `http://localhost:3000/Products/${productId}`;
    async function fetchProduct(){
        try {
            const response = await fetch(Url);
            if (!response.ok){
                 console.error(Error(`محصول یافت نشد:${response.status}`))
            }
            const Product = await response.json();
            console.log("اطلاعات محصول",Product);
            ProductObject = Product;

        }catch (error){
            console.log("خطا در دریافت محصول",error);
            throw error
        }
    }
    async function main(){
        await fetchProduct();
        console.log(ProductObject.images);
        ProductPhoto.src = ProductObject.images;
        ProductName.innerText = `کفش:${ProductObject.title}`;
        ProductPrice.innerText = `قیمت:${ProductObject.price}$`;
        Size1.innerText = ProductObject.size[0];
        Size2.innerText = ProductObject.size[1];
        Size3.innerText = ProductObject.size[2];
        Color1.innerText = ProductObject.color[0];
        Color2.innerText = ProductObject.color[1];
        Color3.innerText = ProductObject.color[2];
        Color4.innerText = ProductObject.color[3];
        ProductDescription.innerText = "این کفش بهترین کفش بازار با راحتی بی نظیر است";
    }
    main();
    let ProductNumber = document.getElementById("ProductNumber");
    ProductNumber.value = 1;
    ProductNumber.addEventListener("change",()=>{
        let number = ProductNumber.value;
        number = number*1;
        console.log(typeof number);
        console.log(number);
        let x = ProductObject.price*1;
        console.log(x);
        let num = (x)*(number);
        console.log(num);
        console.log(typeof num);
        ProductPrice.innerText = `قیمت:${num}$`;
    })
}
