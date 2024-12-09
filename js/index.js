function ativarContagem(){
    // document.getElementById("tempo").innerHTML = "Começou a contar";
    // tempo = setTimeout( function() {
    //     document.getElementById("tempo").innerHTML = "Executou o setTimeOut";
    // }, 5000); 

    tempo = setInterval(function(){
        var cronometro = document.getElementById("tempo").innerHTML;
        var soma = parseInt(cronometro)-1;

        if (soma === 0){
            document.getElementById("tempo").innerHTML = "Tempo esgotado";
            pararContagem();
        }else{
            document.getElementById("tempo").innerHTML = soma
        }
    }, 1000);
}

function pararContagem(){
    // clearTimeout(tempo);
    // document.getElementById("tempo").innerHTML = "Parou de contar tempo";
    clearInterval(tempo);
    // document.getElementById("tempo").innerHTML = "Parou de contar tempo";
}