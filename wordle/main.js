/*variaveis*/
var acerto = 0;
var tentativa = 1;
var contador = 1;

var envioWord = document.querySelector('.envioWord');
var campoWord = document.querySelector('.campoWord');

var letter1 = document.querySelector('.letter1');
var letter2 = document.querySelector('.letter2');
var letter3 = document.querySelector('.letter3');
var letter4 = document.querySelector('.letter4');
var letter5 = document.querySelector('.letter5');

var content = document.querySelector('.content');
var container = document.getElementById(contador);

/*PALAVRA ALEATORIA*/
var palavraRandom = 'raios';
var letrasCertas = palavraRandom.split('')

/*OUTRA TENTATIVA*/
function novaChance(){
//pegando conteudo do content	
	const divContent = document.querySelector('.content')
//criando uma nova div com a class container
	const div = document.createElement('div');
	div.classList.add('container');
	div.id = String(contador);
	contador += 1;
//inserindo os quadradinhos das letras	
	div.innerHTML = 
		`<p class="letter1"></p>
		<p class="letter2"></p>
		<p class="letter3"></p>
		<p class="letter4"></p>
		<p class="letter5"></p>`

	if (tentativa <= 5 ){
		divContent.appendChild(div)
	}else{
		alert('VOCE PERDEU')
	}
}

/*VERIFICAR CADA LETRA DA SUGESTAO COM CADA LETRA DA PALAVRA CERTA*/
/*SE TIVER A LETRA FICA AMARELO*/
/*SE A LETRA ESTIVER NO LUGAR CERTO FICA VERDE*/
/*SE NAO TIVER A LETRA NADA MUDA*/
function confereSugestao(){
	if (letter1.textContent == letrasCertas[0]){
		letter1.style.backgroundColor = 'green';
		acerto ++;
	}else if (palavraRandom.includes(letter1.textContent)) {
		letter1.style.backgroundColor = 'yellow';
	}

	if (letter2.textContent == letrasCertas[1]){
		letter2.style.backgroundColor = 'green';
		acerto ++;
	}else if (palavraRandom.includes(letter2.textContent)) {
		letter2.style.backgroundColor = 'yellow';
	}

	if (letter3.textContent == letrasCertas[2]){
		letter3.style.backgroundColor = 'green';
		acerto ++;
	}else if (palavraRandom.includes(letter3.textContent)) {
		letter3.style.backgroundColor = 'yellow';
	}

	if (letter4.textContent == letrasCertas[3]){
		letter4.style.backgroundColor = 'green';
		acerto ++;
	}else if (palavraRandom.includes(letter4.textContent)) {
		letter4.style.backgroundColor = 'yellow';
	}

	if (letter5.textContent == letrasCertas[4]){
		letter5.style.backgroundColor = 'green';
		acerto ++;
	}else if (palavraRandom.includes(letter5.textContent)) {
		letter5.style.backgroundColor = 'yellow';
	}

/*SE ACERTAR A PALAVRA TERMINA O JOGO*/
	if (acerto == 5){
		alert('VOCE ACERTOU');
	}
/* SE NAO ACERTAR ADICIONA NOVO CONTAINER PARA NOVA TENTATIVA*/
	else{
		tentativa ++;
		novaChance();	
	}

}
function criaQuadrados(){
	const divContent = document.querySelector('.content')
//criando uma nova div com a class container
	const div = document.createElement('div');
	div.classList.add('container');
//inserindo os quadradinhos das letras	
	div.innerHTML = 
		`<p class="letter1"></p>
		<p class="letter2"></p>
		<p class="letter3"></p>
		<p class="letter4"></p>
		<p class="letter5"></p>`
}


/*PEGAR PALAVRA INSERIRA*/
/*SEPARAR AS LETRAS*/
function pegandoSugestao(){
	var sugestao = String(campoWord.value);
	var letrasSugestao = sugestao.split('');

/*COLOCAR CADA LETRA EM UM QUADRADO*/
	letter1.textContent = letrasSugestao[0];
	letter2.textContent = letrasSugestao[1];
	letter3.textContent = letrasSugestao[2];
	letter4.textContent = letrasSugestao[3];
	letter5.textContent = letrasSugestao[4];
	confereSugestao();
}
envioWord.addEventListener('click', pegandoSugestao);






/*SE ERRAR TODAS AS CHANCES PERDE O JOGO*/



