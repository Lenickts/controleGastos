//Modularização (ES Modules)
import { Categoria, ListaGastosPorCategoria } from "./classes.js";
import { valorNegativo, atualizarInterface } from "./utils.js";

//POO
const gastoPorCategoria = new ListaGastosPorCategoria(
    new Categoria("Alimentação"),
    new Categoria("Transporte"),
    new Categoria("Lazer"),
    new Categoria("Outros")
)


//Manipulação DOM
const formulario = document.querySelector("form");
formulario.addEventListener("submit", (evento) => {
    //Prevenção do comportamento padrao
    evento.preventDefault();
    
    const valorInformado = formulario.elements.valor.value;
    const categoriaInformada = formulario.elements.categoria.value;

    
    if (valorInformado === "" || isNaN(valorInformado)) {
        alert("Por favor, insira um valor numérico válido.");
        return;
    }

    
    if (valorNegativo(valorInformado)) {
        alert("Valor inválido. O valor não pode ser negativo.");
        return;
    }

    
    const categoria = gastoPorCategoria.obterCategoriaPorNome(categoriaInformada);
    categoria.adicionarValor(valorInformado);


    
    atualizarInterface(gastoPorCategoria);
    formulario.reset();
})

/*
1.Pegar o valor informado
2.pegar a categoria
3. impedir números negativos
4. de acordo com a categoria, atualize o valor
    4.1 criar variaveis para controlar ou armazenar os valores de cada uma das categorias
5. atualizar interface
6. limpar campos
*/