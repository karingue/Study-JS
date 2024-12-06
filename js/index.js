const numeros = [40,100,1,5,25,10];
const maior20 = numeros.filter(filtragem);

function filtragem(value, index, array){
    return value > 20;
}



document.getElementById("texto").innerHTML = maior20; 