const { soma, sub } = require("./aritmetica");

let arr = [1, 1, 1, 1, 1];
let res = 0;

describe("Teste das operacoes aritmeticas caso array OP array", () => {
  test("O valor da Soma de 1 + 1 + 1 + 1 + 1 = 5", () => {
    expect(soma(arr, res)).toBe(5);
  });

  test("O valor da Subtracao de - 1 - 1 - 1 - 1 - 1 = -5", () => {
    expect(sub(arr, res)).toBe(-5);
  });
});
