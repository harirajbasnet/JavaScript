let eyeicon = document.getElementById("eyeicon");  
let password = document.getElementById("password");   
eyeicon.onclick = function(){
    if(password.type =="password"){
        password.type="text";
        eyeicon.src ="image/openeye.png";
    }
    else{
        password.type ="password";
        eyeicon.src ="image/closeeye.png";
    }
}