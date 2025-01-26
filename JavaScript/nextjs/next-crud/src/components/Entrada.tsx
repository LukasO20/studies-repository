interface EntradaProps {
    tipo?: 'text' | 'number'
    texto: String
    valor: any
    somenteLeitura?: boolean
    className?: string
    valorChange?: (valor: any) => void
}

export default function Entrada (props: EntradaProps) {
    return (
        <div className={`flex flex-col ${props.className}`}>
            <label className={`
                p-1 text-gray-700
            `}>
                {props.texto}
            </label>
            <input 
                type={props.tipo ?? 'text'}
                value={props.valor}
                readOnly={props.somenteLeitura}
                onChange={e => props.valorChange?.(e.target.value)}
                className={`
                    border p-2 border-blue-400 rounded-lg 
                    focus:outline-none text-gray-700
                    ${props.somenteLeitura ? '' : 'focus:bg-gray-100'}
                `}
            />
        </div>
    )
}