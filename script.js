const billinput = document.getElementById("pole");
var billvalue ="0";
billinput.addEventListener("change", function(){
    billvalue= billinput.value;
    resetowanie();
if(billvalue!=0 && peoplevalue==0){
    peopleinput.classList.add("redborder");
}
else{
document.getElementById("amountvalue").innerHTML = "$" + (Math.round((billvalue*tipvalue)/peoplevalue * 100) / 100).toFixed(2);
    document.getElementById("totalvalue").innerHTML = "$" +  (Math.round((billvalue*tipvalue) * 100) / 100).toFixed(2);
}
})
const peopleinput = document.getElementById("pole2");
var peoplevalue ="0";
peopleinput.addEventListener("change", function(){
    peoplevalue= peopleinput.value;
    resetowanie();
    document.getElementById("amountvalue").innerHTML = "$" + (Math.round((billvalue*tipvalue)/peoplevalue * 100) / 100).toFixed(2);
    document.getElementById("totalvalue").innerHTML = "$" +  (Math.round((billvalue*tipvalue) * 100) / 100).toFixed(2);
    peopleinput.classList.remove("redborder");
    if(peoplevalue==0 || peoplevalue==null){
        peopleinput.classList.add("redborder");
    }
})
var tipvalue;
const tip5 = document.getElementById("tip5");
const tip10 = document.getElementById("tip10");
const tip15 = document.getElementById("tip15");
const tip25 = document.getElementById("tip25");
const tip50 = document.getElementById("tip50");
tip5.addEventListener("click", function(){
    tipvalue = "0.05"
    tip5.classList.add("tipactive");
    resetowanie();
if(billvalue!=0 && (peoplevalue== null || peoplevalue==0)){
    peopleinput.classList.add("redborder");
}
else{
    document.getElementById("amountvalue").innerHTML = "$" + (Math.round((billvalue*tipvalue)/peoplevalue * 100) / 100).toFixed(2);
    document.getElementById("totalvalue").innerHTML = "$" +  (Math.round((billvalue*tipvalue) * 100) / 100).toFixed(2);
}
})
tip10.addEventListener("click", function(){
    tipvalue = "0.10"
    tip10.classList.add("tipactive");
    resetowanie();
if(billvalue!=0 && (peoplevalue== null || peoplevalue==0)){
    peopleinput.classList.add("redborder");
}
else{
    document.getElementById("amountvalue").innerHTML = "$" + (Math.round((billvalue*tipvalue)/peoplevalue * 100) / 100).toFixed(2);
    document.getElementById("totalvalue").innerHTML = "$" +  (Math.round((billvalue*tipvalue) * 100) / 100).toFixed(2);
}
})
tip15.addEventListener("click", function(){
    tipvalue = "0.15"
    resetowanie();
if(billvalue!=0 && (peoplevalue== null || peoplevalue==0)){
    peopleinput.classList.add("redborder");
}
else{
    document.getElementById("amountvalue").innerHTML = "$" + (Math.round((billvalue*tipvalue)/peoplevalue * 100) / 100).toFixed(2);
    document.getElementById("totalvalue").innerHTML = "$" +  (Math.round((billvalue*tipvalue) * 100) / 100).toFixed(2);
}
})
tip25.addEventListener("click", function(){
    tipvalue = "0.25"
    resetowanie();
if(billvalue!=0 && (peoplevalue== null || peoplevalue==0)){
    peopleinput.classList.add("redborder");
}
else{
    document.getElementById("amountvalue").innerHTML = "$" + (Math.round((billvalue*tipvalue)/peoplevalue * 100) / 100).toFixed(2);
    document.getElementById("totalvalue").innerHTML = "$" +  (Math.round((billvalue*tipvalue) * 100) / 100).toFixed(2);
}
})
tip50.addEventListener("click", function(){
    tipvalue = "0.50"
    resetowanie();
if(billvalue!=0 && (peoplevalue== null || peoplevalue==0)){
    peopleinput.classList.add("redborder");
}
else{
    document.getElementById("amountvalue").innerHTML = "$" + (Math.round((billvalue*tipvalue)/peoplevalue * 100) / 100).toFixed(2);
    document.getElementById("totalvalue").innerHTML = "$" +  (Math.round((billvalue*tipvalue) * 100) / 100).toFixed(2);
}
})

const tiplist = document.querySelectorAll(".tiplist");
tiplist.forEach(link => {

                link.addEventListener("click", () => {
                    tiplist.forEach(link1 => {
                        if (link1.classList.contains('tipactive')) {
                            link1.classList.remove('tipactive');
                        }
                    })
                    link.classList.add("tipactive");
                })
                })
const reset = document.getElementById("reset");
reset.addEventListener("click", function(){
    peopleinput.value = null;
    billinput.value = null;
    tipvalue = "0";
    billvalue ="0";
    peoplevalue ="0"
    document.getElementById("amountvalue").innerHTML = "$" +  "0.00"
    document.getElementById("totalvalue").innerHTML = "$" +  "0.00"
    reset.style.opacity ="60%";
    tiplist.forEach(link1 => {
                        if (link1.classList.contains('tipactive')) {
                            link1.classList.remove('tipactive');
                        }
                    })
})
const tipcustom = document.getElementById("tipcustom");
tipcustom.addEventListener("click", function(){
    alert("This option doesn't work for now");
})
function resetowanie(){
    if((tipvalue!=undefined && tipvalue!=0) || (billvalue!=null && billvalue!=0) || (peoplevalue!=null && peoplevalue!=0)){
    reset.style.opacity = "100%";
}
}
const spliter = document.getElementById("spliter");
spliter.addEventListener("click", function(){
     spliter.classList.toggle("rotate360deg");
})

