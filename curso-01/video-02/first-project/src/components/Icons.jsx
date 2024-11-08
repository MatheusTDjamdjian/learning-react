import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"

import styles from './icons.module.css';

function Icons () {
    return (
        <>
        <ul className={styles.social_list}>
            <li><FaFacebook/></li>
            <li><FaInstagram/></li>
            <li><FaLinkedin/></li>
        </ul>
        <p>Teste de um rodapé</p>
        </>
    )
}

export default Icons