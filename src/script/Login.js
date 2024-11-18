
export function Login(){
    let Home = document.getElementById("HomeSite");
    let DisplayLogin = document.getElementById("login");
    function HomeSite(){
        Home.style.display = "block"
        DisplayLogin.style.display = "none"
    }
    document.addEventListener("DOMContentLoaded",()=>{
        let savedUsername = localStorage.getItem("username");
        let savedPassword = localStorage.getItem("password");
        if (savedPassword && savedUsername){
            document.getElementById("UserName").value = savedUsername;
            document.getElementById("Password").value = savedPassword;
            document.getElementById("RememberMe").value = true;

        }
    });
    document.getElementById("FormLogin").addEventListener("submit",async function(e){
        e.preventDefault();
        let Username = document.getElementById("UserName").value;
        let Password = document.getElementById("Password").value;
        Password=Password*1;
        let RememberMe = document.getElementById("RememberMe").checked;
        try {
            let response = await fetch(`http://localhost:3000/users?UserName=${Username}&Password=${Password}`);
            let Data = await response.json();
            if (Data.length > 0){
                alert("با موفقیت وارد شدید");
                if (RememberMe){
                    localStorage.setItem("username",Username);
                    localStorage.setItem("password",Password);
                }
                else {
                    localStorage.removeItem("username");
                    localStorage.removeItem("Password");
                }
                HomeSite()
            }
            else {
                alert("نام کاربری یا رمز عبور مطابقت نداشت");
            }
        }
        catch (error){
            console.error("Error:", error);
            alert("مشکلی پیش آمده است ")
        }
    })
}
Login();