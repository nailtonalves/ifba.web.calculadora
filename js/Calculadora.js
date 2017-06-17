var num1;
var num2;
var operacao = 0; //1- adic, 2- subt, 3-mult, 4-divi 5-porcentagem
//var pvisor = document.getElementById("visor");

function operar(num, operador) {
	num1 = parseFloat(num);
	operacao = parseInt(operador);
	document.getElementById("visor").value = "Aguardando valor";
}

function executar(num) {
  num2 = parseFloat(num);
  var resposta;
  switch (operacao) {
	  case 1:
	  resposta = adic();
	  break;
	  
	  case 2:
	  resposta = subt();
	  break;
	  
	  case 3:
	  resposta = mult();
	  break;
	  
	  case 4:
	  resposta = divi();
	  break;
	  
	  case 5:
	  resposta = porc();
	  break;
  }
  
  document.getElementById("visor").value = resposta;;
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

function porc() {
  var resultado = num1 * (num2/100);
  return resultado;
}

//Funcoes dos botoes

function bt1(num) {
	if ( (num == "resultado") || (num == "Aguardando valor") || (num == "0") ) {
		document.getElementById("visor").value = "1";
	} else {
		document.getElementById("visor").value = num + "1";
	}
}

function bt2(num) {
	if ( (num == "resultado") || (num == "Aguardando valor") || (num == "0") ) {
		document.getElementById("visor").value = "2";
	} else {
		document.getElementById("visor").value = num + "2";
	}
}

function bt3(num) {
	if ( (num == "resultado") || (num == "Aguardando valor") || (num == "0") ) {
		document.getElementById("visor").value = "3";
	} else {
		document.getElementById("visor").value = num + "3";
	}
}

function bt4(num) {
	if ( (num == "resultado") || (num == "Aguardando valor") || (num == "0") ) {
		document.getElementById("visor").value = "4";
	} else {
		document.getElementById("visor").value = num + "4";
	}
}

function bt5(num) {
	if ( (num == "resultado") || (num == "Aguardando valor") || (num == "0") ) {
		document.getElementById("visor").value = "5";
	} else {
		document.getElementById("visor").value = num + "5";
	}
}

function bt6(num) {
	if ( (num == "resultado") || (num == "Aguardando valor") || (num == "0") ) {
		document.getElementById("visor").value = "6";
	} else {
		document.getElementById("visor").value = num + "6";
	}
}

function bt7(num) {
	if ( (num == "resultado") || (num == "Aguardando valor") || (num == "0") ) {
		document.getElementById("visor").value = "7";
	} else {
		document.getElementById("visor").value = num + "7";
	}
}

function bt8(num) {
	if ( (num == "resultado") || (num == "Aguardando valor") || (num == "0") ) {
		document.getElementById("visor").value = "8";
	} else {
		document.getElementById("visor").value = num + "8";
	}
}

function bt9(num) {
	if ( (num == "resultado") || (num == "Aguardando valor") || (num == "0") ) {
		document.getElementById("visor").value = "9";
	} else {
		document.getElementById("visor").value = num + "9";
	}
}

function bt0(num) {
	if ( (num == "resultado") || (num == "Aguardando valor") || (num == "0") ) {
		document.getElementById("visor").value = "0";
	} else {
		document.getElementById("visor").value = num + "0";
	}
}

function btPonto(num) {
	if ( (num == "resultado") || (num == "Aguardando valor") || (num == "0") ) {
		document.getElementById("visor").value = "0.";
	} else {
		document.getElementById("visor").value = num + ".";
	}
}

function btQuadrado(num) {
	if ( (num == "resultado") || (num == "Aguardando valor") || (num == "0") ) {
		document.getElementById("visor").value = "0";
	} else {
		document.getElementById("visor").value = Math.pow(parseFloat(num), 2);
	}
}

function btRaiz(num) {
	if ( (num == "resultado") || (num == "Aguardando valor") || (num == "0") ) {
		document.getElementById("visor").value = "0";
	} else {
		document.getElementById("visor").value = Math.sqrt(parseFloat(num));
	}
}

function btC() {
	document.getElementById("visor").value = "0";
	num1 = null;
	num2 = null;
	operacao = null;
}