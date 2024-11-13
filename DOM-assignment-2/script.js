

let display = document.getElementById('display');

let key = document.getElementById('keyboard');

key.addEventListener('click', (val)=>{

 let target= val.target.innerText
if(target== "C"){
  display.innerText = '';
}
else if(target == "="){
  display.innerText = eval(display.innerText);
}else{
  display.innerText += target
}
})

















