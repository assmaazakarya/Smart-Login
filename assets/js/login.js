// ? HTML Elements
var email = document.querySelector("#email")
var pass = document.querySelector("#pass")
var logInBtn  = document.querySelector(".log-in")
// ^ App Variables

var usersList = JSON.parse(localStorage.getItem('usersList')) || []
// * Fucntion

function validateInput(input){    
    if(input.value !== ''){
      input.classList.remove('is-invalid')
      input.classList.add('is-valid')
      return true
    }else{
      console.log(input);
      input.classList.remove('is-valid')
      input.classList.add('is-invalid')
      return false
    }
  }

function checkUserExist(userEmail){   
  if(usersList.length === 0){
    Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "You are not logged in please register first"
        })
        var errorBtn = document.querySelector('.swal2-confirm')  
        errorBtn.addEventListener('click',function(){
        })
  }else{
    for(var i = 0 ; i < usersList.length ; i++){
      if(usersList[i].email.includes(userEmail)){
        Swal.fire({
                 title: "Success!",
                 icon: "success",
                draggable: true,
             }); 
        i = usersList.length 
        var successBtn = document.querySelector('.swal2-confirm')  
        successBtn.addEventListener('click',function(){
         window.location.href = 'home.html'       
        })
      }else{
           Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You are not logged in please register first"
      })
      var errorBtn = document.querySelector('.swal2-confirm')  
      errorBtn.addEventListener('click',function(){
      })
    }
  }
}
}
// ! Event
logInBtn.addEventListener('click',function(){
     if(validateInput(email)&&
        validateInput(pass)
        ){
          checkUserExist(email.value)
        }else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please fill the form before click log in"
          })
        }
})



