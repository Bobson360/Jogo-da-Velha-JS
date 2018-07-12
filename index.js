/*********** VARIAVEIS    ******************************/

var estado = "X"
var soma = 0
var element
var campo = []
var valor = 0
var jogador = []
var rodada = 0

/************ FUNÇÕES **********************************/

function draw(){// DESENHA O QUADRO E FAZ AS LINHAS
	var canvas = document.getElementById("canvas")
	var ctx = canvas.getContext("2d")
	ctx.fillStyle = "rgb(0, 0, 0)"
	ctx.fillRect(195, 0, 10, 600)
	ctx.fillRect(395, 0, 10, 600)
	ctx.fillRect(0, 195, 600, 10)
	ctx.fillRect(0, 395, 600, 10)
}

function mudaEstado(){// muda o estado da variavel estado
	soma++
	
	if(soma%2 == 1){
		estado = "O"
	}else if(soma%2 == 0){
		estado = "X"
	}

}


		var el = document.getElementById('frame')

		el.addEventListener('click', function(e) {//
		    element = (e.target.id)
		    gravaJogada(element)
		})

function gravaJogada(val){
	if(campo.indexOf(val) > -1){
		console.log("campo " + soma + " ja preenchido com " + estado)
	}else{
		console.log("gravando")
		campo[valor] = val
		valor++
		var div = document.getElementById(element)
       	div.innerHTML =  '<p>' + estado + '<p>'
       	div.style.background = "#DCDCDC" 
       	mudaEstado()
		console.log(campo)
		var time = setTimeout(winner, 10)
	}
}

/*******************************************************/
function winner(){
if( 
	document.getElementById("AA").innerText &&
	document.getElementById("AA").innerText == 
	document.getElementById("BA").innerText && 
	document.getElementById("AA").innerText == 
	document.getElementById("CA").innerText
  ){
  	if(	confirm("vitoria do " + document.getElementById("AA").innerText + " Deseja iniciar outro jogo?")){
  		console.log("continuar")
  	}
	}else{
		console.log(false)
	}
}

function jogadores(){
	if(jogador[0] = prompt("Nome do jogador para o X ")){
		jogador[1] = prompt("Nome do jogador para o O")
		console.log(jogador)
		var div = document.getElementById("px")
	}
}
draw()
setTimeout(jogadores,10)
