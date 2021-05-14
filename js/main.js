var myImg= document.querySelectorAll(".img-fluid");
myImg=Array.from(myImg);
var blackBox= document.querySelector(".blackBox");
var designBox=document.querySelector(".designBox");
var close= document.getElementById("close");
var next=document.getElementById("next");
var previous=document.getElementById("prev");


var currentindex;

for(var i =0 ; i<myImg.length;i++)
{
    myImg[i].addEventListener("click", popup)   
}

function popup(e)
{
  var selectedImg=e.target;
    currentindex= myImg.indexOf(selectedImg);
    console.log(currentindex)

    designBox.style.cssText = "background-image: url("+selectedImg.src+")"
    blackBox.classList.replace("hide","show");
}

close.addEventListener("click", closeDesBox)
function closeDesBox()
{
    blackBox.classList.replace("show","hide");
}

next.addEventListener("click", showNextImg)
function showNextImg()

{
    currentindex++;
    if(currentindex>=myImg.length)
    {
        currentindex=0;
    }

    console.log(currentindex)
    var nextImg= myImg[currentindex];

    designBox.style.cssText = "background-image: url("+nextImg.src+")"
}

previous.addEventListener("click", showPrevImg)

function showPrevImg()

{
    currentindex--;
    if(currentindex<0)
    {
        currentindex=myImg.length-1;
    }

    console.log(currentindex);
    var prevImg= myImg[currentindex];

    designBox.style.cssText = "background-image: url("+prevImg.src+")";
}

document.addEventListener("keyup" , keyFn)

function keyFn(e)
{
    if(e.keyCode==39)
    {
        showNextImg()
    }
    else if(e.keyCode==37)
    {
        showPrevImg()
    }
    else if(e.keyCode==27)
    {
        closeDesBox()
    }
}

document.addEventListener("click", z)

function z(e)
{

    if(e.target==blackBox)
    {
        closeDesBox()
    }
}