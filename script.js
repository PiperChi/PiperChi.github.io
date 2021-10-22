var a;

function on(){
//get valure from input field and save as "a"
a = document.getElementById('name').value
//creat LS key with value of "a"
localStorage.setItem('uName',a);
//automatically take user to page two.html
location.href="two.html";
window.alert(a)
}

function off(){
window.alert(a)
} 
