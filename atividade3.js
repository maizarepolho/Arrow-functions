const numeros = [1, 2, 3, 4]; 
const duplicados = numeros.map((n) => n * 2);

console.log(duplicados);

//Atividade 2//
const nomes = ["ana", "carlos", "pedro"];

const maiusculos = nomes.map((n) => n.toUpperCase());

console.log(maiusculos);


//Atividade 3//

const produtos = [
  { id: 1, nome: "Caderno", preco: 15 },
  { id: 2, nome: "Caneta", preco: 3 },
  { id: 3, nome: "Mochila", preco: 120 },
];

const lista = produtos.map((n) => n.nome);

console.log(lista); 
