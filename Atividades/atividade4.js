let numeros = [];

for (let i = 0; i < 10; i++) {
    let num = prompt(`Digite o número ${i + 1}:`);
    numeros.push(Number(num));
}

numeros.forEach(num => console.log(num));

let media = 0;
for (let i = 0; i < numeros.length; i++) {
    media += numeros[i];
}
media /= numeros.length;

console.log(`A média dos números é: ${media}`);