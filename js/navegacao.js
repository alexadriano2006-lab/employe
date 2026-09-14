const modulos = document.querySelectorAll(".modulo");
const botoesMenu = document.querySelectorAll("[data-modulo]");
const tituloModulo = document.getElementById("tituloModulo");
const descricaoModulo = document.getElementById("descricaoModulo");

function navegarPara(nomeModulo) {
    const moduloSelecionado = document.getElementById(nomeModulo);

    if (!moduloSelecionado) {
        return;
    }

    modulos.forEach(function (modulo) {
        modulo.classList.remove("ativo");
    });

    botoesMenu.forEach(function (botao) {
        const estaAtivo = botao.dataset.modulo === nomeModulo;
        botao.classList.toggle("active", estaAtivo);
    });

    moduloSelecionado.classList.add("ativo");

    tituloModulo.textContent = moduloSelecionado.dataset.titulo;
    descricaoModulo.textContent = moduloSelecionado.dataset.descricao;

    history.replaceState(null, "", `#${nomeModulo}`);
}

botoesMenu.forEach(function (botao) {
    botao.addEventListener("click", function () {
        navegarPara(botao.dataset.modulo);
    });
});

const botaoAbrirCadastro = document.getElementById("abrirCadastro");

botaoAbrirCadastro.addEventListener("click", function () {
    navegarPara("cadastro");
});

const botoesAtalho = document.querySelectorAll("[data-ir-para]");

botoesAtalho.forEach(function (botao) {
    botao.addEventListener("click", function () {
        navegarPara(botao.dataset.irPara);
    });
});

const moduloInicial = location.hash.replace("#", "");

if (moduloInicial) {
    navegarPara(moduloInicial);
}