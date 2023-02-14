document.getElementById('deposit-btn').addEventListener('click',function(){
    const inputDeposit= getInputValueById('deposit-field');
    const previousDeposit = getElementValueById('deposit-element')

    const currentDepositTotal = inputDeposit + previousDeposit;
    setInnerText('deposit-element',currentDepositTotal);

    const previousBalance = getElementValueById('balance-element');
    const currentBalanceTotal = previousBalance + inputDeposit
    setInnerText('balance-element',currentBalanceTotal)
})