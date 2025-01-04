"use client"

import Layout from "@/src/components/Layout"
import Cliente from "@/src/core/Cliente"
import Tabela from "@/src/components/Tabela"
import Botao from "@/src/components/Botao"

export default function Home() {

  const clientes = [
    new Cliente('Luana', 26, '1'),
    new Cliente('Marcelo', 44, '2'),
    new Cliente('Juan', 30, '3')
  ].map(cliente => cliente.toPlainObject())

  function clienteSelecionado(cliente: Cliente) { 

  }

  function clienteExcluido(cliente: Cliente) {

  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-400 to-blue-600
    `}>
      <Layout titulo="Cadastro Simples">
        <div className="flex justify-end">
          <Botao className="mb-4">
            Novo Cliente
          </Botao>
        </div>
        <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido}></Tabela>
      </Layout>
    </div>
  )
}