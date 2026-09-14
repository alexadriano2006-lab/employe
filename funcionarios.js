class Funcionarios {

    constructor( nome, idade, valorSalario, status ){

        this.nome = nome
        this.idade = idade
        this.salario = valorSalario
        this.status = status
    }

    get salario() {

        return this._salario
    }


    

    set salario(valorSalario) {

        if(valorSalario <= 0 ){

        throw new Error ('Erro ao cadastrar funcionario')
        }

        this._salario = valorSalario 
    }

    informacoesDoFuncionario(){

        console.log(`Idade: ${this.idade}`)
        console.log(`salario: ${this.salario}`)
        console.log(`status: ${this.status}`)
        
    }
}

class Desenvolvedor extends Funcionarios {

    constructor( nome, idade, valorSalario, status ){

        super( nome, idade, valorSalario, status )
    }

    apresentar(){

        console.log(`meu nome e ${this.nome} e trabalho como Desenvolvedor `)
        super.informacoesDoFuncionario()
    }

    progamar(){
    return `Progamar`
    }
}

class Suporte extends Funcionarios {

    constructor( nome, idade, valorSalario, status ){

        super( nome, idade, valorSalario, status  )
    }

    apresentar(){

    
        console.log(`meu nome e ${this.nome} e trabalho como Suporte `)
        super.informacoesDoFuncionario()
    }

    atenderChamado() {
        return `Atender chamados`
    }
}

class Gerente extends Funcionarios {

    constructor( nome, idade, valorSalario, status ){

        super( nome, idade, valorSalario, status )
    }

    apresentar(){

        console.log(`meu nome e ${this.nome} e trabalho como Gerente `)
        super.informacoesDoFuncionario()
    }

    marcarReunioes(){
        return `Marcar reunioes`
    }


}

try{

const desenvolvedor = new Desenvolvedor

("Alex",
20, 
0, 
true);

console.log(desenvolvedor);



const suporte = new Suporte

("Marcio",
 25, 
 4000, 
 true);

console.log(suporte);


const gerente = new Gerente(
 "Marcelo",
  33,
  12000,
  true)

console.log(gerente)



let funcionariosEmpresa = [desenvolvedor, suporte, gerente]

for (let i = 0; i < funcionariosEmpresa.length; i++) {
    funcionariosEmpresa[i].apresentar();
} }catch( erro ){
    console.log(erro.message)
}

