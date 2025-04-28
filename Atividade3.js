let numeros = [3, 5, 7, 9, 11, 13, 15, 17, 19, 21];
let maior = 0;
for (let i in numeros) {
    if (numeros[i] > maior) {
        maior = numeros[i];
    }
}
console.log(`O maior número é: ${maior}`);

