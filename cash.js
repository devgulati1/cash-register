let bill =document.querySelector(".bill");
let cashGiven=document.querySelector(".cash-given");
let button=document.querySelector("button");
let message=document.querySelector("#message");
let notes=document.querySelectorAll(".noOfNotes");


let arr=[2000,500,100,50,20,1];

let checkValidity=()=>{
    message.style.display="none";
    let billVal=Number(bill.value);
    let cashGivenVal=Number(cashGiven.value);
    if(billVal>0){
        
        if(cashGivenVal>=billVal){
            let changeAmount=cashGivenVal-billVal;
             calculateChange(changeAmount);
        }else{
            console.log("cash given small")
            message.style.display="block";
            message.innerText="cash amount should be eqaul to bill or greater";
        }

    }else{
        console.log("bill is smaller")
        message.style.display="block";
        message.innerText="Please enter positive bill amount";
    }
}


let calculateChange=(amount)=>{
  for(let i=0;i<arr.length;i++){
      const noOfNotes=Math.trunc(amount/arr[i]);
      amount=amount%arr[i];
      notes[i].innerText=noOfNotes;
  }
}
button.addEventListener("click",checkValidity)