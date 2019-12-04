const usuario = {
    nome: 'Marcus',
    idade: 41,
    endereco: {
        cidade: 'Rio de Janeiro',
        estado: 'RJ',
    },
};

// Transforma isso
// const nome = usuario.nome;
// const idade = usuario.idade;
// const cidade = usuario.endereco.cidade;
// Nisso
const {nome, idade, endereco: {cidade} } = usuario;

// Trasnforma isso
// console.log(usuario.nome);
// console.log(usuario.idade);
// console.log(usuario.endereco.cidade);

// Nisso
console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome({ nome, idade }) {
    console.log(nome, idade);
}

mostraNome(usuario);

