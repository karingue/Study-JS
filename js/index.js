function diaDaSemana(){
    var dia = new Date().getDay();
    
    console.log(dia);
    
    switch(dia){
        case 0:
            document.getElementById("teste").innerHTML = "Hoje é domingo";
            break;

        case 1:            
            document.getElementById("teste").innerHTML = "Hoje é segunda";
            break;

        case 2:                    
        
            document.getElementById("teste").innerHTML = "Hoje é terça";
            break;

        case 3:
            document.getElementById("teste").innerHTML = "Hoje é quarta";
            break;
        
        case 4:

            document.getElementById("teste").innerHTML = "Hoje é quinta";   
            break;

        case 5:

            document.getElementById("teste").innerHTML = "Hoje é sexta";
            break;
    
        case 6:
            document.getElementById("teste").innerHTML = "Hoje é sabado";         
            break;
        default:
            document.getElementById("teste").innerHTML = "Hoje é uma semana";
    }
}
