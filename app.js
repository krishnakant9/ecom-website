var menuitems = document.getElementById("menuitems");
menuitems.style.maxHeight = "0px";

function menutoggle(){
    if(menuitems.style.maxHeight == "0px"){
        menuitems.style.maxHeight = "200px";
    }else{
        menuitems.style.maxHeight = "0px";
    }
}

var productImg = document.getElementById("productImg");
var SmallImg = document.getElementsByClassName("small-img");
if(productImg && SmallImg.length > 0){
    SmallImg[0].onclick = function(){
        productImg.src = SmallImg[0].src;
    }
    SmallImg[1].onclick = function(){
        productImg.src = SmallImg[1].src;
    }
    SmallImg[2].onclick = function(){
        productImg.src = SmallImg[2].src;
    }
    SmallImg[3].onclick = function(){
        productImg.src = SmallImg[3].src;
    }
}

var LoginForm =document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var Indicator = document.getElementById("Indicator");

function register(){
    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(100px)";
    console.log("shifted to register from");
}
function login(){
    RegForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)";
    Indicator.style.transform = "translateX(0px)";
    console.log("shifted to Login from");
}
