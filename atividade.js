class Horarios {
    constructor(data, entrada, almoco, saida) {
        this.data = data;           // Data do ponto
        this.entrada = entrada;    // Hora de entrada
        this.almoco = almoco;      // Hora de almoço
        this.saida = saida;        // Hora de saída
    }

    toString() {
        return `Data: ${this.data}, Entrada: ${this.entrada}, Almoço: ${this.almoco}, Saída: ${this.saida}`;
    }
}

class Atividades {
    constructor(atividade, tempo) {
        this.atividade = atividade; // Nome da atividade
        this.tempo = tempo;        // Tempo gasto na atividade
    }

    toString() {
        return `Atividade: ${this.atividade}, Tempo: ${this.tempo}`;
    }
}

class Funcionario {
    constructor(id, cargo, nome) {
        this.id = id;                 // ID do funcionário
        this.cargo = cargo;           // Cargo do funcionário
        this.nome = nome;             // Nome do funcionário
        this.pontos = [];             // Lista de horários
        this.atividades = [];        // Lista de atividades
    }

    adicionarPonto(ponto) {
        this.pontos.push(ponto);
    }

    adicionarAtividade(atividade) {
        this.atividades.push(atividade);
    }
}

class Cadastro {
    constructor() {
        this.funcionarios = new Map(); // Armazena funcionários com ID como chave
    }

    adicionarFuncionario(funcionario) {
        this.funcionarios.set(funcionario.id, funcionario);
    }

    obterFuncionario(id) {
        return this.funcionarios.get(id);
    }

    registrarPonto(id, ponto) {
        const funcionario = this.funcionarios.get(id);
        if (funcionario) {
            funcionario.adicionarPonto(ponto);
        } else {
            console.log(`Funcionário com ID ${id} não encontrado.`);
        }
    }

    registrarAtividade(id, atividade) {
        const funcionario = this.funcionarios.get(id);
        if (funcionario) {
            funcionario.adicionarAtividade(atividade);
        } else {
            console.log(`Funcionário com ID ${id} não encontrado.`);
        }
    }
    
    obterPontos(id) {
        const funcionario = this.funcionarios.get(id);
        if (funcionario) {
            return funcionario.pontos;
        } else {
            console.log(`Funcionário com ID ${id} não encontrado.`);
            return [];
        }
    }

    obterAtividades(id) {
        const funcionario = this.funcionarios.get(id);
        if (funcionario) {
            return funcionario.atividades;
        } else {
            console.log(`Funcionário com ID ${id} não encontrado.`);
            return [];
        }
    }
}

// Exemplo de uso
const cadastro = new Cadastro();
const funcionario1 = new Funcionario(1, "Professor", "Edvaldo");
cadastro.adicionarFuncionario(funcionario1);

const ponto1 = new Horarios("2024-09-10", "08:00", "12:00-13:00", "17:00");
const atividade1 = new Atividades("Aula", "8 horas");

cadastro.registrarPonto(1, ponto1);
cadastro.registrarAtividade(1, atividade1);


console.log(cadastro.obterPontos(1).map(ponto => ponto.toString()).join('\n') + "  " + cadastro.obterAtividades(1).map(atividade => atividade.toString()).join('\n'));
console.log(funcionario1)
