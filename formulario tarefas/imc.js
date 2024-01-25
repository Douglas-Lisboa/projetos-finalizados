const calcular = document.getElementById('calcular');

function imc () {
const nome = document.getElementById('nome').value;
const altura = document.getElementById('altura').value;
const peso = document.getElementById('peso').value;
const resultado = document.getElementById('resultado');

if (nome !== '' && altura !== '' && peso !== '' ){

const valorIMC = (peso / (altura * altura)).toFixed(1);

let classificacao = '';

if (valorIMC < 18.5){
  classificacao = 'Abaixo do peso.';
}else if (valorIMC < 25){
  classificacao = 'Você está no peso ideal. Parabéns';
}else if (valorIMC < 30){
  classificacao = 'Você está levemente acimado peso';
}else if (valorIMC < 35 ){
  classificacao = 'Você está com obesidade grau I';
}else if (valorIMC < 40 ){
  classificacao = 'Você está com obesidade grau II';
}else {
  classificacao = 'Você está com obesidade morbida. Tome cuidado e se exercite!!';
}

resultado.textContent = '${nome} Seu IMC é ${valor IMC}';

}else {
  resultado.textContent = 'Preencha todos os campos';
}




}

calcular.addEventListener('click', imc);





}