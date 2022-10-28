import React, { useState } from "react";

import Image from 'next/image'

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import MacbookAnimation from '../components/MacbookAnimation.js'
import Modal from './contact.js'

// import required modules
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import LoaderCircle from "../icons/LoaderCircle.gif"
import shareArrowOutline from "../icons/share-arrow-outline.gif"

import FondBlancRealisations from "../media/FondBlancRealisations.png"
import FondBlancRealisations2 from "../media/FondBlancRealisations2.png"

import IntroRealisation1 from "../media/IntroRealisation1.png"
import IntroRealisation2 from "../media/IntroRealisation2.png"
import IntroRealisation3 from "../media/IntroRealisation3.png"
import eventailIntroRealisations from "../media/eventailIntroRealisations.png"

import Sport from "../media/Sport.png"
import SportActive from "../media/SportActive.gif"
import Juridique from "../media/Juridique.png"
import JuridiqueActive from "../media/JuridiqueActive.gif"
import Automobile from "../media/Automobile.png"
import AutomobileActive from "../media/AutomobileActive.gif"

import VroomlyDesktop from "../media/VroomlyDesktop.png"
import VroomlyMobile from "../media/VroomlyMobile.png"

import CaptainContratDesktop from "../media/CaptainContratDesktop.png"
import CaptainContratMobile from "../media/CaptainContratMobile.png"

import AsnieresVolleyDesktop from "../media/AsnieresVolleyDesktop.jpg"
import AsnieresVolleyMobile from "../media/AsnieresVolleyMobile.png"

import RectangleVert from "../media/RectangleVert.png"
import RectangleRouge from "../media/RectangleRouge.png"
import RectangleBleu from "../media/RectangleBleu.png"

import TelVert from "../media/TelVert.png"
import TelRouge from "../media/TelRouge.png"
import TelBleu from "../media/TelBleu.png"

import TelVertMobile from "../media/TelVertMobile.png"
import TelRougeMobile from "../media/TelRougeMobile.png"
import TelBleuMobile from "../media/TelBleuMobile.png"

import Swiper_Captain_Contrat from "../media/Swiper_Captain_Contrat.png"
import Swiper_Captain_Contrat2 from "../media/Swiper_Captain_Contrat2.png"
import Swiper_Landelpix from "../media/Swiper_Landelpix.png"
import Swiper_Vroomly from "../media/Swiper_Vroomly.png"
import Swiper_WorldMy from "../media/Swiper_WorldMy.png"
import Swiper_WorldMy2 from "../media/Swiper_WorldMy2.png"

import styles from '../styles/Realisations.module.css'

