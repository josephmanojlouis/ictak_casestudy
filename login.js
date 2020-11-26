function validate(){
    let email=document.getElementById("email");
    let str="admin"
    if(email.value ==str){
        return true
    }else{
        alert('invalid')
        return false
    }
};

function pwdValidate(){
   let pwd= document.getElementById("pwd");
      if (pwd.value==12345){
          alert('correct')
       return true
   }else{
       alert("invalid password")
       return false
   }
};


function validation(){
    let email=document.getElementById("email");
    let pwd= document.getElementById("pwd");
    let str="admin"
    if(email.value==str && pwd.value==12345){
    
        return true
    }else{
        alert('loginname or password is incorrect')
        return false
    }


}