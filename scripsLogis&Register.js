const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.loginlink');
const registerlink = document.querySelector('.registerlink');
const btnPopup = document.querySelector('.btnlogin-popup');
const close = document.querySelector('.close');
const CPopup = document.querySelector('.Cbot-popup');
const close2 = document.querySelector('.close2');
const wrapper2 = document.querySelector('.wrapper2');

registerlink.addEventListener('click',()=> {
    wrapper.classList.add('active');
});

loginlink.addEventListener('click',()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click',()=> {
    wrapper.classList.add('active-popup');
});

close.addEventListener('click',()=> {
    wrapper.classList.remove('active-popup');
});

CPopup.addEventListener('click',()=> {
    wrapper2.classList.add('activeC-popup');
});

close2.addEventListener('click',()=> {
    wrapper2.classList.remove('activeC-popup');
});

let e = document.getElementById("mal");
let p = document.getElementById("pass");
let re = document.getElementById("result");

function CheckPassword(){
    let em = e.value;
    let Password = p.value;
    console.log(e.value)
    if(em === "bright" || Password === "1234"){
        
        // re.innerHTML = "Login success";
        let url = "https://www.appsheet.com/start/9b90d7cd-e659-45ad-8230-6ccdda8d33e8"
        let newwindow = window.open(url);
    }
    else{
        re.innerHTML = "Login Failed";
    }
}