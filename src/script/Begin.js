export function Begin(){
    let welcome = document.getElementById("welcome");
    let introduceOne = document.getElementById("introduce-one");
    let introduceTwo = document.getElementById("introduce-two");
    let login = document.getElementById("login");
    welcome.addEventListener("dblclick", ()=>{
        welcome.style.display = "none";
        introduceOne.style.display = "block";
    });
    introduceOne.addEventListener("dblclick",()=>{
        introduceOne.style.display = "none";
        introduceTwo.style.display = "block";
    });
    introduceTwo.addEventListener("dblclick",()=>{
        introduceTwo.style.display = "none";
        login.style.display = "block";
    });

    // if (!localStorage.getItem("visited")){
    //
    // }
    // else {
    //     login.style.display = "block";
    //     localStorage.setItem('visited','true');
    // }

}
Begin();