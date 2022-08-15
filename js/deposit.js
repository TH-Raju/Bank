document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountSt = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountSt);

    //deposit string to integer
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalSt = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalSt);

    //Add number to deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    depositTotalElement.innerText = currentDepositTotal;

    // Add Deposit money to total Balance
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalSt = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalSt);


    //calculate current Balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount
        ;

    //set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

    depositField.value = '';

})