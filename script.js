// 1. Primeiro Script
alert("Olá! Bem-vindo ao JavaScript.");
console.log("Mensagem exibida no console.");

document.body.style.backgroundColor = "lightgray"; // Altere para a cor desejada


// 2. Acesso ao Objeto window
console.log("Largura: " + window.innerWidth + ", Altura: " + window.innerHeight);

// 3. Manipulação do Local Storage
localStorage.setItem("meuValor", "Olá, Local Storage!");
const valorRecuperado = localStorage.getItem("meuValor");
console.log("Valor recuperado: " + valorRecuperado);

// 4. Criação de Elementos HTML
const meuDiv = document.createElement("div");
meuDiv.id = "meuDiv";
document.body.appendChild(meuDiv);

// 5. Manipulação de Conteúdo
meuDiv.innerText = "Este é o meu div!";
meuDiv.style.color = "blue";
meuDiv.style.fontSize = "20px";
meuDiv.style.border = "1px solid black";
meuDiv.style.padding = "10px";
meuDiv.style.position = "relative";
// 6. Modificação de Elementos Existentes
const paragrafo = document.querySelector("p"); // Seleciona o primeiro parágrafo na página
if (paragrafo) {
    paragrafo.innerText = "Manipulação de elementos em javaScript!";
    paragrafo.style.backgroundColor = "lightblue";
}

// 7. Manipulação de Atributos
const imagem = document.createElement("img");
imagem.src = "sky.jpg"; // Substitua por uma URL válida
imagem.setAttribute("title", "Imagem dinâmica");
imagem.style.width = "550px";  // Define a largura da imagem
imagem.style.height = "350px"; // Define a altura da imagem
document.body.appendChild(imagem);

// **Criar um contêiner para os botões**
const containerBotoes = document.createElement("div");
containerBotoes.style.display = "flex"; // Usando flexbox
containerBotoes.style.row = "column"; // Coloca os botões em uma coluna
containerBotoes.style.marginTop = "20px"; // Espaço acima do contêiner


// 8. Eventos de Click
const containerBotao = document.createElement("div");
containerBotao.style.position = "absolute"; // Permite posicionamento absoluto
containerBotao.style.top = "499px";         // Distância do topo
containerBotao.style.left = "300px";         // Distância da esquerda
document.body.appendChild(containerBotao);  // Adiciona o contêiner ao corpo

// Criar o botão
const botao = document.createElement("button");
botao.innerText = "Clique aqui!";
containerBotao.appendChild(botao); // Adiciona o botão ao contêiner

botao.addEventListener("click", function() {
    meuDiv.innerText = "Você clicou no botão!";
});


// 9. Eventos de Teclado
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        console.log("A tecla Enter foi pressionada!");
    }
});

// 10. Criação de uma Lista Dinâmica
const lista = document.createElement("ul");
document.body.appendChild(lista);

function adicionarItem() {
    const li = document.createElement("li");
    li.innerText = "Novo item";

    const botaoRemover = document.createElement("button");
    botaoRemover.innerText = "Remover";
    botaoRemover.onclick = function() {
        lista.removeChild(li);
    };

    li.appendChild(botaoRemover);
    lista.appendChild(li);
}

// Adicione um botão para adicionar itens à lista
const botaoAdicionar = document.createElement("button");
botaoAdicionar.innerText = "Adicionar Item";
document.body.appendChild(botaoAdicionar);
botaoAdicionar.onclick = adicionarItem;

