/*********** VARIAVEIS    ******************************/

let estado = "X"						// toda jogada inicia com o X
let soma = 0							// define a variavel para o contador de jogadas
let element
let campo = []
let valor = 0
let jogador = [] 						// Array para inserir os jogadores
let rodada = 0 							// variavel para salvar a quantidade de partidas

/************ FUNÇÕES **********************************/

function draw(){						// DESENHA O QUADRO E FAZ AS LINHAS
	let canvas = document.getElementById("canvas") // obtem o elemento atraves de seu id
	let ctx = canvas.getContext("2d")
	ctx.fillStyle = "rgb(0, 0, 0)"		// Defina a cor do Quadro 0,0,0 = preto
	ctx.fillRect(195, 0, 10, 600)		/*********************************************************/
	ctx.fillRect(395, 0, 10, 600)		//	POSICIONA E DIMENCIONA O ELEMENTO NA TELA
	ctx.fillRect(0, 195, 600, 10)
	ctx.fillRect(0, 395, 600, 10)		/*********************************************************/
} //comented

function mudaEstado(){					// muda o estado da variavel estado
	soma++ 								// incrementa 1 na variavel soma
	
	if(soma%2 == 1){ 					// se soma tiver resto da divisão 1 então
		estado = "O" 					// estado passa a ser "O"
	}else if(soma%2 == 0){ 				// se soma tiver resto da divisão 0 então
		estado = "X" 					// se soma tiver resto da divisão 1 então
	}

} //comented


		let el = document.getElementById('frame')  // captura o elemento pelo id 'frame' e salva na variavel el

		el.addEventListener('click', function(e) { // dispara um evento com click do botão esquerdo do mouse
		    element = (e.target.id)				   // pega o id da div filha da div id='frame' e salva na variamel element
		    gravaJogada(element)				   // Chama a função gravaJogada()
		}) // comented

function gravaJogada(val){ 						  // função que grava as jogadas
	if(campo.indexOf(val) > -1){ 				  // verifica se ja existe algum valor na posição do array onde foi clicado
		console.log("campo " + soma + " ja preenchido com " + estado)  // se o campo ja foi preenxido, inprime no console...
	}else{
		console.log("gravando")
		campo[valor] = val						  // grava o valor no array
		valor++
		let div = document.getElementById(element)// pega o elemento pelo id
       	div.innerHTML =  '<p>' + estado + '<p>'   // insere o texto respectivo a jogada no HTML
       	div.style.background = "#DCDCDC" 		  // muda o background da div
       	mudaEstado()							  // chama a função mudaEstado()
		console.log(campo,  element)
		setTimeout(winner, 10)					  // espera 10 milisegundos para chamar a função winner
	}
} // comented

