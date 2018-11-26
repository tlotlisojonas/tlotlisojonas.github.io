const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");



function runTheClock() {
var date = new Date();
console.log(date);

let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

console.log("Hours: " + hr + " Minute: " + min + " Seconds: " + sec);

let hrPosition = (hr*(360/12))+(min*(360/60)/12);
let minPosition = (min*(360/60))+(sec*(360/60)/60);
let secPosition = sec*(360/60);

HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}
var interval = setInterval(runTheClock, 1000);



//--------Linear scroll--------------//

//function scrollToTop(scrollDuration) {
//    var scrollStep = -window.scrollY / (scrollDuration / 15),
//        scrollInterval = setInterval(function(){
//        if ( window.scrollY != 0 ) {
//            window.scrollBy( 0, scrollStep );
//        }
//        else clearInterval(scrollInterval); 
//    },15);
//}


//--------Ease in and out scroll up-------//

function scrollToTop(scrollDuration) {
const   scrollHeight = window.scrollY,
        scrollStep = Math.PI / ( scrollDuration / 15 ),
        cosParameter = scrollHeight / 2;
var     scrollCount = 0,
        scrollMargin,
        scrollInterval = setInterval( function() {
            if ( window.scrollY != 0 ) {
                scrollCount = scrollCount + 1;  
                scrollMargin = cosParameter - cosParameter * Math.cos( scrollCount * scrollStep );
                window.scrollTo( 0, ( scrollHeight - scrollMargin ) );
            } 
            else clearInterval(scrollInterval); 
        }, 15 );
}



