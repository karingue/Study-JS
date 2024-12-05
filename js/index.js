const lista = ["arroz","feijao","macarrao","leite"];

const lista2 = new Array("arroz", "feijao", "macarrao", "leite");
lista2[0] = "Café";
console.log(lista2);

const pessoa = ["Gabriel", "Karing",20,"Aluno"];
pessoa.shift();

document.getElementById("texto").innerHTML = pessoa.join(" * "); 
 