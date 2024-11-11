"use client"
import Layout from '@/components/Layout'
import React, { useState } from 'react'

export default function Integracao() {
    const [codigo, setCodigo] = useState(1)
    const [cliente, setClient] = useState({})
    
    async function getCliente() {
        //Assincrona
        const resp = await fetch(`http://localhost:3000/api/clients/${codigo}`)
        const dados = await resp.json()
        setClient(dados)

        //Sincrona
        // fetch(`http://localhost:3000/api/clients/${codigo}`)
        //     .then(resp => resp.json())
        //     .then(dados => setClient(dados))
    }

    return (
        <Layout titulo='Integração API #01'>
            <div>
                <input type="number" value={codigo}
                    onChange={e => setCodigo(e.target.value)}/>
                <button onClick={getCliente}>Obter Cliente</button>
            </div>
            <ul>
                <li>Title: {cliente.title}</li>
                <li>Nome: {cliente.nome}</li>
                <li>Email: {cliente.email}</li>
            </ul>
        </Layout>
    )
}