import Cliente from './Cliente';

export default interface ClienteRepositorio {
    salvar(cliente: Cliente): Promise<Cliente>
    excluir(cliente: Cliente): Promise<void>
    obterDados(): Promise<Cliente[]>
}