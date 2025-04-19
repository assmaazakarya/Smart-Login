// ? HTML Elements
var username = document.querySelector("#username")
var email = document.querySelector("#email")
var pass = document.querySelector("#pass")
var registerBtn  = document.querySelector(".register-btn")

// ^ App Variables
var usersList = JSON.parse(localStorage.getItem("usersList")) || []


var nameRegex = /^[A-Z][a-z]{3,}$/
var emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/
var passRegex = /^[a-z]{0,8}$/

// * Functions 
function validateInput(input , regex){    
  if(regex.test(input.value)){
    input.classList.remove('is-invalid')
    input.classList.add('is-valid')
    input.nextElementSibling.classList.add('d-none')
    return true
  }else{
    input.classList.remove('is-valid')
    input.classList.add('is-invalid')
    input.nextElementSibling.classList.remove('d-none')
    return false  
}
}

function registerUser(){
if(validateInput(username,nameRegex)&&
   validateInput(email,emailRegex)&&
   validateInput(pass,passRegex)){
    
    if(!checkUserExist(email.value)){
    var newUser ={
        name : username.value,
        email : email.value,
        password : pass.value
    }
    usersList.push(newUser)
    localStorage.setItem("usersList",JSON.stringify(usersList))
    Swal.fire({
      title: "Success!",
      icon: "success",
      draggable: true,
  }); 
  var successBtn = document.querySelector('.swal2-confirm')  
  successBtn.addEventListener('click',function(){
          window.location.href = 'index.html'
  })
    }
}else{
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You must enter vaild data before register!"
      });
}
}

function checkUserExist(userEmail){
    for(var i = 0 ; i < usersList.length ; i++){   
      if(usersList[i].email === userEmail){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "This email already exists!"
          });
          var errorBtn = document.querySelector('.swal2-confirm')  
          errorBtn.addEventListener('click',function(){
          window.location.href = 'index.html'
          })
          return true
      }
    }
    Swal.fire({
      title: "Success!",
      icon: "success",
      draggable: true,
  }); 
  var successBtn = document.querySelector('.swal2-confirm')  
  successBtn.addEventListener('click',function(){
  window.location.href = 'index.html'
  })
  return false    

}
// ! Events
username.addEventListener('input',function(){
   validateInput(username,nameRegex)
})
email.addEventListener('input',function(){
    validateInput(email,emailRegex)
})
pass.addEventListener('input',function(){
    validateInput(pass,passRegex)
})
registerBtn.addEventListener('click',registerUser)