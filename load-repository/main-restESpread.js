// REST/SPREAD
// Instalar via yarn
// yarn add @babel/plugin-proposal-object-rest-spread
// no .babelrc
// {
//     "presets": ["@babel/preset-env"],
//         "plugins": ["@babel/plugin-proposal-object-rest-spread"]
// }

// REST
const usuario = {
    nome: 'Marcus',
    idade: 23,
    empresa: 'Rocketseat'
};

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);


const arr = [1, 2, 3, 4];
const [a, b, ...c ] = arr;
console.log(a);
console.log(b);
console.log(c);

// Convertendo os parametros em array
function soma(...params) {
    // return params;
    return params.reduce((total, next)=> total + next);
}

console.log(soma(1, 3, 4));

// SPREAD
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
console.log(arr3);

// Sobrepror apenas uma propriedade do objeto
const usuario1 = {
    nome: 'Marcus',
    idade: 41,
    empresa: 'Molinero Negocios',
};

const usuario2 = { ...usuario1, nome: 'Aaron' };
console.log(usuario2);