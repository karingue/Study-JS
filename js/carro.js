
const carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2001,
    motor: ["1.6", "1.4","1.0"]
}
//Converteu texto para JSON
let texto = JSON.stringify(carro);

//Colocou o texto no HTML
document.getElementById("area").innerHTML = texto;

//Converteu o texto em objeto
let obj = JSON.parse(texto);

//Pegamos o valor deste objeto
console.log(obj.motor[2]); 
  