/*******************************************************/
function winner(){//Verifica as possibilidades de vitoria de cada participante
	if( // verifica a vitoria na coluna AAAC			      a  b  c
		document.getElementById("AA").innerText &&		// a [x][ ][ ]
	 	document.getElementById("AA").innerText == 		// b [x][ ][ ]
		document.getElementById("BA").innerText && 		// c [x][ ][ ]
		document.getElementById("AA").innerText ==
		document.getElementById("CA").innerText
  	){
  		if(	confirm("vitoria do " + document.getElementById("AA").innerText + " Deseja iniciar outro jogo?")){
  		console.log("continuar")
  	}
	}else{
		console.log(false)
	}// fim coluna AAAC

    if( // verifica a vitoria na coluna BBCB				  a  b  c
        document.getElementById("AB").innerText &&		// a [ ][x][ ]
        document.getElementById("AB").innerText ==		// b [ ][x][ ]
        document.getElementById("BB").innerText &&		// c [ ][x][ ]
        document.getElementById("AB").innerText ==
    	document.getElementById("CB").innerText
    ){
        if(	confirm("vitoria do " + document.getElementById("AB").innerText + " Deseja iniciar outro jogo?")){
            console.log("continuar")
        }
    }else{
        console.log(false)
    }// fim coluna BBCB

    if( // verifica a vitoria na coluna ACCC				a  b  c
        document.getElementById("AC").innerText &&		// a [ ][ ][x]
        document.getElementById("AC").innerText ==		// b [ ][ ][x]
        document.getElementById("BC").innerText &&		// c [ ][ ][x]
        document.getElementById("AC").innerText ==
        document.getElementById("CC").innerText
    ){
        if(	confirm("vitoria do " + document.getElementById("AC").innerText + " Deseja iniciar outro jogo?")){
            console.log("continuar")
        }
    }else{
        console.log(false)
    }// fim coluna ACCC

    if( // verifica a vitoria na coluna AAAC				a  b  c
        document.getElementById("AA").innerText &&		// a [x][x][x]
        document.getElementById("AA").innerText ==		// b [ ][ ][ ]
        document.getElementById("AB").innerText &&		// c [ ][ ][ ]
        document.getElementById("AA").innerText ==
        document.getElementById("AC").innerText
    ){
        if(	confirm("vitoria do " + document.getElementById("AA").innerText + " Deseja iniciar outro jogo?")){
            console.log("continuar")
        }
    }else{
        console.log(false)
    }// fim coluna AAAC

    if( // verifica a vitoria na coluna ABCB		          a  b  c
        document.getElementById("BA").innerText && 		// a [ ][ ][ ]
        document.getElementById("BA").innerText ==		// b [x][x][x]
        document.getElementById("BB").innerText &&		// c [ ][ ][ ]
        document.getElementById("BA").innerText ==
        document.getElementById("BC").innerText
    ){
        if(	confirm("vitoria do " + document.getElementById("BA").innerText + " Deseja iniciar outro jogo?")){
            console.log("continuar")
        }
    }else{
        console.log(false)
    }// fim coluna ABCB

    if( // verifica a vitoria na coluna ACCC		          a  b  c
        document.getElementById("CA").innerText && 		// a [ ][ ][ ]
        document.getElementById("CA").innerText ==		// b [ ][ ][ ]
        document.getElementById("CB").innerText &&		// c [x][x][x]
        document.getElementById("CA").innerText ==
        document.getElementById("CC").innerText
    ){
        if(	confirm("vitoria do " + document.getElementById("CA").innerText + " Deseja iniciar outro jogo?")){
            console.log("continuar")
        }
    }else{
        console.log(false)
    }// fim coluna ABCB

    if( // verifica a vitoria na coluna AACC		          a  b  c
        document.getElementById("AA").innerText && 		// a [x][ ][ ]
        document.getElementById("AA").innerText ==		// b [ ][x][ ]
        document.getElementById("BB").innerText &&		// c [ ][ ][x]
        document.getElementById("AA").innerText ==
        document.getElementById("CC").innerText
    ){
        if(	confirm("vitoria do " + document.getElementById("AA").innerText + " Deseja iniciar outro jogo?")){
            console.log("continuar")
        }
    }else{
        console.log(false)
    }// fim coluna ABCB

    if( // verifica a vitoria na coluna CAAC		          a  b  c
        document.getElementById("CA").innerText && 		// a [ ][ ][x]
        document.getElementById("CA").innerText ==		// b [ ][x][ ]
        document.getElementById("BB").innerText &&		// c [x][ ][ ]
        document.getElementById("CA").innerText ==
        document.getElementById("AC").innerText
    ){
        if(	confirm("vitoria do " + document.getElementById("CA").innerText + " Deseja iniciar outro jogo?")){
            console.log("continuar")
        }
    }else{
        console.log(false)
    }// fim coluna CAAC
} // Cemented

function jogadores(){
	if(jogador[0] = prompt("Nome do jogador para o X ")){ // solicita o nome para o jogador X
		jogador[1] = prompt("Nome do jogador para o O")   // solicita o nome para o jogador O
		let px = document.getElementById("px")            // pega o id='px' no html
        let po = document.getElementById("po")            // pega o id='po' no html
        px.innerHTML = 'Jogador X:' + jogador[0]          // insere o texto no elemento id='px' com o nome na posição 0 do array jogador[]
        po.innerHTML = 'Jogador O:' + jogador[1]          // insere o texto no elemento id='po' com o nome na posição 1 do array jogador[]
    }
}
draw() // inicia a função draw()
setTimeout(jogadores,10) // aguarda 10 milisegundos para chamar a função jogadores "pode ser subistituido por onload"
