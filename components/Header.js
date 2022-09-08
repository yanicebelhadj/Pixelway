import React from 'react';
import Link from 'next/link';

import styles from '../styles/Header.module.css';
import Logo from '../icons/Logo';


const Header = ({ openModal }) =>{

    return(
        <div className={styles.Header}>
            <Link href="/"><a><Logo/></a></Link>
            <nav>
                <ul>
                    {/* <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Services">Services</Link>
                    </li>
                    <li>
                        <Link to="/Realisations">Réalisations</Link>
                    </li>
                    <li>
                        <Link to="/Blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/AboutUs">À propos de nous</Link>
                    </li> */}
                    <li>
                        <button onClick={() => openModal(true)} >Je crée mon site</button>
                    </li>
                </ul>
            </nav> 
        </div>
    )
    
}

export default Header