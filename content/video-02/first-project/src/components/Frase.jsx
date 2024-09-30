import styles from './Frase.module.css'
import {FaFacebook} from 'react-icons/fa'

function Frase() {
    return (
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>Este é um componente com uma frase! Emoji : <FaFacebook/> </p>
        </div>
    )
}

export default Frase