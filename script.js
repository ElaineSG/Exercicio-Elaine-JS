let nome = "Elaine";   // sua variável com o nome

let idade = 38;     // sua variável com a idade

console.log("Olá, meu nome é " + nome + " e tenho " + idade + " anos!");

alert("Olá, meu nome é " + nome + " e tenho " + idade + " anos!");

function verificarIdade(idade) {
  if (idade >= 18) {
    alert("Você é maior de idade!");
  } else {
    alert("Você é menor de idade!");
  }
}

verificarIdade(38); // mostra: Você é maior de idade!