var botaoMenuHamburguer = document.querySelector(".botao.menuHamburguer");
function abrirMenu(){
	// declarar uma variavel, pegar navegacaoPrimaria
	var menu = document.querySelector("#navegacaoPrimaria");
	
	// se estiver com o classname "menuHorizontal visivel" fecha o dropdown
	if(menu.className == "menuHorizontal visivel"){
		// Fechar o menuHorizontal
		menu.className = "menuHorizontal";
	}else{
		// Abrir o menuHorizontal
		// tornar a navegacaoPrimaria Visivel, adicionar a classe visivel
		menu.className = "menuHorizontal visivel";
	}
}
botaoMenuHamburguer.onclick = abrirMenu;

// Botão amei 
// Retorna um Array de Botao
var botoesAmei = document.querySelectorAll(".botao.amei");
function amar(){
	if(this.className == "botao amei vermelho"){
		this.className = "botao amei";
	}else{
		this.className = "botao amei vermelho";
	}
}


for (var i = 0; i < botoesAmei.length; i++) {
	botoesAmei[i].onclick = amar;

}

// botoesAmei[0].onclick = amar;
// botoesAmei[1].onclick = amar;
// botoesAmei[2].onclick = amar;


// var botaoAmei = document.querySelector(".botao.amei");
// function amar(){
// 	this.className = "botao amei vermelho";
// }
// botaoAmei.onclick = amar;

var botoesDetalhe = document.querySelectorAll(".botao.detalhe");
function pintar(){
	if(this.className == "botao detalhe azul"){
		this.className = "botao detalhe";
	}else{
		this.className = "botao detalhe azul";
	}
}


for (var i = 0; i < botoesDetalhe.length; i++) {
	botoesDetalhe[i].onclick = pintar;

}