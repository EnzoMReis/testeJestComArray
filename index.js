const leia = require("readline-sync");
const { soma, sub } = require("./aritmetica");

let arr = [1, 1, 1, 1, 1];

function main() {
  console.log("---------------------------------------------------");
  console.log("Digite uma operação '+' , '-'");
  let op = leia.question("Qual a operacao desejada: ");

  let res = 0;

  switch (op) {
    case "+":
      res = soma(arr, res);
      break;

    case "-":
      res = sub(arr, res);
      break;

    default:
      console.log("Opção inválida!");
  }
  console.log(" ");
  console.log("O resultado é = ", res);
}

main();
