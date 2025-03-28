interface TituloProps {
    titulo?: string
    children: any
}

export default function Titulo(props: TituloProps) {
    return (
        <div className="flex flex-col justify-center">
            <h1 className="px-5 py-2 text-2xl">
                {props.children}
            </h1>
            <span className="border-1 bg-blue-400 p-0.5"></span>
        </div>
    )
}