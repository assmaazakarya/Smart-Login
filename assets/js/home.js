var span = document.querySelector('span')
var usersList = JSON.parse(localStorage.getItem('usersList')) 
span.innerText = usersList[(usersList.length)-1].name