console.log(Array(3).fill(1))

console.log(Array(3).fill(1).map((_, i) => i ** 2 ))

console.log(Array(4).fill(1).map((_, i) => Math.pow(i,2) ))

console.log(Array(5).fill(2).map((_, i) => i * 3 ))

const matriz = [[0,1,1,0,1],[0,0,0,0],[1,0,0,1,1]]

console.log(matriz)
let aleatorio = Math.random()

console.log(aleatorio.toFixed(3))
let inteiro = parseInt(aleatorio * 100)

console.log(inteiro)

array = [4,3,2,2]
nomes = ['leo','cecilia','Ivana']
console.log(...array,nomes)
console.log(...nomes,array)
console.log(array,nomes)
console.log](array.concat(nomes))