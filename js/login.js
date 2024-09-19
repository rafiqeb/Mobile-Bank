
document.getElementById('btn-login')
    .addEventListener('click', function mobileBank(event){
    event.preventDefault();
    const phoneNumber = document.getElementById('my-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber, pinNumber)
    if(phoneNumber === '01729665802' && pinNumber === '224442'){
        console.log('login')
        window.location.href = '/home.html';
    }
    else{
        console.log('wrong password')
    }
})