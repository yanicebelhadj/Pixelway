import React from 'react';

import styles from '../styles/Modal.module.css';

const Check = () =>{

    return(
        <div className={styles.Check} style={{display: "flex", alignItems: "flex-start", marginTop: "4px"}}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M19.7071 6.29289C20.0976 6.68342 20.0976 7.31658 19.7071 7.70711L11.4142 17.41C10.6332 18.191 9.36684 18.191 8.58579 17.41L4.29289 11.7071C3.90237 11.3166 3.90237 10.6834 4.29289 10.2929C4.68342 9.90237 5.31658 9.90237 5.70711 10.2929L10 16L18.2929 6.29289C18.6834 5.90237 19.3166 5.90237 19.7071 6.29289Z" fill="#3170F7"/>
            </svg>
        </div>
    )
    
}

export default Check