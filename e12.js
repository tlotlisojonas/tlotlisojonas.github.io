// Decimal to binary  //

const button = document.querySelector("#convert");
const decimalInput = document.querySelector(".decimalInput");
const binaryOutput = document.querySelector("#binaryOutput-area");

function convert(){   
    var binary =[];
    while (decimalInput.value>0) {       
        if (decimalInput.value%2==0) {           
          binary.unshift(0);
            decimalInput.value = Math.floor(decimalInput.value/2);
          continue;
		}else{             
          binary.unshift(1);
          decimalInput.value = Math.floor(decimalInput.value/2);
       }
	}       
    binaryOutput.innerHTML = (binary).join("");
    return binary.join("");
} 

button.addEventListener("click", convert, false);

// Binary to Decimal   //

const button1 = document.querySelector("#convert1");
const binaryInput = document.querySelector(".binaryInput-area");
const decimalOutput = document.querySelector("#decimalOutput");

function convert2 (){
    var decimal =0;
    decimal = parseInt(binaryInput.value, 2);
    decimalOutput.innerHTML = decimal;
    
    return decimal;
}

button1.addEventListener("click", convert2, false);


// Resistor series addition   //
//
//const inputArray = document.querySelector(".resistorArray");
//const seriesAdd  = document.querySelector("#totalRes");
//const seriesOutput = document.querySelector("#outputResistance-area");


//function series(){    
//    var R_eff = 0;
//    var test = [];
//    for (a in inputArray.value){
//        if (!(isNaN(inputArray.value[a]))){            
//            test.push(parseFloat(inputArray.value[a], 10));           
//    }else{
//        continue;
//    }
//        console.log(test);
//    }
//    for (i in test) {
//        
//        R_eff = R_eff + test[i];
//    }
//    
//    seriesOutput.innerHTML = R_eff;
//    return R_eff;
//}
//
//seriesAdd.addEventListener("click", series, false);


//             Find the closest E12 values                //
//-------------------------------------------------------//

const actual_value = document.querySelector(".resistorValue");
const searchButton = document.querySelector("#search12Button");
var output_value = document.querySelector(".outputValue");



function search12(){       
    var dif = 100;
    var reduced_value = actual_value.value;
    var multiple = 1;
    var place = actual_value.value;
    
    while (reduced_value>10) {
        reduced_value = reduced_value/10;
        multiple = multiple*10;
    }
    actual_value.value = reduced_value;
    
    var close_value = 1;
    var e12 = [0,1,1.2,1.5,1.8,2.2,2.7,3.3,3.9,4.7,5.6,6.8,8.2]
    
    for (item in e12) {
        if (Math.abs(actual_value.value-e12[item])<dif) {
            close_value = e12[item]*multiple;
            dif = (actual_value.value - e12[item]);
        }
    }
        
        var error = 1;
        var close_series = [];
        
        for (i in e12) {
            for (z in e12) {
                if (Math.abs(actual_value.value - (e12[i]+e12[z]))< error) {
                    close_series = [e12[i]*multiple, e12[z]*multiple];
                    error = (actual_value.value - (e12[i]+e12[z]));
                }
            }
            
        } 
         
        actual_value.value = place; 
      var ser = "Closest one Resistor: "+ close_value+" ohm" +"\nClosest resistor error: "+Number((((dif*multiple)/actual_value.value)*100)).toFixed(2)+ " %" +"\nSeries: " + close_series.join(" + ") + " = " + Number((close_series[0]+close_series[1])).toFixed(2) + " ohm\n" + "Series Error: "+ (Number((((close_series[0]+close_series[1])-place)/place)*100).toFixed(2)) + " %" ; 
        output_value.innerHTML = ser;
       return ser;
    
}

searchButton.addEventListener("click", search12, false);



//      Find E12 resistors from a given ratio            //
//-------------------------------------------------------//


const inputRatio = document.querySelector(".ratioValue");
const searchButton1 = document.querySelector("#search");
var output_value1 = document.querySelector(".outputValue2");

function searchE12() {
    var e12 = [1.0,1.2,1.5,1.8,2.2,2.7,3.3,3.9,4.7,5.6,6.8,8.2,10,12,15,18,22,27,33,39,47,56,68,82];
       
     
    var error1 = 1;
    var combo = [];
    
    for (y in e12){
        for (z in e12){
            var p = e12[z]/e12[y];
            if (Math.abs(inputRatio.value-p)<error1){
                error1 = (Math.abs(inputRatio.value-p));
                combo = [e12[y], e12[z]];
            }
        }
    }
    
    error1 = Number(((error1)/inputRatio.value)*100).toFixed(2);
    
     var just = "Combination: " + combo[1] + " ohm AND " + combo[0]+" ohm"+"\nRatio: "+ combo[1]+" / "+ combo[0]+" = " +Number(combo[1]/combo[0]).toFixed(2)+"\nError: "+error1+ " %" ; 
     
     output_value1.innerHTML = just;
}


searchButton1.addEventListener("click", searchE12, false);

























