var num1;
var num2;
var operacao = 0; //1- adic, 2- subt, 3-mult, 4-divi
var pvisor = document.getElementById("visor");

function operar(num, operador) {
	num1 = parseInt(num);
	operacao = parseInt(operador);
	pvisor.value = "Digite o segundo número";
}

function executar(num) {
  num2 = parseInt(num);
  
  
  return resultado;
}

function adic() {
  var resultado = num1 + num2;
  return resultado;
}

function subt() {
  var resultado = num1 - num2;
  return resultado;
}

function mult() {
  var resultado = num1 * num2;
  return resultado;
}

function divi() {
  var resultado = num1 / num2;
  return resultado;
}

//Funcoes dos botoes

function bt1(num) {
	if ( (num == "resultado") || (num == "Digite o segundo número")) {
		pvisor.value = 1;
	} else {
		pvisor.value = num + "1";
	}
}
