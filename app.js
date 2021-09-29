const nameInput = document.getElementById('name');
const button = document.getElementById('button');
const firstName = document.getElementById('firstname');

button.addEventListener('click', ()=>{
    let newName = nameInput.value;
    firstName.textContent = newName;
});