const login = document.getElementById("LoginLink");
const Register = document.getElementById("RegisterLink");
let SectLogin = document.querySelectorAll(".Login");
let SectReg = document.querySelectorAll(".register");
let body = document.querySelector("body");
let forgotpwd = document.querySelector("#forgot-password #container button");
let forgotContainer = document.querySelector("#forgot-password");
let forgotButton = document.querySelector("form a");
let input = document.querySelectorAll("input");

login.addEventListener("click", () => {
    input.forEach(input=>{
        input.value = "";
    });
    input.value = "";
    for (let i = 0; i < SectLogin.length; i++) {
        SectReg[i].style.display = "none";
    }

    for (let i = 0; i < SectReg.length; i++) {
        SectLogin[i].style.display = "flex";
        body.style.backgroundImage = "url(https://images.wallpaperscraft.com/image/single/laptop_dj_equipment_212416_1920x1080.jpg)";
    }
})


Register.addEventListener("click", () => {
    for (let i = 0; i < SectLogin.length; i++) {
        SectReg[i].style.display = "flex";
        body.style.backgroundImage = "url(https://images.wallpaperscraft.com/image/single/light_bokeh_blur_882222_1920x1080.jpg)";
    }

    for (let i = 0; i < SectReg.length; i++) {
        SectLogin[i].style.display = "none";
    }
})

// Show Forgot password Contaienr
forgotButton.addEventListener("click", () => {
    forgotContainer.style.top = "0";
    input.forEach(input=>{
        input.value = "";
    });
})



// Hide Forgot Password Container 
forgotpwd.addEventListener("click", () => {
    forgotContainer.style.top = "-100%";

})

// Show Password when clicked
var hidePass = document.querySelector(".fa-eye");
function showPassword(){
    let password = document.querySelectorAll(".password");
    password.forEach(password => {
        password.type = "text";
        hidePass.style.display = "none";
        showPass.style.display = "block";
    });
}
// hide Password
var showPass = document.querySelector(".fa-eye-slash");
function hidePassword() {
    let password = document.querySelectorAll(".password");
    password.forEach(password => {
        password.type = "password";
        hidePass.style.display = "block";
        showPass.style.display = "none";
    });
}
console.log(password.type);




