
function tipCalculate(slider,bill){
    //get reference for the values of things (element references)
    var tip = document.getElementById('tip');
    var slideval = document.getElementById('slideval');
    //represent not the element but the actuall value
    var bill = document.getElementById(bill).value; 
    //figure out the percentage
    var prcnt = slider * .01; //move the demical point
    tip.innerHTML = "$"+(bill * prcnt).toFixed(2);
    slideval.innerHTML = slider+"%";
}
