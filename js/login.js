document.getElementById('btn-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email').value;
    const passwordField = document.getElementById('user-password').value;



    if (emailField === 'raju@gmail.com' && passwordField === 'raju') {
        console.log('valid');
        window.location.href = 'bank.html';
    } else {
        alert('invalid user');
    }
})