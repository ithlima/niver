var container = document.querySelector(".container");
var frases = document.querySelector(".container-2");
var titulo = document.querySelector(".title");

function comecar(){
  container.style.display = 'flex';
}
function certa(){
  alert('AAAAA CÃO QUE ACERTA')
  container.style.display = 'none';
  frases.style.display = 'block'
  titulo.style.display = 'none'
}