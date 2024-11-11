import Link from 'next/link'
import styles from '../components/style.module.css'

export default function Layout(props) {
    return (
        <div className={styles.layout}>
            <div className={styles.cabecalho}>
                <h1>{props.titulo ?? 'Módulo'}</h1>
                <Link href="/">Voltar</Link>
            </div>
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
    )
}