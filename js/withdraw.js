document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawFieldSt = withdrawField.value;
    const newWithdrawField = parseFloat(newWithdrawFieldSt);


    //input clear
    withdrawField.value = '';


    if (isNaN(newWithdrawField)) {
        alert('Please Provide a valid Number!');
        return;
    }

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

    if (newWithdrawField > previousBalanceTotal) {
        alert("There is not Enough Money");
        return;
    }

    //calculate new balance

    const currentBalanceTotal = previousBalanceTotal - newWithdrawField;
    ;


    //set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;




})