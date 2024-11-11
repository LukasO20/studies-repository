import Navegar from '@/components/Navegar'

export default function Inicio() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            height: '100vh',
            alignItems: 'center',
            flexWrap: 'wrap'
        }}>
            <Navegar destino="/estiloso" titulo="Estiloso" cor="#1e90ff"/>
            <Navegar destino="/exemplo" titulo="Exemplo" cor="#d17d00"/>
            <Navegar destino="/intro" titulo="Intro" cor="#131313"/>
            <Navegar destino="/navegacao" titulo="Navegação 01" cor="#008000"/>
            <Navegar destino="/cliente" titulo="Navegação 02" cor="#002000"/>
            <Navegar destino="/estado" titulo="Componente com estado" cor="#024589"/>
            <Navegar destino="/integracao_1" titulo="Integração API #01" cor="#154546" />
            <Navegar destino="/estatico" titulo="Conteúdo estático" cor="#729526" />
        </div>
    )
}