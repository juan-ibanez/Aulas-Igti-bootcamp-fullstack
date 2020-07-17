window.addEventListener('load', star);
function star() {
  console.log('Aula 04');
  console.log('Totalmente carregada');

  var nameInput = document.querySelector('#nameInput');
  nameInput.addEventListener('keyup', countName);

  var form = document.querySelector('form');
  form.addEventListener('submit', preventSubmit);
}
function countName(event) {
  var count = event.target.value;

  var span = document.querySelector('#nameLength');
  span.textContent = count.length;
}
function preventSubmit(event) {
  event.preventDefault();
  var nameInput = document.querySelector('#nameInput');
  alert(nameInput.value + ' cadastrado com sucesso!');
}
