
let cid = [["PENNY", 101.01], ["NICKEL", 2.05], ["DIME", 603.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]];
let cambio

var suma = 0;


    suma = cid.reduce((a, b) => (a + b[1]),0);
console.log(suma);

if(suma < cambio){
  change = {status: "INSUFFICIENT_FUNDS", change: []}
}
else if(suma === cambio){
  change =  {status: "CLOSED", change: [cid]}   
}
if (cambio >= 100){
    let r100 = cambio / 100;
    let c100 = Math.floor(r100)*100;
    alert(`El número ${c100} es par`);
   }
   if (cambio >= 50){
    let r50 = cambio / 100;
    let c50 = Math.floor(r50)*100;
    alert(`El número ${c50} es par`);
   }

/*
 return change;
function checkCashRegister(price, cash, cid) {
    var change;
   var moneda = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
  ];
   var cambio = cash - price;
if (cambio >= 100){
 let r100 = cambio / 100;
 c100 = Math.floor(r100)*100;
}

    return change;
  }

  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
   */