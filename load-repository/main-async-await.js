// REVER AULA E REFAZER !!!!

// ASYNC | AWAIT

// Constante minhaPromisse que retorna uma função Promisse
// pegar o resolve e reject e retornar algo
// Utilizando o setTimeout para chamar o resolve, passando OK com timeout de 2 segundos
const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK') }, 2000)
});

async function executaPromisse() {
    const response = await minhaPromise();

    console.log(response);
}

executaPromisse();