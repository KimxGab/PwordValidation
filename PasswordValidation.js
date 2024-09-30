function getMessage(){
    let userName = document.getElementById('uName').value;
    let passWord = document.getElementById('pWord').value;
    let regEx = /^[a-zA-Z]/;

if(regEx.test(passWord)){
    //alert("valid");

     document.getElementById('pMsg').innerHTML="This is a valid username!"

}else{
    document.getElementById('pMsg').innerHTML="This is a invalid password!"
}


}

document.getElementById('btnLogin').addEventListener("click",getMessage);