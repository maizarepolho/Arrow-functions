const numeros = [1,2,3,4,5,6];

const pares = numeros.filter((n) => n % 2 === 0)

console.log(pares)


//Atividade 2//
const notas = [ 5,8,6.5,9,7];

console.log(notas.filter((n) => n >= 7));


//Atividade 3//
const produtos = [
  { id: 1, nome: "Caderno", preco: 15 },
  { id: 2, nome: "Caneta", preco: 3 },
  { id: 3, nome: "Mochila", preco: 120 },
];

const filtrados = produtos.filter((p) => p.preco < 50);
const nomesBaratos = filtrados.map((p) => p.nome);

console.log(nomesBaratos);