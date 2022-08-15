document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawFieldSt = withdrawField.value;
    const newWithdrawField = parseFloat(newWithdrawFieldSt);

    const currentWithdrawElement = document.getElementById('withdraw-total');
    const previousWithdawTotalSt = currentWithdrawElement.innerText;
    const previousWithdawTotal = parseFloat(previousWithdawTotalSt);


    //calculte total withdaw amount

    const currentWithdrawTotal = previousWithdawTotal + newWithdrawField;


    //set total withdraw amount 

    currentWithdrawElement.innerText = currentWithdrawTotal;

    //total Balance string to integer
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalSt = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalSt);

    //calculate new balance

    const currentBalanceTotal = previousBalanceTotal - newWithdrawField;
    ;


    //set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;



    //input clear
    withdrawField.value = '';
})