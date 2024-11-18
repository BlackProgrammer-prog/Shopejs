export function progressBar(){
    let progressBar = document.getElementById("progress-bar");
    let loading = document.getElementById("loading");
    let welcome = document.getElementById("welcome");
    let login = document.getElementById("login");
    progressBar.style.width = "0%";
    let width = 0;
    let interval = setInterval(()=>{
        if (width >= 100){
            clearInterval(interval);

            if (!localStorage.getItem("visited")){
                loading.style.display = "none"
                welcome.style.display = "block"
                localStorage.setItem('visited','true');
            }
            else {
                loading.style.display = "none"
                login.style.display = "block"
            }
        }
        else {
            width = width+1;
            progressBar.style.width=width+"%";
        }
    },50)
}
progressBar();
