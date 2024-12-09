//Comando base para pegar a data
let data = new Date();
console.log(data);

//Pegar o ano atual com 4 digitos
let ano = data.getFullYear();
console.log(ano); 

//Pegar o mês atual
let mes = data.getMonth();
console.log(mes);

//Mostrar o mês atual - de 0 até 11 sendo o janeiro e 11 dezembro
const mesesDoAno = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho", "Julho","Agosto","Setembro","Novembro","Outubro","Dezembro"]
let mesEscrito = mesesDoAno[data.getMonth()];
console.log(mesEscrito);

//Pegar o dia do mês do N 1 até o 31
let diaMes = data.getDate();
console.log(diaMes);

//Pegar o dia da semana de 0 a 6   
let diaSemana = data.getDay();
const diaDaSemana = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sabado"];
let dia = diaDaSemana[data.getDay()];
console.log(dia);

//Pegar a hora do dia 0 - 23
let hora = data.getHours();
// console.log(hora);

//Pegar os minutos 0 - 59
let minutos = data.getMinutes();
// console.log(minutos);

//Pegar os segundos
let segundos = data.getSeconds();
// console.log(segundos);

//Apresentar a hora atual
let horaAtual = hora +":"+ minutos +":"+segundos;
console.log(horaAtual);

//Pegar a data no padrão brasileiro
let dataBR = data.toLocaleString('pt-br', {dateStyle: "short"});
console.log(dataBR);

d = new Date();
diaMes = d.getDate();
mes = d.getMonth() + 1;
ano = d.getFullYear();

function addZero(x){return x <10 ? '0' + x : "" + x}

let dataPadrao = addZero(diaMes) + "/" + addZero(mes) + "/" + ano;
console.log(dataPadrao);

//Comparar DATAS - Maior e menor //Como data de vencimento
var hoje = new Date();
var vencimento = new Date(2024, 11, 9);

if (hoje > vencimento){
    console.log("Sua conta está vencida");
}else{
    console.log("Ainda não venceu");
}

//Diferença entre duas datas em dias
var dataInicial = new Date();
var dataFinal = new Date(2024, 11 , 18);

var diferencaTempo = dataFinal.getTime() - dataInicial.getTime();
var diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000))
console.log(diferencaDias + " Dias");