

const theTimer = document.querySelector(".timer");

var timer = [0,0,0,0];
// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time){
    if (time <=9){
      time = "0" + time;
    }
    return time;
}

var currentTimer = "";

//----- Clock Function----//
function digitalClock(){
   currentTimer = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);

    var date = new Date();
    
  timer[2] = date.getSeconds();
  timer[1] = date.getMinutes();
  timer[0] = date.getHours();
      theTimer.innerHTML = currentTimer;
      
     
}

setInterval(digitalClock,1000)

//User Selection
const fullScreen = document.querySelector(".fullScreen");
const yellow = document.querySelector(".yellow");
const red = document.querySelector(".red");
const blue = document.querySelector(".blue");
const green = document.querySelector(".green");
const pink = document.querySelector(".pink");
const purple = document.querySelector(".purple");
const grey = document.querySelector(".grey");
const white = document.querySelector(".white");
const orange = document.querySelector(".orange");
const full = document.querySelector(".full");
const footer = document.querySelector(".content-wrap");
const reset2 = document.querySelector(".reset2");
const change = document.querySelector(".color");
const github = document.querySelector("#github");

var trace = 0;
var trace2 ="white";
function fullScreen1(){
    trace=1;
    (full).innerHTML ="" ;
    footer.innerHTML = "" ;
    github.innerHTML="";
    if (trace2 != "white"){
        full.style.backgroundColor= trace2;
    }else{
        full.style.backgroundColor="white";
        }
}

function yellow1(){
    trace2 = "yellow";
    change.style.backgroundColor="yellow";
    if (trace==1){
     full.style.backgroundColor="yellow";
        }   
}
function red1(){
    trace2 ="red";
    change.style.backgroundColor="red";
    if (trace==1){
     full.style.backgroundColor="red";
        }    
}
function blue1(){
        trace2 ="blue";
    change.style.backgroundColor="blue";
    if (trace==1){
     full.style.backgroundColor="blue";
        }   
}
function green1(){
        trace2 ="green";
    change.style.backgroundColor="green";
    if (trace==1){
     full.style.backgroundColor="green";
        } 
}
function pink1(){
        trace2 ="pink";
    change.style.backgroundColor="pink";
    if (trace==1){
     full.style.backgroundColor="pink";
        } 
}
function purple1(){
        trace2 ="purple";
    change.style.backgroundColor="purple";
    if (trace==1){
     full.style.backgroundColor="purple";
        } 
}
function grey1(){
        trace2 ="grey";
    change.style.backgroundColor="grey";
    if (trace==1){
     full.style.backgroundColor="grey";
        } 
}
function white1(){
        trace2 ="white";
    change.style.backgroundColor="white";
    if (trace==1){
     full.style.backgroundColor="white";
        } 
}
function orange1(){
        trace2 ="orange";
    change.style.backgroundColor="orange";
    if (trace==1){
     full.style.backgroundColor="orange";
        } 
}
function resetAll(){
   location.reload(true);
}


fullScreen.addEventListener("click", fullScreen1, false);
yellow.addEventListener("click", yellow1, false);
red.addEventListener("click", red1, false);
blue.addEventListener("click", blue1, false);
green.addEventListener("click", green1, false);
pink.addEventListener("click", pink1, false);
purple.addEventListener("click", purple1, false);
grey.addEventListener("click", grey1, false);
white.addEventListener("click", white1, false);
orange.addEventListener("click", orange1, false);
reset2.addEventListener("click", resetAll, false);