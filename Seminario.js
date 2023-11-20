// Definição da classe Pessoa
class Pessoa{
    _registro = 0
    // Construtor da classe Pessoa
    constructor (nome, idade,materia){
        // Atributos da classe Pessoa
        this.nome = nome;
        this.idade = idade;
        this.materia = materia;
    }
    // Método para definir o registro
    setarRegistro (novoRegistro){
        // Verifica se o novo registro é do tipo number
        if (typeof novoRegistro == "number") {
            this.registro = novoRegistro
        } 
    }

    // Método getter para obter o registro
    get registro(){
        return this._registro
    }

    // Método setter para definir o registro
    set registro (x){
        // Verifica se o registro passado é do tipo number
        if (typeof x == "number"){
            this._registro = x
        }
    }
}

// Definição da classe Aluno, que herda de Pessoa
class Aluno extends Pessoa{
    // Construtor da classe Aluno
    constructor (nome, idade, materia, id){
        // Chama o construtor da classe pai (Pessoa)
        super (nome, idade, materia)
        // Atributos específicos da classe Aluno
        this.id = id
    }

    // Método para emitir aviso
    aviso () {
        alert (`${this.nome} Voce entrou na seleção de cursos por favor selecione o curso desejado `)
    }

    // Método para emitir aviso chamando o aviso da classe pai
    aviso2 (){
        super.aviso ()
    }
}

// Criação de instâncias das classes Aluno
let p1 = new Aluno ("Andrade", 13, "profissionalizante", 1843623882)
let p2 = new Aluno ("Luiz", 17, "informatica", 8367382921)
let p3 = new Aluno ("Roberto", 15, "farmacologia", 9372914861)
let p4 = new Aluno ("Joaõ", 21, "radiologia", 2018305072)
let p5 = new Aluno ("Marcelo", 19, "enfermagem", 6271917393)

// Definindo registros para os alunos
p1.registro = 43048823
p2.registro = 34916304
p3.registro = 71553816
p4.registro = 41223731
p5.registro = 82242943

// Chamadas de métodos de aviso
p1.aviso()
p1.aviso()

// Exibição de informações dos alunos
console.log(`nome ${p1.nome} idade ${p1.idade} materia escolhida ${p1.materia} id da matricula ${p1.id} numero de registro ${p1.registro}`)
console.log(`nome ${p2.nome} idade ${p2.idade} materia escolhida ${p2.materia} id da matricula ${p2.id} numero de registro ${p2.registro}`)
console.log(`nome ${p3.nome} idade ${p3.idade} materia escolhida ${p3.materia} id da matricula ${p3.id} numero de registro ${p3.registro}`)
console.log(`nome ${p4.nome} idade ${p4.idade} materia escolhida ${p4.materia} id da matricula ${p4.id} numero de registro ${p4.registro}`)
console.log(`nome ${p5.nome} idade ${p5.idade} materia escolhida ${p5.materia} id da matricula ${p5.id} numero de registro ${p5.registro}`)

// Função de divisão com bloco try-catch-finally
function divisao(a, b) {
    try {
        // Verifica se o denominador é zero antes de realizar a divisão
        if (b == 0) {
            throw new Error ("Nao e permitido dividir por zero.");
        }
        // Realiza a divisão e retorna o resultado
        const resultado = a / b;
        return resultado;
    } 
    catch (erro) {
        // Captura e trata a exceção, exibindo a mensagem de erro
        console.log("ocorreu um errro:" + erro.message);
    }
    finally {
        // Bloco que é sempre executado, independentemente de exceções
        console.log ("Bloco finally sempre e executado, independentemente");
    }
}

// Chamadas da função de divisão
console.log(divisao(10, 2));
console.log(divisao(0, 0));