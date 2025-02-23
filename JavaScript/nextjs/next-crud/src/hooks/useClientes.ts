import ClienteRepositorio from "../core/ClienteRepositorio"
import ColecaoCliente from "@/src/api/db/ColecaoCliente"
import { useEffect, useState } from "react"
import Cliente from "../core/Cliente"
import useTabelaOuForm from "./useTabelaOuForm"

export default function useCliente() {
    const repo: ClienteRepositorio = new ColecaoCliente()

    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])
    const { tabelaVisivel, exibirTabela, exibirForm } = useTabelaOuForm()
    
    useEffect(loadClientes, [])
  
    function loadClientes() {
      repo.obterDados().then(clientes => {
        setClientes(clientes)
        exibirTabela()
      })
    }
  
    function selecionarCliente(cliente: Cliente) { 
      setCliente(cliente)
      exibirForm()
    }
  
    async function excluirCliente(cliente: Cliente) {
        await repo.excluir(cliente)
        loadClientes()
    }
  
    function novoCliente() {
      setCliente(Cliente.vazio())
      exibirForm()
    }
  
    async function salvarCliente (cliente: Cliente) {
      await repo.salvar(cliente)
      loadClientes()
    }

    return {
        cliente, 
        clientes,
        novoCliente,
        salvarCliente,
        excluirCliente,
        selecionarCliente,
        loadClientes,
        tabelaVisivel,
        exibirTabela
    }
}