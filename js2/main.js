const Txt1 = document.getElementById("num1");
const Txt2 = document.getElementById("num2");
const Txt3 = document.getElementById("lName");
const resultTxt = document.getElementById("sum");
const resultTxt2 = document.getElementById("lastName");
function concatenate() {
    resultTxt.innerHTML = Txt1.value + " " + Txt2.value; + " ";
    resultTxt2.innerHTML = Txt3.value;

}
function clearEntries() {
    Txt1.value="";
    Txt2.value="";
    Txt3.value="";

    resultTxt.innerHTML = "";
    resultTxt2.innerHTML = "";
}
