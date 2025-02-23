"use client"

import Layout from "@/src/components/Layout"
import Tabela from "@/src/components/Tabela"
import Botao from "@/src/components/Botao"
import Formulario from "@/src/components/Formulario"
import useCliente from "@/src/hooks/useClientes"

export default function Home() {

  const {
    cliente,
    clientes, 
    novoCliente,
    salvarCliente, 
    excluirCliente,
    selecionarCliente,
    tabelaVisivel,
    exibirTabela
  } = useCliente()

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-400 to-blue-600
    `}>
      <Layout titulo="Cadastro Simples">
      {tabelaVisivel ? (
        <>
          <div className="flex justify-end">
            <Botao className="mb-4" onClick={novoCliente}>
              Novo Cliente
            </Botao>
          </div>
          <Tabela clientes={clientes} clienteSelecionado={selecionarCliente} clienteExcluido={excluirCliente}></Tabela>
        </>
      ) : (
        <Formulario cliente={cliente} clienteMudou={salvarCliente} cancelado={() => exibirTabela} />
      )}
      </Layout>
    </div>
  )
}