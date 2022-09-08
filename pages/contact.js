import { useForm } from 'react-hook-form';
import { useState } from 'react';

import Image from 'next/image';
import Send from '../media/Send.png';
import Croix from '../icons/Croix'

import styles from '../styles/Modal.module.css';

function Contact({ openModal }){
     //Variables
     const { register, handleSubmit, reset, formState: { errors }} = useForm();

     //State
     const [isLoading, setIsLoading] = useState(false);
     const [isSended, setIsSended] = useState(false)
 
     //Méthodes
     const onSubmitHandler = async (data) => {
         if(!isLoading){
             setIsLoading(true);
 
             const response = await fetch('/api/contact',{
                 method: 'POST',
                 headers: {
                     "Content-Type": "application/json"
                 },
                 body: JSON.stringify(data)
             });
             
             const result = await response.json();
 
             setIsLoading(false);
     
             if(!response.ok) {
                 console.log("error");
             } else{
                 console.log("ok");
                 reset();
                 setIsSended(true);
             }
 
         }
     };


    return(
        <div className={styles.bgFormulaire} >
            <div className={styles.formulaire}>
                <div className={styles.Croix} onClick={() => openModal(false)} ><Croix /></div>
                <h2>Formulaire de contact</h2>
                
                <form onSubmit={handleSubmit(onSubmitHandler) }>
                    
                    <div className={styles.informationsPrimaireMessage}>

                        <div id={styles.informationsPrimaires}>
                            <div className={styles.champ}>
                                <label htmlFor="nom">Nom</label>
                                <input 
                                    className="input" 
                                    placeholder="Votre nom" 
                                    id="nom" 
                                    {...register('nom',{
                                        required:true
                                    })}
                                />
                                {errors.prenom && <small>Vous devez renseigner votre nom.</small>}
                            </div>
                            <div className={styles.champ}>
                                <label htmlFor="mail">Mail</label>
                                <input 
                                    className="input" 
                                    placeholder="Votre mail" 
                                    id="mail"
                                    {...register('mail',{
                                        required:true
                                    })}
                                />
                                {errors.prenom && <small>Vous devez renseigner votre mail.</small>}                    
                            </div>
                            <div className={styles.champ}>
                                <label htmlFor="telephone">Téléphone</label>
                                <input 
                                    className="input" 
                                    placeholder="Votre numéro de téléphone" 
                                    id="telephone"
                                    {...register('telephone',{
                                        required:true
                                    })}
                                />
                                {errors.prenom && <small>Vous devez renseigner votre téléphone.</small>}
                            </div>
                        </div>

                        <div id={styles.message} className={styles.champ}>
                            <label htmlFor="contenu" className="label">Message</label>
                            <textarea 
                                className="input" 
                                rows="9" 
                                placeholder="Votre message"
                                {...register('contenu',{
                                    required:true
                                })}
                            ></textarea>
                        </div>

                    </div>

                    {isSended && <p id={styles.sendedRequestMessage}>Votre message a bien été envoyé !</p>}

                    <div className={styles.sendButton}>
                        {!isLoading && <button><Image src={Send} alt="Envoyer message"/><p>Envoyer ma demande</p></button>}
                    </div>
                </form>

            </div>
        </div>
    ) 
}

export default Contact