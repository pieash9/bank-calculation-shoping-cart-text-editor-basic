document
  .getElementById("kitkat-buy-btn")
  .addEventListener("click", function () {
    const quantity = document.getElementById("kitkat-quantity").value;
    const kitKatCost = quantity * 200;
    setInnerText("chocolate", kitKatCost);
    total();
  });
document.getElementById("rose-buy-btn").addEventListener("click", function () {
  const quantity = document.getElementById("rose-quantity").value;
  const roseCost = quantity * 100;
  setInnerText("rose", roseCost);
  total();
});
document.getElementById("diary-buy-btn").addEventListener("click", function () {
  const quantity = getInputValue("diary-quantity");
  const diaryCost = quantity * 100;
  setInnerText("diary", diaryCost);
  total();
});

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
function getInputValue(id) {
  return parseFloat(document.getElementById(id).value);
}
function getInnerText(id){
    return document.getElementById(id).innerText;
}

function total() {
  const chocolate = getInnerText('chocolate');
  const rose = getInnerText('rose');
  const diary = getInnerText('diary');
  const totalSum = parseFloat(chocolate) + parseFloat(rose) + parseFloat(diary);
  setInnerText('total',totalSum)
}

document.getElementById('promo-btn').addEventListener('click',function(){
    const promoCode = getInputValue('promo-code')
    if(promoCode == 101){
        
        const total = getInnerText('total');
        const SumAfterDiscount = parseFloat(total)- (parseFloat(total)* 0.1) 
        setInnerText('all-total',SumAfterDiscount)
    }else{
        alert('Enter a valid Code !!')
    }
})