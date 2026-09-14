const formulario = document.getElementById("formFuncionario");
const tabela = document.getElementById("tabelaFuncionarios");
const mensagem = document.getElementById("mensagem");

const totalFuncionarios = document.getElementById("totalFuncionarios");
const totalAtivos = document.getElementById("totalAtivos");
const totalInativos = document.getElementById("totalInativos");

const funcionariosEmpresa = [];

function criarFuncionario(nome, idade, salario, status, cargo) {
    if (cargo === "desenvolvedor") {
        return new Desenvolvedor(nome, idade, salario, status);
    }

    if (cargo === "suporte") {
        return new Suporte(nome, idade, salario, status);
    }

    if (cargo === "gerente") {
        return new Gerente(nome, idade, salario, status);
    }

    throw new Error("Selecione um cargo válido");
}

function atualizarTabela() {
    tabela.innerHTML = "";

    if (funcionariosEmpresa.length === 0) {
        tabela.innerHTML = `
            <tr>
                <td colspan="6" class="text-center text-secondary py-5">
                    Nenhum funcionário cadastrado.
                </td>
            </tr>
        `;

        return;
    }

    for (let i = 0; i < funcionariosEmpresa.length; i++) {
        const funcionario = funcionariosEmpresa[i];

        let cargo;

        if (funcionario instanceof Desenvolvedor) {
            cargo = "Desenvolvedor";
        } else if (funcionario instanceof Suporte) {
            cargo = "Suporte";
        } else {
            cargo = "Gerente";
        }

        tabela.innerHTML += `
            <tr>
                <td>${funcionario.nome}</td>
                <td>${funcionario.idade}</td>
                <td>${cargo}</td>
                <td>R$ ${funcionario.salario.toFixed(2)}</td>
                <td>
                    ${funcionario.status ? "Ativo" : "Inativo"}
                </td>
                <td class="text-end">
                    <button class="btn btn-sm btn-outline-danger">
                        Excluir
                    </button>
                </td>
            </tr>
        `;
    }
}

function atualizarResumo() {
    let ativos = 0;

    for (let i = 0; i < funcionariosEmpresa.length; i++) {
        if (funcionariosEmpresa[i].status === true) {
            ativos++;
        }
    }

    totalFuncionarios.textContent = funcionariosEmpresa.length;
    totalAtivos.textContent = ativos;
    totalInativos.textContent = funcionariosEmpresa.length - ativos;
}

function mostrarMensagem(texto, tipo) {
    mensagem.innerHTML = `
        <div class="alert alert-${tipo}">
            ${texto}
        </div>
    `;
}

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const idade = Number(document.getElementById("idade").value);
    const salario = Number(document.getElementById("salario").value);
    const cargo = document.getElementById("cargo").value;
    const status = document.getElementById("status").value === "true";

    try {
        const funcionario = criarFuncionario(
            nome,
            idade,
            salario,
            status,
            cargo
        );

        funcionariosEmpresa.push(funcionario);

        atualizarTabela();
        atualizarResumo();

        mostrarMensagem(
            "Funcionário cadastrado com sucesso!",
            "success"
        );

        formulario.reset();
    } catch (erro) {
        mostrarMensagem(erro.message, "danger");
    }
});