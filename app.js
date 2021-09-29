const nameInput = document.getElementById('name');
const nameButton = document.getElementById('namebutton');
const firstName = document.getElementById('firstname');

nameButton.addEventListener('click', ()=>{
    let newName = nameInput.value;
    firstName.textContent = newName;
    console.log('clicking');
});

const colorButton1 = document.getElementById('colorbutton1');
const colorButton2 = document.getElementById('colorbutton2');
const colorButton3 = document.getElementById('colorbutton3');

colorButton1.addEventListener('click', ()=>{
   document.body.style.backgroundColor = "pink"
});

colorButton2.addEventListener('click', ()=>{
   document.body.style.backgroundColor = "lightgreen"
});

colorButton3.addEventListener('click', ()=>{
    document.body.style.backgroundColor = "lightblue"
 });
 