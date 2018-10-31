document.addEventListener('DOMContentLoaded', function(){

modal = document.querySelector(".modal")
signin = document.querySelector(".signin")
close = document.querySelector(".close")
submit = document.querySelector(".submit")
user = document.querySelector("#user")
pass = document.querySelector("#pass")


signin.addEventListener('click', function(){
  modal.style.display = "block"
})

close.addEventListener('click', function(){
  modal.style.display = "none"
})

submit.addEventListener('click', function(event){
  user.value = 'error';
  pass.value = 'error';
})











})
