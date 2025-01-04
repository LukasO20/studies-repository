interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
}

export default function Botao(props: BotaoProps) {
    const cor = props.cor ?? 'blue'
    return (
        <button className={`
            bg-${cor}-400 py-2 px-5 mx-0 my-2 rounded-3xl text-white
        `}>
            {props.children}
        </button>
    )
}