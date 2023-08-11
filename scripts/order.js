//variables
let ribsSize = document.getElementById("ribsSize");
let ribsQty = document.getElementById("ribsQty");
let chxQty = document.getElementById("chxQty");
let submit = document.getElementById("submitButton");
let calculate = document.getElementById("computeButton");
let calculatedCost = document.getElementById("calculated-cost");
let totalCost = 0;
let orderPage = document.getElementById("order-page");
let header2 = orderPage.getElementsByTagName("h2");
let div = orderPage.getElementsByTagName("div");

//events
submit.addEventListener("click", submitFunction);
calculate.addEventListener("click", compute);

function submitFunction(){
    header2[0].style.display="none";
    div[0].style.display="none";
    div[1].style.display="none";
    div[2].style.display="none";
    div[3].style.display="none";

    let confirmation = document.createElement("p");
    confirmation.innerHTML = "Thank you for ordering!";
    confirmation.style.fontSize='25px';
    orderPage.appendChild(confirmation);
}
function compute(){
    if (ribsSize.value === "full"){
        totalCost = (600*ribsQty.value)+(480*chxQty.value);
    }
    else{
        totalCost = (350*ribsQty.value)+(480*chxQty.value);
    }
    calculatedCost.textContent = totalCost;
}
