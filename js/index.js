class Carro{
    constructor(valor1,valor2,valor3){
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
    buzina(){
        return this.modelo + " Buzinou: Biiiiiiiiiiiii";
    }
}

const uno = new Carro("Fiat","Uno",2001); 
const gol = new Carro("Volkswagen", "Gol", 2007);
console.log(uno); 
console.log(gol);
gol.ano = 2014; 
console.log(gol);