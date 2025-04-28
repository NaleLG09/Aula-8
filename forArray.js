//criando array vazio
let lista = [];

//preenchendo array com dados do usuário
for (let i = 0; i < 5; i++) {
lista.push(i +'- 2° info')
}
console.log(lista)

//mostrando posições
//for in
for(let index in lista){
    console.log(lista[index])
}
//forEach
//Itera sobre todos elementos do array
//realizar uma ação simples
lista.forEach(item => console.log(item + ' é top') )
