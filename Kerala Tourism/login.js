let email2=document.getElementById("email2");
 let error2=document.getElementById("error2");
 function login(){
       let regexp= /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
         if(regexp.test(email2.value)){
             error2.innerHTML="Success!!";
             error2.style.color="green";
             email2.style.border="2px solid green";
             return true;
         }

          else{
               error2.innerHTML="** Proper Email format is Mandatory!";
              error2.style.color="red";
              email2.style.border="2px solid red";
              return false;
          }
}


let pwd2=document.getElementById("pwd2");
let pword2=document.getElementById("pword2");
function password2(){
    let pass2=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/
    
    if(pass2.test(pwd2.value)){
        pword2.innerHTML="Success!!";
        alert("Welcome to kerala Tourism !!");
        pword2.style.color="green";
        pwd2.style.border="2px solid green";
        return true;
    }

    else{
        pword2.innerHTML=" ** password must contain 8 minimum characters, atleast 1 uppercase, 1 lowercase and  must contain atleast 1 number!!";
        pword2.style.color="red";
        pwd2.style.border="2px solid red";
        return false;
    }
} 

