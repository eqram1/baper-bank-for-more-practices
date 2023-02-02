// step-1 :add eventhandler with the witdraw button

document.getElementById('btn-withdraw').addEventListener('click', function () {


    // step-2: get the withdraw amount

    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;

    // step-3.convert string deposit amount to a number type

    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step-4.clear the withdraw input field after getting the value

    withdrawField.value = '';

    // step-5.get the previous withdrw total from (spanTagType) id as a inner text

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const prevWithdrawTotalString = withdrawTotalElement.innerText;

    // step-6.  value transfer from string to number 

    const prevWithdrawTotal = parseFloat(prevWithdrawTotalString);

    // step-7.Calculate new deposit total  

    const newWithdrawTotal = prevWithdrawTotal + newWithdrawAmount;

    // step-8.set the value to the deposit total by inner text in a span tag

    withdrawTotalElement.innerText = newWithdrawTotal;

    // step-9.get current balance total from span tag by set id

    const balanceTotalElement = document.getElementById('balance-total');
    const prevBalanceTotalString = balanceTotalElement.innerText;

    // step-10.  value transfer from string to number 

    const prevBalanceTotal = parseFloat(prevBalanceTotalString);

    // step-11.Calculate new balance total  

    const newBalanceTotal = prevBalanceTotal - newWithdrawAmount;

    // step-12.set the value to the balance total by inner text in a span tag

    balanceTotalElement.innerText = newBalanceTotal;


})