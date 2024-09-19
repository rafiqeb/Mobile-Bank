//  Step 1  add even listener click button
// event.preventDefault add korte hobe
// Step2 Add Money R Pin number nite hobe
//Step 3 Verify the pin number, true hole add money false hole wrong number
// Step 4 Add current balance
// Step 5 Added newBalance and current balance
// Step 6 Update the balance shit

// ****   Step 1  add even listener click button   **********
document.getElementById('btn-add-money')
    .addEventListener('click', function(event){
        event.preventDefault();

// ********  Step2 Add Money R Pin number nite hobe  *******
        const addMoneyInput = document.getElementById('input-add-money').value;
        const pinNumberInput = document.getElementById('add-money-pin').value;

//****  Step 3 Verify the pin number, true hole add money false hole wrong number **
        if(pinNumberInput === '224442'){

//   ***********   Step 4 Add current balance    *********
            const balance = document.getElementById('account-balance').innerText;
            const addMoneyNumber = parseFloat(addMoneyInput);
            const balanceNumber = parseFloat(balance);

//    ***********   Step 5 Added newBalance and current balance   *********
            const newBalance = addMoneyNumber + balanceNumber;
            
//     *********    Step 6 Update the balance shit   ********
            document.getElementById('account-balance').innerText = newBalance;
        }
        else{
            console.log('Faild to add money')
        }
    })

    //   *******     Cash out form   *********

    document.getElementById('btn-cashout')
    .addEventListener('click', function(event){
        event.preventDefault();

        const cashOutInput = document.getElementById('input-cashout').value;
        const pinInput = document.getElementById('cashout-pin').value;

        if(pinInput === '224442'){

            const cashBalance = document.getElementById('account-balance').innerText
            const cashoutMoney = parseFloat(cashOutInput);
            const cashoutBalance = parseFloat(cashBalance);

            const newBalance = cashoutBalance - cashoutMoney;

            document.getElementById('account-balance').innerText = newBalance;
        }
        else{
            console.log('Faild to cashout')
        }
    })

    //     *******   Show cashout button   ********
    document.getElementById('show-cashout')
    .addEventListener('click', function(){

        document.getElementById('cashout-form').classList.remove('hidden');

        document.getElementById('addmoney-form').classList.add('hidden')
    })

    //   ****  Show add money button   *****
    document.getElementById('show-addmoney')
    .addEventListener('click', function(){

        document.getElementById('addmoney-form').classList.remove('hidden');

        document.getElementById('cashout-form').classList.add('hidden')  
    })