import React from 'react';

import Logo from '../icons/Logo';

import LinkedIn from '../icons/LinkedIn';
import Dribbble from '../icons/Dribbble';
import Instagram from '../icons/Instagram';

import styles from '../styles/Footer.module.css';


const Footer = () =>{

    return(
        <div className={styles.Footer}>
            <footer>
                    <div className={styles.Logo}>
                    <Logo />
                    </div>

                    <div className={styles.contacts}>
                        <p id={styles.mail}>contact@pixelway.fr</p>
                        <p id={styles.tel}>+33 7 81 70 42 20</p>
                    </div>

                    <div className={styles.reseaux}>
                        <LinkedIn />
                        <Dribbble />
                        <Instagram />
                    </div>

                    <div className={styles.documentsJuridiques}>
                        <p>Mentions légales</p>
                        <p>Politique cookies</p>
                    </div>
            </footer>
        </div>
    )
    
}

export default Footer