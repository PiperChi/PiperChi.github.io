var a;

function getName(){
//get valure from input field and save as "a"
a = document.getElementById('name').value
//creat LS key with value of "a"
localStorage.setItem('name',a);
document.getElementById('name').value = "";
localStorage.clear()
//automatically take user to page two.html
location.href="two.html";
window.alert(a)
};

function getUser(){
var b = localStorage.getItem('uName');
document.getElementById('placeholder').innerHTML = "Hello" + " " + b;
} 
