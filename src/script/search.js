export function search(){
    const DomHomeSite = document.getElementById("DomHomeSite");
    const DomProduct = document.getElementById("DomProduct");
    const Adidas = document.getElementById("adidas");
    const Asics = document.getElementById("asics");
    const Converse = document.getElementById("converse");
    const Newbalance = document.getElementById("newbalance");
    const Nike = document.getElementById("nike");
    const Puma = document.getElementById("puma");
    const Reebok = document.getElementById("reebok");
    const Search = document.getElementById("search");
    DomHomeSite.style.display = "none";
    DomProduct.style.display = "none";
    Adidas.style.display = "none";
    Asics.style.display = "none";
    Converse.style.display = "none";
    Newbalance.style.display = "none";
    Nike.style.display = "none";
    Puma.style.display = "none";
    Reebok.style.display = "none";
    let WordOfSearch = Search.value;
    if (WordOfSearch==="adidas" || WordOfSearch==="کفش آدیداس" || WordOfSearch==="کفش adidas" || WordOfSearch==="Adidas"){
        Adidas.style.display = "block";
    }
    if (WordOfSearch==="Asics" || WordOfSearch==="کفش اسیکس" || WordOfSearch==="کفش adidas" || WordOfSearch==="asics"){
        Asics.style.display = "block";
    }
    if (WordOfSearch==="Converse" || WordOfSearch==="کفش کانورس" || WordOfSearch==="کفش converse" || WordOfSearch==="converse"){
        Converse.style.display = "block";
    }
    if (WordOfSearch==="Newbalance" || WordOfSearch==="کفش نیو بالانس" || WordOfSearch==="کفش newbalance" || WordOfSearch==="newbalance"){
        Newbalance.style.display = "block";
    }
    if (WordOfSearch==="Nike" || WordOfSearch==="کفش نایکی" || WordOfSearch==="کفش nike" || WordOfSearch==="nike"){
        Nike.style.display = "block";
    }
    if (WordOfSearch==="Puma" || WordOfSearch==="کفش پوما" || WordOfSearch==="کفش puma" || WordOfSearch==="puma"){
        Puma.style.display = "block";
    }
    if (WordOfSearch==="Reebok" || WordOfSearch==="کفش ریباک" || WordOfSearch==="کفش reebok" || WordOfSearch==="reebok"){
        Reebok.style.display = "block";
    }
    if (WordOfSearch===""){
        DomHomeSite.style.display = "block";
    }
    // Search.value = "";
}
// -----------------------------------------------------------------------------------------------
export function ShowHistory(){
    let history = JSON.parse(localStorage.getItem("HistorySearch")) || [];
    const Search = document.getElementById("search");
    const HistorySearchDiv = document.getElementById("HistorySearch");
    if (history.length > 0){
        HistorySearchDiv.innerText = "";
        history.forEach((item)=>{
            const historyItem = document.createElement("div");
            historyItem.innerText = item;
            historyItem.onclick = ()=>{
                Search.value = item;
            };
            HistorySearchDiv.appendChild(historyItem);
        });
        HistorySearchDiv.classList.remove("hidden");
    }
    const query = Search.value.trim();
    if (query && !history.includes(query)){
        history.push(query);
        localStorage.setItem("HistorySearch",JSON.stringify(history))
    }
    HistorySearchDiv.classList.add("hidden");
}