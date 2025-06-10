export class Categoria {
    //Encapsulamento com campos privados
    #nome;
    #valor;
    constructor(nome) {
        this.#nome = nome;
        this.#valor = 0;
    }
    //Uso dos Getters
    get valor() {
        return this.#valor;
    }
    get nome() {
        return this.#nome;
    }
    //METODO
    //Manipulação do estado do objeto
    adicionarValor(valor) {
        this.#valor = parseFloat(valor);
    }
}

export class ListaGastosPorCategoria{
    #categorias;
    //Rest Operator
    constructor(...categorias) {
        this.#categorias = categorias;
    }

    //Getters
    get categorias() {
        return this.#categorias;
    }

    //Metodo
    obterCategoriaPorNome(nome) {
        return this.#categorias.find((categoria) => categoria.nome == nome);
    }

    obterTotal() {
        //Redução de dados com reduce
        return this.#categorias.reduce((total, categoria) => total + categoria.valor, 0);
    }
}