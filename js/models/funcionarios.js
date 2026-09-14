class Funcionarios {
    constructor(nome, idade, valorSalario, status) {
        this.nome = nome;
        this.idade = idade;
        this.salario = valorSalario;
        this.status = status;
    }

    get salario() {
        return this._salario;
    }

    set salario(valorSalario) {
        if (valorSalario <= 0) {
            throw new Error("O salário deve ser maior que zero");
        }

        this._salario = valorSalario;
    }

    informacoesDoFuncionario() {
        console.log(`Idade: ${this.idade}`);
        console.log(`Salário: ${this.salario}`);
        console.log(`Status: ${this.status}`);
    }
}

class Desenvolvedor extends Funcionarios {
    apresentar() {
        console.log(
            `Meu nome é ${this.nome} e trabalho como Desenvolvedor`
        );

        super.informacoesDoFuncionario();
    }

    programar() {
        return "Programar";
    }
}

class Suporte extends Funcionarios {
    apresentar() {
        console.log(
            `Meu nome é ${this.nome} e trabalho como Suporte`
        );

        super.informacoesDoFuncionario();
    }

    atenderChamado() {
        return "Atender chamados";
    }
}

class Gerente extends Funcionarios {
    apresentar() {
        console.log(
            `Meu nome é ${this.nome} e trabalho como Gerente`
        );

        super.informacoesDoFuncionario();
    }

    marcarReunioes() {
        return "Marcar reuniões";
    }
}


