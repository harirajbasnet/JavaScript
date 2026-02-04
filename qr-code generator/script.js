let imgBox =document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateQR()
{ 
    if(qrText.value.length > 0)
{
    qrImage.src ="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +qrText.value;
    imgBox.classList.add("show-img");   
}else{
// 1. Remove the class first (in case it's already there)
    qrText.classList.remove('error');
    
    // 2. This tiny line "void qrText.offsetWidth" is a magic trick 
    // It forces the browser to recalculate the layout, triggering a reset
    void qrText.offsetWidth; 
    
    // 3. Add the class back
    qrText.classList.add('error');

    setTimeout(() => {
        qrText.classList.remove('error');
    },1000)
      
}
}