var logout = document.querySelector(".logout")
var span = document.querySelector('span')
var usersList = JSON.parse(localStorage.getItem('usersList')) 
span.innerText = usersList[(usersList.length)-1].name

logout.addEventListener("click",function(){
    usersList.splice(usersList[(usersList.length)-1],1)
    localStorage.setItem('usersList',JSON.stringify(usersList))
    window.location.href = 'index.html' 
})