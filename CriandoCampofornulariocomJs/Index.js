const input = document.querySelector('input');
const lista = document.querySelector('ul');

function handleKeyUp(e){
 if (e.key === 'Enter'){
   const newLi = document.createElement('li');
   newLi.innerHTML = input.value;
   lista.appendChild(newLi);
   input.value = '';
 }
}

input.addEventListener('keyup', handleKeyUp);
