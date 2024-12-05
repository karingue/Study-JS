function eventoClick(){
    // alert('Acionou um evento de click');
    document.body.style.backgroundColor = "yellow";
}

function eventoDblClick(){
    document.body.style.backgroundColor = "red";
}

function viraVermelho(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "red";
}
function viraAzul(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "blue";
}

// function adicionarTexto(){
//     let p = document.getElementById("texto");
//     p.append('O mouse moveu <br>');
// }

function mudou(){
    console.log('Mudou');
}

function telacPressionada(){
    let input = document.getElementById("campoTexto").value;
    console.log(input);
}