var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('name').value;
    if(name.length ==0){
        nameError.innerHTML = 'Name is Required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write Full Name';
        return false;
    }
    nameError.innerHTML = 'valid';
    return true;
}

function validateAddress(){
    var email = document.getElementById('email').value;
    if(email.length ==0){
        emailError.innerHTML = 'Email is Required';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Invalid email';
        return false;
    }
    emailError.innerHTML = 'valid';
    return true;
}

function validatephone(){
    var phone = document.getElementById('phone').value;
    if(phone.length ==0){
    phoneError.innerHTML = 'Phone number is Required';
    return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Phone number should be 10 digits';
        return false;
    }
    phoneError.innerHTML = 'valid';
    return true;
}

function validatemessage(){
    var message = document.getElementById('message').value;
    var required = 30;
    var left = required - message.length;
    if(left>0){
    messageError.innerHTML = left +'more character required';
    return false;
    }
    messageError.innerHTML = 'valid';
    return true;
}
function validateForm(){
    if(!validateName()|| !validateAddress()||!validatephone()||!validatemessage()){ 
        submitError.style.display ='block'; 
        submitError.innerHTML ='Please Fix error to submit';
         setTimeout(function(){submitError.style.display ='none';},3000);
        return false
    }
}
