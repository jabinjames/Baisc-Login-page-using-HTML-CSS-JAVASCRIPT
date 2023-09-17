var e = document.getElementsByClassName("emails")[0];
var p = document.getElementsByClassName("pass")[0];
var login =document.getElementsByClassName("btn")[0];
login.addEventListener("click", (event)=>{
    event.preventDefault();

    if (e.value=="") {
       failure(e);
    }
    // else 
    // {
    //     success(e);
    // }
    else if(e.value!="" && p.value!="")
    {
        success(p);
    }
    if(p.value=="")
    {
        failure(p);
    }
    else if(e.value!="" && p.value!="")
    {
        success(p);
    }
});
function failure(element)
{
    element.style.border='2px solid red';
    const par=element.parentElement;
    const p=par.querySelector("p");
    p.style.visibility='visible';
}
function success(element)
{
    element.style.border='2px solid green';
    const par=element.parentElement;
    const p=par.querySelector("p");
    p.style.visibility='hidden';
    const newWindow = window.open('', 'ImageWindow', 'width=5555,height=799');
    const img = document.createElement('img');
    img.src = 'onam_img.jpg';
    newWindow.document.body.appendChild(img);
}