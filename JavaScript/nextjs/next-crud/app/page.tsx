"use client"

import Layout from "@/src/components/Layout"
import Cliente from "@/src/core/Cliente"
import Tabela from "@/src/components/Tabela"
import Botao from "@/src/components/Botao"
import Formulario from "@/src/components/Formulario"
import { useState } from "react"

export default function Home() {

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  const clientes = [
    new Cliente('Luana', 26, '1'),
    new Cliente('Marcelo', 44, '2'),
    new Cliente('Juan', 30, '3')
  ].map(cliente => cliente.toPlainObject())

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

  function salvarCliente (cliente: Cliente) {
    console.log(cliente)
    setVisivel('tabela')
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