document.getElementById('withdraw-btn').addEventListener('click',function(){
    const inputWithdrawAmount = getInputValueById('withdraw-field');
    const previousWithdraw = getElementValueById('withdraw-element');

    const currentWithdraw = previousWithdraw + inputWithdrawAmount;
    setInnerText('withdraw-element',currentWithdraw)

    const previousBalance = getElementValueById('balance-element');
    const currentBalance = previousBalance - inputWithdrawAmount;
    setInnerText('balance-element',currentBalance)
})