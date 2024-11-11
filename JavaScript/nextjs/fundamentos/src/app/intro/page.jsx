import Layout from "@/components/Layout"

export default function Intro() {
    const titulo = <h1>JSX é muito maluco... Adorei</h1>
    function subtitulo() {
        return <h2>E muito poderoso</h2>
    }

    return (
        <Layout titulo="Entendendo o JSX">
            <div>
                {titulo}
                {subtitulo()}
            </div>
        </Layout>
    )
}