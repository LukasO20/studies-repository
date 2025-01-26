"use client"

import Layout from "@/src/components/Layout"
import Cliente from "@/src/core/Cliente"
import Tabela from "@/src/components/Tabela"
import Botao from "@/src/components/Botao"
import Formulario from "@/src/components/Formulario"
import { useEffect, useState } from "react"
import ClienteRepositorio from "@/src/core/ClienteRepositorio"
import ColecaoCliente from "@/src/api/db/ColecaoCliente"

export default function Home() {

  const repo: ClienteRepositorio = new ColecaoCliente()

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  useEffect(loadClientes, [])

  function loadClientes() {
    repo.obterDados().then(clientes => {
      setClientes(clientes)
      setVisivel('tabela')
    })
  }

  function clienteSelecionado(cliente: Cliente) { 
    setCliente(cliente)
    setVisivel('form')
  }

  function clienteExcluido(cliente: Cliente) {

  }

  function novoCliente() {
    setCliente(Cliente.vazio())
    setVisivel('form')
  }

  async function salvarCliente (cliente: Cliente) {
    await repo.salvar(cliente)
    loadClientes()
  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-400 to-blue-600
    `}>
      <Layout titulo="Cadastro Simples">
      {visivel === 'tabela' ? (
        <>
          <div className="flex justify-end">
            <Botao className="mb-4" onClick={novoCliente}>
              Novo Cliente
            </Botao>
          </div>
          <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido}></Tabela>
        </>
      ) : (
        <Formulario cliente={cliente} clienteMudou={salvarCliente} cancelado={() => setVisivel('tabela')} />
      )}
      </Layout>
    </div>
  )
}