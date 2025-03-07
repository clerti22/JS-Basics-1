const num1Txt = document.getElementById("num1");
const num2Txt = document.getElementById("num2");
const sumResult = document.getElementById("sum");
const diffResult = document.getElementById("diff");
const proResult = document.getElementById("pro");
const quoResult = document.getElementById("quo");
let sum = 0;
let diff = 0;
let pro = 0;
let quo = 0;

function calculate() {
    if(!(num1Txt.value === "" || num2Txt.value === "")) {
        
        sum = parseInt(num1Txt.value) + parseInt(num2Txt.value);
        diff = parseInt(num1Txt.value) - parseInt(num2Txt.value);
        pro = parseInt(num1Txt.value) * parseInt(num2Txt.value);
        quo = parseInt(num1Txt.value) / parseInt(num2Txt.value);
        sumResult.innerHTML = sum;
        diffResult.innerHTML = diff;
        proResult.innerHTML = pro;
        quoResult.innerHTML = quo;
    }

    
}



function clearEntries() {
    num1Txt.value = "";
    num2Txt.value = ""
    sumResult.innerHTML = "";   
    diffResult.innerHTML = "";   
    proResult.innerHTML = "";   
    quoResult.innerHTML = "";   
    sum = 0;

}

