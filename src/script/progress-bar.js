export function progressBar(){
    let progressBar = document.getElementById("progress-bar");
    let loading = document.getElementById("loading");
    progressBar.style.width = "0%";
    let width = 0;
    let interval = setInterval(()=>{
        if (width >= 100){
            clearInterval(interval);
            loading.style.display = "none"
        }
        else {
            width = width+1;
            progressBar.style.width=width+"%";
        }
    },50)
}
progressBar();
