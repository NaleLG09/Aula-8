//array - vetor - Listas
//nome - elemento

let lista = ['arroz', 'feijão', 'carne']

console.log(lista)

//mostrando posição do array
console.log(lista[0])

//alterar item da posição
lista[1] = 'batata'
console.log('posição 1:' + lista[1])

//tamanho do array
console.log('tamanho do array: ' + lista.length)

//adicionando valor ao final da lista
lista.push('salada')
console.log(lista)

//excluir ultimo item
lista.pop()
console.log(lista)