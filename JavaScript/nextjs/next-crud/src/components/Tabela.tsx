"use client"

import Cliente from "../core/Cliente"
import { IconeEdicao, IconeDeletar } from "../components/Icones"

interface TabelaProps {
    clientes: {nome: string; idade: number; id: string | null}[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps) {

    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

    const clientesInstanciados = props.clientes.map(
        (cliente) => new Cliente(cliente.nome, cliente.idade, cliente.id)
      )

    function renderDataHeader() {
        return (
            <tr>
                <th className='text-left p-4'>Código</th>
                <th className='text-left p-4'>Nome</th>
                <th className='text-left p-4'>Idade</th>
                {exibirAcoes ? <th className='text-center p-4'>Ações</th> : false}
            </tr>
        )
    }

    function renderDataBody() {
        return clientesInstanciados?.map((cliente, i) => {
            return (
                <tr key={cliente.id}
                    className={`${i % 2 === 0 ? 'bg-blue-200' : 'bg-blue-100'}`}>
                    <td className='text-left p-4'>{cliente.id}</td>
                    <td className='text-left p-4'>{cliente.nome}</td>
                    <td className='text-left p-4'>{cliente.idade}</td>
                    {exibirAcoes ? renderDataAction(cliente) : false}
                </tr>
            )
        })
    }

    function renderDataAction(cliente: Cliente) {
        return (
            <td className='flex justify-center'>
                {props.clienteSelecionado ? (
                    <button onClick={() => props.clienteSelecionado?.(cliente)} className={`
                        flex justify-center items-center
                        text-green-600 rounded-full p-2 m-1 cursor-pointer
                        hover:bg-green-700 hover:text-white   
                    `}>
                        {IconeEdicao}
                    </button>
                ) : false}
                {props.clienteExcluido ? (
                    <button onClick={() => props.clienteExcluido?.(cliente)} className={`
                        flex justify-center items-center
                        text-red-600 rounded-full p-2 m-1 cursor-pointer
                        hover:bg-red-700 hover:text-white    
                    `}>
                        {IconeDeletar}
                    </button>
                ) : false}
            </td>
        )
    }

    return (
        <table className='w-full rounded-xl overflow-hidden'>
            <thead className={`
                text-white
                bg-gradient-to-r from-blue-500 to-blue-600    
            `}>
                {renderDataHeader()}
            </thead>
            <tbody>
                {renderDataBody()}
            </tbody>
        </table>
    )
}