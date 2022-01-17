come=  document.querySelector('h2');
come.style.display='none';
let form=document.getElementById("form");
form.style.display= 'none';
let feel = document.getElementById("feeling");
let choose = document.getElementById("choose");
let back1= document.getElementById("back");
feel.style.display='none';
back1.style.display ='none';
function next(){
    choose.style.display='none';
    come.style.display='block';
    back1.style.display ='block';
}

function next1(){
    back1.style.display ='block';
    choose.style.display='none';
    form.style.display='block';
}
function next2(){
    choose.style.display='none';
    back1.style.display ='block';
    feel.style.display='block';
}
function back(){
    back1.style.display ='none';
    choose.style.display='block';
    form.style.display='none';
    feel.style.display='none';
    come.style.display='none';
    choose.classList.remove("choose");
}
function not(){
    back1.style.display ='block';
    feel.style.display='none';
    come.style.display='block';
}