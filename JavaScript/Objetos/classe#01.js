class Lancamento {
    constructor(nome = 'Sem_nome', valor = 0){
        this.nome = nome,
        this.valor = valor
    }
}

class CicloFinanceiro{
    constructor(mes, ano){
        this.mes = mes,
        this.ano = ano
        this.Lancamento = []
    }

    addLancamento(...Lancamento){
        Lancamento.forEach( l => this.Lancamento.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.Lancamento.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 6500)
const conta_luz = new Lancamento('Luz', -164)
const conta_agua = new Lancamento('Água', -57)

const contas = new CicloFinanceiro(6, 2023)
contas.addLancamento(salario, conta_luz, conta_agua)
console.log(contas.sumario())