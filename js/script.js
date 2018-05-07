var name = 'Rahul Rana';
var age = 26;
var email = 'rahul.rana@devstringx.com';

document.getElementById('name').addEventListener('click', printName);
document.getElementById('age').addEventListener('click', printAge);
document.getElementById('email').addEventListener('click', printEmail);

function printName(){
  document.getElementById('output').innerHTML = name;
}

function printAge(){
  document.getElementById('output').innerHTML = age;
}

function printEmail(){
  document.getElementById('output').innerHTML = email;
}
