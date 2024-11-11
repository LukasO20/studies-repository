import styles from './estiloso.module.css'
import Layout from '../../components/Layout'

export default function Estiloso() {
    return  (
        <Layout titulo="Exemplo de CSS Moduralizado">
            <div className={styles.bluesteel}>
                <h1>Estilo usando css módulos</h1>
            </div>
        </Layout>
    )    
}