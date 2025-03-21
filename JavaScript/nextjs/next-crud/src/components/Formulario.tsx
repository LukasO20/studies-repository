import { useState } from "react";
import Entrada from "./Entrada";
import Cliente from "../core/Cliente";
import Botao from "./Botao";

interface FormularioProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void
}

export default function Formulario (props: FormularioProps) {
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)
    return (
        <div>
            {id ? (
                <Entrada 
                    somenteLeitura
                    texto="Código"
                    valor={id}
                /> 
            ) : false}
           <Entrada texto="Nome" valor={nome} valorChange={setNome} className="mb-4"/> 
           <Entrada texto="Idade" tipo="number" valor={idade} valorChange={setIdade} className="mb-4"/> 
           <div className="flex justify-end gap-2 mt-5">
                <Botao cor="blue" onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                    
                <Botao cor="blue" onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}