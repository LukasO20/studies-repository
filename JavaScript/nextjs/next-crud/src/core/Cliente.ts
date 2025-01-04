export default class Cliente {
    nome: string
    idade: number
    id: string | null

    constructor(nome: string, idade: number, id: string | null = null) {
        this.nome = nome
        this.idade = idade
        this.id = id
    }

    static vazio() {
        return new Cliente('', 0)
    }
    
    get nomeCliente() {
        return this.nome
    }

    get idadeCliente() {
        return this.idade
    }
    
    get idClient() {
        return this.id
    }

    toPlainObject() {
        return {
            nome: this.nome,
            idade: this.idade,
            id: this.id
        }
    }
}