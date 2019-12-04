class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class todoList extends List {
// class todoList {
    // // Primeiro método a ser executado
    // // Iniciar variáveis
    // constructor() {
    //     this.todos = [];
    // }

    // addTodo() {
    //     // .push = Adicionar um novo item no todos
    //     this.todos.push('Novo todo');
    //     console.log(this.todos);
    // }
    constructor(){
        // Chamando o constructor da classe pai (List)
        super();

        this.usuario = 'Molinero';
    }

    mostraUsuario() {
        console.log(this.usuario);
    }

}

// Instanciando a classe
var MinhaLista = new todoList();

document.getElementById('novotodo').onclick = function() {
    // MinhaLista.addTodo();
    MinhaLista.add('Novo todo2');
}

MinhaLista.mostraUsuario();