const Realisations = () =>{
    const[openModal, setOpenModal] = useState(false);

    const [sport, setSport] = useState(false);
    const [automobile, setAutomobile] = useState(false);
    const [juridique, setJuridique] = useState(true);

    const SportVisible = () => {
        setSport(true);
        setAutomobile(false);
        setJuridique(false);
    };

    const AutomobileVisible = () => {
        setSport(false);
        setAutomobile(true);
        setJuridique(false);
    };

    const JuridiqueVisible = () => {
        setSport(false);
        setAutomobile(false);
        setJuridique(true);
    };

    if (typeof window !== "undefined") {
        const sceneWrapper = document.getElementById("mainSection");

        // console.log(sceneWrapper.offsetHeight(à))
    }

    return(
        <div className={styles.realisations}>
            <div className={styles.containerSplashScreen}>
                <div className={styles.containerh1}>
                    <h1>Votre <span className={styles.marker}>site web</span> sur mesure</h1>
                </div>
                
                <div className={styles.containerImage}>
                <Image src={LoaderCircle} alt="Loader-Circle" />
                </div>

                <div className={styles.blueBlock}></div>
            </div>

            <div className={styles.containerRealisations}>

                <Header openModal={setOpenModal} />

                <section id={styles.mainSection}>
                    <h1>Découvrez nos <br/><span>Réalisations</span> sur mesure</h1>
                    <div className={styles.description}><Image src={shareArrowOutline} alt="Indication regarder plus bas"/><p>Retrouvez nos réalisations web, entièrement réalisées à partir de zéro.</p></div>
                </section>

                <section id={styles.introRealisations}>
                    <p>
                        Tous nos sites web sont réalisés à partir de maquettes sur Figma conçues par <strong>notre Poduct Designer.</strong><br/><br/>

                        Notre développeur se charge de <strong>mettre en place votre site web</strong> avec les fonctionnalités nécessaires à votre développement. 
                        Tout est inspiré de <strong>votre marque et de vos utilisateurs</strong> pour que votre plateforme soit unique.               
                    </p>

                    <div className={styles.containerImage}>
                        <Image className={styles.IntroRealisation1} src={IntroRealisation1} alt="Réalisations 1"/>
                        <Image className={styles.IntroRealisation2} src={IntroRealisation2} alt="Réalisations 2"/>
                        <Image className={styles.IntroRealisation3} src={IntroRealisation3} alt="Réalisations 3"/>
                    </div>

                    <div className={styles.containerImageMobile}>
                        <Image src={eventailIntroRealisations} alt="eventailIntroRealisations" />
                    </div>

                </section>

                <section id={styles.realisationsMobile} style={{backgroundImage: `url(${FondBlancRealisations2.src})`,backgroundPosition: "60% 0rem" ,backgroundRepeat:"no-repeat" }}>
                    <div className={styles.categories}>

                        <div className={styles.category} onClick={SportVisible}>
                            {sport ? <Image src={SportActive} alt="Sport" /> : <Image src={Sport} alt="Sport" />}
                            <p className={`${sport ? styles.activeCategory :null}`}>Sport</p>
                        </div>

                        <div className={styles.category} onClick={JuridiqueVisible}>
                            {juridique ? <Image src={JuridiqueActive} alt="Juridique" /> : <Image src={Juridique} alt="Juridique" />}
                            <p className={`${juridique ? styles.activeCategory :null}`}>Juridique</p>
                        </div>

                        <div className={styles.category} onClick={AutomobileVisible}>
                            {automobile ? <Image src={AutomobileActive} alt="Automobile" /> : <Image src={Automobile} alt="Automobile" />}
                            <p className={`${automobile ? styles.activeCategory :null}`}>Automobile</p>
                        </div>

                    </div>

                    <div className={styles.containerPhone}>
                        
                        {
                            sport ?
                            <Image src={AsnieresVolleyMobile} alt="Asnieres Volley" /> : 
                            juridique ?
                            <Image src={CaptainContratMobile} alt="Captain Contrat" /> : 
                            <Image src={VroomlyMobile} alt="Vroomly" />}

                    </div>

                    <div className={styles.textAreaMobile}>
                        {
                            sport ?
                            <div className={styles.asnieresVolleyText}>
                                <h2 className={styles.h2AsnieresVolley}>Asnières Volley</h2>
                                <p>
                                    Le site web du club de volley ball d&apos;Asnières-sur-Seine permet à l&apos;association de <span className={styles.markerAsnieresVolley}>présenter</span> leurs informations 
                                    (histoire du club, membre des équipes, entraineurs, tarifs, horaires d&apos;entrainements, ...).<br/><br/>

                                    Le contenu est <span className={styles.markerAsnieresVolley}>modifiable</span> par les membres de l&apos;association. Le développement d&apos;une 
                                    API permettant de <span className={styles.markerAsnieresVolley}>scrapper</span> les informations de la fédération nationale de volley 
                                    ball a été faite pour que les scores ainsi que les matchs à venir soient visible depuis le site.
                                </p>
                            </div> : 
                            juridique ?
                            <div className={styles.captainContratText}>
                                <h2 className={styles.h2CaptainContrat}>Captain Contrat</h2>
                                <p>
                                    Captain contrat <span className={styles.markerCaptainContrat}>accompagne</span> les entrepreneurs dans toutes 
                                    les démarches juridiques de la vie d&apos;une entreprise. <br/><br/>

                                    Cela permet de réaliser toutes les démarches <span className={styles.markerCaptainContrat}>100% en ligne</span> avec un espace client, 
                                    où des juristes et avocats dédiés pourront réaliser toutes les démarches juridiques du client.
                                </p>
                            </div> : 
                            <div className={styles.vroomlyText}>
                                <h2 className={styles.h2Vroomly}>Vroomly</h2>
                                <p>
                                    Vroomly est une plateforme de mise en relation entre clients et garagistes. Les utilisateurs peuvent s&apos;y rendre pour comparer les 
                                    garages en termes de <span className={styles.markerVroomly}>prix</span> et de <span className={styles.markerVroomly}>distance</span>. 
                                    Ils pourront ensuite vérifier la réputation de ce garage pour finalement choisir un créneau et prendre rendez-vous.<br/><br/>

                                    En plus de cette partie <span className={styles.markerVroomly}>BtoC</span>, Vroomly fournit les pièces pour le garage et des interfaces <span className={styles.markerVroomly}>BtoB</span> sont aussi présentes sur cette plateforme.
                                </p>
                            </div>
                        }

                        

                    </div>
                </section>
                
                <section id={styles.realisations} style={{backgroundImage: `url(${FondBlancRealisations.src})`,backgroundPosition: "70% 5rem", backgroundRepeat:"no-repeat" }}>
               
                    <div className={styles.realisation}>
                        <div className={styles.visualRealisation}>
                            <div className={styles.formatDesktop}>
                                <Image src={VroomlyDesktop} alt="Vroomly" />
                            </div>
                            <div className={styles.formatMobile}>
                                <Image src={VroomlyMobile} alt="Vroomly" />
                            </div>
                        </div>
                        <div className={styles.textArea}>
                            <h2 className={styles.h2Vroomly}>Vroomly</h2>
                            <p>
                                Vroomly est une plateforme de mise en relation entre clients et garagistes. Les utilisateurs peuvent s&apos;y rendre pour comparer les 
                                garages en termes de <span className={styles.markerVroomly}>prix</span> et de <span className={styles.markerVroomly}>distance</span>. 
                                Ils pourront ensuite vérifier la réputation de ce garage pour finalement choisir un créneau et prendre rendez-vous.<br/><br/>

                                En plus de cette partie <span className={styles.markerVroomly}>BtoC</span>, Vroomly fournit les pièces pour le garage et des interfaces
                                <span className={styles.markerVroomly}> BtoB</span> sont aussi présentes sur cette plateforme.
                            </p>
                        </div>
                    </div>

                    <div className={styles.realisation}>
                        <div className={styles.textArea}>
                            <h2 className={styles.h2AsnieresVolley}>Asnières Volley</h2>
                            <p>
                                Le site web du club de volley-ball d&apos;Asnières-sur-Seine permet à l&apos;association de <span className={styles.markerAsnieresVolley}>présenter</span> leurs 
                                informations (histoire du club, membre des équipes, entraîneur, tarifs, horaires d&apos;entraînements, ...).<br/><br/>

                                Le contenu est <span className={styles.markerAsnieresVolley}>modifiable</span> par les membres de l&apos;association. Le développement d&apos;une API permettant 
                                de <span className={styles.markerAsnieresVolley}>scrapper</span> les informations de la fédération nationale de volley-ball a été pour que les scores 
                                ainsi que les matchs à venir soient depuis le site.
                            </p>
                        </div>

                        <div className={styles.visualRealisation}>
                            <div className={styles.formatDesktop}>
                                <Image src={AsnieresVolleyDesktop} alt="Asnieres Volley" />
                            </div>
                            <div className={styles.formatMobile}>
                                <Image src={AsnieresVolleyMobile} alt="Asnieres Volley" />
                            </div>
                        </div>
                    </div>

                    <div className={styles.realisation}>
                        <div className={styles.visualRealisation}>
                            <div className={styles.formatDesktop}>
                                <Image src={CaptainContratDesktop} alt="Captain Contrat" />
                            </div>
                            <div className={styles.formatMobile}>
                                <Image src={CaptainContratMobile} alt="Captain Contrat" />
                            </div>
                        </div>
                        <div className={styles.textArea}>
                            <h2 className={styles.h2CaptainContrat}>Captain Contrat</h2>
                            <p>
                                Captain contrat <span className={styles.markerCaptainContrat}>accompagne</span> les entrepreneurs dans toutes 
                                les démarches juridiques de la vie d&apos;une entreprise. <br/><br/>

                                Cela permet de réaliser toutes les démarches <span className={styles.markerCaptainContrat}>100% en ligne</span> avec un espace client, 
                                où des juristes et avocats dédiés pourront réaliser toutes les démarches juridiques du client.
                            </p>
                        </div>
                    </div>

                </section>

                <section id={styles.autresRealisations} style={{backgroundImage: `url(${FondBlancRealisations2.src})`, backgroundSize:"100% 100%;", backgroundPositionY: "0rem", backgroundRepeat:"no-repeat" }}>
                    
                    <h2>AUTRES <span>RÉALISATIONS</span></h2>
                    
                    <div className={styles.introMobile}>

                        <div className={styles.containerTel}>
                            <Image src={RectangleVert} alt='Rectangle Vert' />
                            <Image src={TelVert} alt='Tel Vert' />
                        </div>

                        <div className={styles.containerTel}>
                            <Image src={RectangleRouge} alt='Rectangle Rouge' />
                            <Image src={TelRouge} alt='Tel Rouge' />
                        </div>

                        <div className={styles.containerTel}>
                            <Image src={RectangleBleu} alt='Rectangle Bleu' />
                            <Image src={TelBleu} alt='Tel Bleu' />
                        </div>
                    </div>

                    <div className={styles.containerIntroMobile_Mobile} >
                        <div className={styles.introMobile_Mobile}>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            pagination={{
                            clickable: true,
                            }}
                            navigation={false}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide style={{display:"flex", justifyContent:"center"}}>
                                <Image src={TelVertMobile} alt="TelVertMobile" />
                            </SwiperSlide>

                            <SwiperSlide style={{display:"flex", justifyContent:"center"}}>
                                <Image src={TelRougeMobile} alt="TelRougeMobile" />
                            </SwiperSlide>

                            <SwiperSlide style={{display:"flex", justifyContent:"center"}}>
                                <Image src={TelBleuMobile} alt="TelBleuMobile" />
                            </SwiperSlide>

                            
                        </Swiper>

                            {/* <div className={styles.containerImage}>
                                <Image src={TelVertMobile} alt="TelVertMobile" />
                            </div>

                            <div className={styles.containerImage}>
                                <Image src={TelRougeMobile} alt="TelRougeMobile" />
                            </div>

                            <div className={styles.containerImage}>
                                <Image src={TelBleuMobile} alt="TelBleuMobile" />
                            </div>               */}
                        </div>
                    </div>

                    {/* <div className={styles.containerMacbook}>
                        <div className={styles.macbook}>
                            <Image src={MacbookSiteRudolph} alt='Réalisation pour Tuyau Flexibles Rudolph' />
                        </div>
                    </div> */}

                    <MacbookAnimation />

                    <div className={styles.containerCarouselRealisations}>

                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            pagination={{
                            clickable: true,
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide style={{display:"flex", justifyContent:"center"}}>
                                <Image src={Swiper_Captain_Contrat} alt="Swiper_Captain_Contrat" />
                            </SwiperSlide>
                            
                            <SwiperSlide style={{display:"flex", justifyContent:"center"}}>
                                <Image src={Swiper_Captain_Contrat2} alt="Swiper_Captain_Contrat" />
                            </SwiperSlide>
                            
                            <SwiperSlide style={{display:"flex", justifyContent:"center"}}>
                                <Image src={Swiper_Landelpix} alt="Swiper_Landelpix" />
                            </SwiperSlide>
                            
                            <SwiperSlide style={{display:"flex", justifyContent:"center"}}>
                                <Image src={Swiper_Vroomly} alt="Swiper_Vroomly" />
                            </SwiperSlide>

                            <SwiperSlide style={{display:"flex", justifyContent:"center"}}>
                                <Image src={Swiper_WorldMy} alt="Swiper_WorldMy" />
                            </SwiperSlide>
                            
                            <SwiperSlide style={{display:"flex", justifyContent:"center"}}>
                                <Image src={Swiper_WorldMy2} alt="Swiper_WorldMy" />
                            </SwiperSlide>
                        </Swiper>
  
                    </div>

                    <div className={styles.containerCarouselRealisationsMobile}>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            pagination={{
                            clickable: true,
                            }}
                            navigation={false}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide style={{display:"flex", justifyContent:"center"}}>
                                <Image src={Swiper_Captain_Contrat} alt="Swiper_Captain_Contrat" />
                            </SwiperSlide>

                            <SwiperSlide style={{display:"flex", justifyContent:"center"}}>
                                <Image src={Swiper_Captain_Contrat2} alt="Swiper_Captain_Contrat" />
                            </SwiperSlide>

                            <SwiperSlide style={{display:"flex", justifyContent:"center"}}>
                                <Image src={Swiper_Landelpix} alt="Swiper_Landelpix" />
                            </SwiperSlide>

                            <SwiperSlide style={{display:"flex", justifyContent:"center"}}>
                                <Image src={Swiper_Vroomly} alt="Swiper_Vroomly" />
                            </SwiperSlide>

                            <SwiperSlide style={{display:"flex", justifyContent:"center"}}>
                                <Image src={Swiper_WorldMy} alt="Swiper_WorldMy" />
                            </SwiperSlide>

                            <SwiperSlide style={{display:"flex", justifyContent:"center"}}>
                                <Image src={Swiper_WorldMy2} alt="Swiper_WorldMy" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    
                </section>

                {openModal && <Modal openModal={setOpenModal} />} 
                
                <Footer />
            </div>
        </div>
    ) 
}

export default Realisations