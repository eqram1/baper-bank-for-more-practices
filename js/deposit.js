// step-1. add event listener to the deposit button

document.getElementById('btn-deposit').addEventListener('click', function () {

    // step-2. get deposit (value)amount from the new deposit input (stringtype) field

    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;

    // step-3.convert string deposit amount to a number type

    const newDepositAmount = parseFloat(newDepositAmountString);

    // step-4.clear the deposit input field after getting the value

    depositField.value = '';

    // step-5.get the previous deposit total from (spanTagType) id as a inner text

    const depositTotalElement = document.getElementById('deposit-total');
    const prevDepositTotalString = depositTotalElement.innerText;

    // step-6.  value transfer from string to number 

    const prevDepositTotal = parseFloat(prevDepositTotalString);

    // step-7.Calculate new deposit total  

    const newDepositTotal = prevDepositTotal + newDepositAmount;

    // step-8.set the value to the deposit total by inner text in a span tag

    depositTotalElement.innerText = newDepositTotal;

    // step-9.get current balance total from span tag by set id

    const balanceTotalElement = document.getElementById('balance-total');
    const prevBalanceTotalString = balanceTotalElement.innerText;

    // step-10.  value transfer from string to number 

    const prevBalanceTotal = parseFloat(prevBalanceTotalString);

    // step-11.Calculate new balance total  

    const newBalanceTotal = prevBalanceTotal + newDepositAmount;

    // step-12.set the value to the balance total by inner text in a span tag

    balanceTotalElement.innerText = newBalanceTotal;


})