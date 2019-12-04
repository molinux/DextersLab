// Object Short Syntax
const nome = 'Marcus';
const idade = 41;

// Transforma isso
const usuario = {
    nome: nome,
    idade: idade,
    empresa: 'Molinero Negocios',
};

// Nisso
const usuario = {
    nome,
    idade,
    empresa: 'Molinero Negocios',
};

console.log(usuario);
