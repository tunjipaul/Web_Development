//localstorage works with key-value pairs like objects.

//save data.
localStorage.setItem('userName', 'Alice');
localStorage.setItem('userAge', '25');
localStorage.setItem('isLoggedIn', 'true');

//get data
let name = localStorage.getItem('userName');
let age = localStorage.getItem('userAge');
let loggedIn = localStorage.getItem('isLoggedIn');

console.log('Retrieved data:');
console.log('Name:', name); //"alice"
console.log("Age:", age); //"25" (note: always returns string)
console.log('Logged In:', loggedIn) //"true"
