//1) 
 alert('olhe o console');
console.log('Boas Vindas!');

//2)
let nome = prompt('Digite o seu nome');
alert('olhe o console');
console.log('Olá '+ nome);

//3
let nome = prompt('Digite o seu nome');
alert('Olá '+nome);

//4
let linguagemFav = prompt('Qual a linguagem de programação que você mais gosta?');
alert('olhe o console');
console.log(linguagemFav);

//5
let valor1 = 15
let valor2 = 6
let resultadoDaSoma = valor1 + valor2;
console.log(` A soma de ${valor1} e ${valor2} é igual a ${resultadoDaSoma}.`);

//6
let valor1 = 15
let valor2 = 6
let resultadoDaSubtração = valor1 - valor2;
console.log(` A diferença entre ${valor1} e ${valor2} é igual a ${resultadoDaSubtração}.`);

//7
let idadeInserida = prompt('Insira sua idade');
if(idadeInserida >= 18){alert('Vc já é maior de idade!')} else{
    alert('Vc ainda é menor de idade')};

//8
let númeroPedido = prompt('Insira um número inteiro para verificar se ele é positivo ou negativo');
if(númeroPedido >= 1){alert('O número digitado é positivo')} else if
(númeroPedido < 0){alert('O número digitado é negativo')} else{alert('O número digitado é nulo')};

//9
let númeroInicial = 1;
while(númeroInicial <= 10){console.log(númeroInicial++)};

//10
let nota = 5;

if(nota >=6){console.log('aprovado!')} else{console.log('reprovado!')};

//11
console.log(Math.random())

//12
console.log (parseInt(Math.random() * 10 + 1));

//13
console.log (parseInt(Math.random() * 1000 + 1));




