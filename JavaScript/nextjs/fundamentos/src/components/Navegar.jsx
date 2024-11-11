import Link from 'next/link'
import styles from '../components/navegar.module.css'

export default function Navegar(props) {
    return (
        <Link href={props.destino}>
            <div className={styles.navegar} style={{backgroundColor: props.cor}}>
                {props.titulo}
            </div>
        </Link>
    )
}