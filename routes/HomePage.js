import React, { useState } from 'react';

import '../css/HomePage.css';

import Macbook from "../media/macbook.png"
import CreationSiteWeb from "../media/creationSiteWeb.png"
import Eyes from "../media/eyes.png"
import Heart from "../media/heart.png"
import Hear from "../media/hear.png"
import PageWeb from "../media/pageWeb.png"
import Identite from "../media/identite.png"
import SurMesure from "../media/surMesure.png"
import Referencement from "../media/referencement.png"
import PourquoiSiteWeb from "../media/pourquoiSiteWeb.png"
import Diagnostique from "../media/diagnostique.png"
import UxRecherche from "../media/uxRecherche.png"
import DesignWeb from "../media/designWeb.png"
import Developpement from "../media/developpement.png"
import Formation from "../media/formation.png"
import Maintenance from "../media/maintenance.png"

import Check from "../icons/Check"
import ChevronRight from '../icons/ChevronRight';
import ChevronBottom from '../icons/ChevronBottom';
import Logo from '../icons/Logo';
import LinkedIn from '../icons/LinkedIn';
import Dribbble from '../icons/Dribbble';
import Instagram from '../icons/Instagram';

import Modal from '../pages/contact.js';
import Header from '../components/Header.js';


const HomePage = () =>{

    const[openModal, setOpenModal] = useState(false);

    const [diagnostique, setDiagnostique] = useState(true);
    const [uxRecherche, setUxRecherche] = useState(false);
    const [designWeb, setDesignWeb] = useState(false);
    const [developpement, setDeveloppement] = useState(false);
    const [formation, setFormation] = useState(false);
    const [maintenance, setMaintenance] = useState(false);

    const DiagnostiqueVisible = () => {
        if(diagnostique === false){
            setDiagnostique(true);
            setUxRecherche(false);
            setDesignWeb(false);
            setDeveloppement(false);
            setFormation(false);
            setMaintenance(false);
        }
    };

    const UxRechercheVisible = () => {
        if(uxRecherche === false){
            setDiagnostique(false);
            setUxRecherche(true);
            setDesignWeb(false);
            setDeveloppement(false);
            setFormation(false);
            setMaintenance(false);
        }
    };

    const DesignWebVisible = () => {
        if(designWeb === false){
            setDiagnostique(false);
            setUxRecherche(false);
            setDesignWeb(true);
            setDeveloppement(false);
            setFormation(false);
            setMaintenance(false);
        }
    };

    const DeveloppementVisible = () => {
        if(developpement === false){
            setDiagnostique(false);
            setUxRecherche(false);
            setDesignWeb(false);
            setDeveloppement(true);
            setFormation(false);
            setMaintenance(false);
        }
    };

    const FormationVisible = () => {
        if(formation === false){
            setDiagnostique(false);
            setUxRecherche(false);
            setDesignWeb(false);
            setDeveloppement(false);
            setFormation(true);
            setMaintenance(false);
        }
    };

    const MaintenanceVisible = () => {
        if(maintenance === false){
            setDiagnostique(false);
            setUxRecherche(false);
            setDesignWeb(false);
            setDeveloppement(false);
            setFormation(false);
            setMaintenance(true);
        }
    };

    return(
        <>
            <Header openModal={setOpenModal} />

            <div className="homePage">
                
                <section id="mainSection">

                    <div className='mainSectionTextCta'>
                        <div className='mainSectionText'>
                            <h1>Et si vos clients vous retrouvaient sur <span style={{color:"#3170F7"}}>votre site web</span></h1>
                            <p className='description'>Démarquez vous en créant un site web professionnel qui vous ressemble.</p>
                            <ul>
                                <li><Check /><p>Augmenter votre <strong>visibilité</strong></p></li>
                                <li><Check /><p>Site <strong>100%</strong> personnalisé</p></li>
                                <li><Check /><p>Identité visuelle <strong>unique</strong></p></li>
                            </ul>
                        </div>
                        <div className='mainSectionCta'>
                            <div className='creationSiteWeb'>
                                <button className='openModalBtn' onClick={() => {setOpenModal(true);}}>Je crée mon site web</button>
                                <p id="desktop">Faites votre devis gratuitement</p>
                            </div>
                            <a href="#services" id='enSavoirPlus'>En savoir plus</a>
                            <p id="mobile">Faites votre devis gratuitement</p>
                        </div>
                    </div>

                    <div className='mainSectionImage'>
                        <img src={Macbook} alt="Macbook"/>
                    </div>

                </section>

                <section id='accroche'>
                    <h2>Concentrez-vous sur votre business, pixelway s’occupe du reste</h2>
                    <div className='accrocheTextImage'>
                        <img src={CreationSiteWeb} alt="Creation Site Web" />
                        <div className='accrocheText'>
                            <h3>Choisissez Pixelway pour votre projet web</h3>
                            <ul>
                                <li><Check /><p>Pixelway est l’agence de création de site web qui vous fera vivre une experience utilisateur unique et sur-mesure.</p></li>
                                <li><Check /><p>Bénéficiez d’un accompagnement de A à Z avec notre équipe passionnée de challenge.</p></li>
                                <li><Check /><p>Concentrez-vous sur l’essentiel : le developpement de votre société. Confiez votre digital à des experts disponibles pour concevoir vos projets. </p></li>
                            </ul>
                        </div>

                    </div>

                </section>

                <section id='qualites'>
                    <h2>Les qualités de l’agence à choisir</h2>
                    <div className='listeQualites'>
                        <div className='qualite'>
                            <img src={Eyes} alt="Collaboratif"/>
                            <h3>Collaboratif</h3>
                            <p>
                                Nous optons pour un travail collaboratif tout au long du projet. 
                                Grâce à nos ateliers UX, vous serez au cœur des décisions pour 
                                que votre site se rapproche au mieux de votre marque
                            </p>
                        </div>

                        <div className='qualite'>
                            <img src={Hear} alt="A l'écoute"/>
                            <h3>À l’écoute</h3>
                            <p>
                                Nous savons prendre en compte vos envies tout en vous proposant des idées 
                                qui les rendront meilleures. Notre expertise en webdesign vous permettra 
                                d’avoir un résultat unique
                            </p>
                        </div>

                        <div className='qualite'>
                            <img src={Heart} alt="Transparent"/>
                            <h3>Transparant</h3>
                            <p>
                                Aucune surprise. Nous vous tiendrons informé de l’avancé de votre projet à 
                                chaque étape pour que vous puissiez intervenir à tout moment dans le process 
                                de création
                            </p>
                        </div>
                        
                    </div>
                </section>

                <section id='services'>

                    <h2>Nos services personnalisés</h2>
                    <div className='listeServices'>
                        <div className='service'>
                            <div className='titre'>
                                <img src={PageWeb} alt="Creation de site web/ Page Web/ Application web"/>
                                <h3>Création de site internet</h3>
                            </div>
                            <p>
                                Nous créons des sites web <strong>(web-app, site vitrine ou encore site e-commerce)</strong> 100% personnalisés. 
                                Nous proposons pour vous ainsi que pour vos clients des expériences innovantes et dans l’air du temps.  
                            </p>
                        </div>

                        <div className='service'>
                            <div className='titre'>
                                <img src={Identite} alt="Identite de marque"/>
                                <h3>Identité de marque</h3>
                            </div>
                            <p>
                                Confiez à Pixelway votre image de marque. Nos experts sont spécialisés en création d’identité visuelle et sauront 
                                vous proposer une <strong>charte graphique ainsi qu’un logo inspirés de votre marque</strong> comme point de départ.   
                            </p>
                        </div>

                        <div className='service'>
                            <div className='titre'>
                                <img src={SurMesure} alt=""Design web sur mesure/>
                                <h3>Design web sur mesure</h3>
                            </div>
                            <p>
                                Savez-vous qu’un webdesigner n’intervient pas seulement sur l’aspect esthétique, mais aussi et surtout sur l’ergonomie de 
                                votre site ? Nous sommes <strong>spécialisés en UX/ UI Design</strong> et toutes nos proposons sont dans l’air du temps.  
                            </p>
                        </div>

                        <div className='service'>
                            <div className='titre'>
                                <img src={Referencement} alt="Référencement naturel"/>
                                <h3>Référencement web</h3>
                            </div>
                            <p>
                                Nous donnerons à votre entreprise la visibilité qu'elle mérite à travers un référencement web naturel ou plus encore.
                                Cela permettra de <strong>rendre votre site plus attractif</strong> et donc de maximiser votre visibilité.   
                            </p>
                        </div>
                    </div>
                    
                </section>

                <section id='pourquoiSiteWeb'>
                    <h2>Pourquoi faut-il avoir un site web ? </h2>
                    <div className='pourquoiSiteWebTextImage'>
                        <img src={PourquoiSiteWeb} alt="Pourquoi un site Web" />
                        <div className='pourquoiSiteWebText'>
                            <h3>Boostez la croissance de votre entreprise</h3>
                            <p>
                                Votre site web est votre carte de visite en ligne. Il fera la présentation de votre entreprise, 
                                votre organisation, vos produits et services. <strong>81% des entreprises françaises ayant fait faillite 
                                en 2013</strong> ont purement et simplement oublié de parier sur le Net.
                            </p>
                            <button>Je crée mon site web</button>
                        </div>

                    </div>
                </section>

                <section id='methode'>
                    <h2>Notre méthode de création, idéale pour la croissance de votre entreprise</h2>
                    <div className='etapeMethode'>
                        <p className={` ${diagnostique ? "souligne" : ""}`} onClick={DiagnostiqueVisible} >Diagnostique</p>
                        <ChevronRight />
                        <p className={` ${uxRecherche ? "souligne" : ""}`} onClick={UxRechercheVisible} >Ux recherche</p>
                        <ChevronRight />
                        <p className={` ${designWeb ? "souligne" : ""}`} onClick={DesignWebVisible} >Design web</p>
                        <ChevronRight />
                        <p className={` ${developpement ? "souligne" : ""}`} onClick={DeveloppementVisible} >Developpement</p>
                        <ChevronRight />
                        <p className={` ${formation ? "souligne" : ""}`} onClick={FormationVisible} >Formation</p>
                        <ChevronRight />
                        <p className={` ${maintenance ? "souligne" : ""}`} onClick={MaintenanceVisible} >Maintenance</p>
                    </div>

                    <div className='etapeMethodeTextImage'>
                        <div className={`etape ${diagnostique ? "diagnostique" : ""}`}>
                            <img className={`${diagnostique ? "imageEtapeVisible" : ""}`} src={Diagnostique} alt="Recherche UX" />
                            <div className={`etapeMethodeText ${diagnostique ? "textEtapeVisible" : ""}`} >
                                <div className='enTete'>
                                    <div className='lineAvantText'></div>
                                    <p className='titleEtape'>Première étape</p>
                                    <div className='lineApresText' ></div>
                                </div>
                                <p>
                                    Afin de comprendre au mieux vos utilisateurs, nous apprenons à les connaître 
                                    de manière intensive. Grâce à des entretiens personnels, des enquêtes et des données. 
                                    <br/><br/>
                                    Nous découvrons ce qu'ils attendent de votre site Web.
                                </p>
                            </div>
                        </div>

                        <div className={`etape ${uxRecherche ? "uxRecherche" : ""}`} >
                            <img src={UxRecherche} alt="Recherche UX"/>
                            <div className={`etapeMethodeText ${diagnostique ? "textEtapeVisible" : ""}`} >
                                <div className='enTete'>
                                    <div className='lineAvantText'></div>
                                    <p className='titleEtape'>Deuxième étape</p>
                                    <div className='lineApresText' ></div>
                                </div>
                                <p>
                                    Afin de comprendre au mieux vos utilisateurs, nous apprenons à les connaître 
                                    de manière intensive. Grâce à des entretiens personnels, des enquêtes et des données. 
                                    <br/><br/>
                                    Nous découvrons ce qu'ils attendent de votre site Web.
                                </p>
                            </div>
                        </div>

                        <div className={`etape ${designWeb ? "designWeb" : ""}`} >
                            <img src={DesignWeb} alt="Recherche UX"/>
                            <div className={`etapeMethodeText ${diagnostique ? "textEtapeVisible" : ""}`} >
                                <div className='enTete'>
                                    <div className='lineAvantText'></div>
                                    <p className='titleEtape'>Troisième étape</p>
                                    <div className='lineApresText' ></div>
                                </div>
                                <p>
                                    Afin de comprendre au mieux vos utilisateurs, nous apprenons à les connaître 
                                    de manière intensive. Grâce à des entretiens personnels, des enquêtes et des données. 
                                    <br/><br/>
                                    Nous découvrons ce qu'ils attendent de votre site Web.
                                </p>
                            </div>
                        </div>

                        <div className={`etape ${developpement ? "developpement" : ""}`} >
                            <img src={Developpement} alt="Recherche UX"/>
                            <div className={`etapeMethodeText ${diagnostique ? "textEtapeVisible" : ""}`} >
                                <div className='enTete'>
                                    <div className='lineAvantText'></div>
                                    <p className='titleEtape'>Quatrième étape</p>
                                    <div className='lineApresText' ></div>
                                </div>
                                <p>
                                    Afin de comprendre au mieux vos utilisateurs, nous apprenons à les connaître 
                                    de manière intensive. Grâce à des entretiens personnels, des enquêtes et des données. 
                                    <br/><br/>
                                    Nous découvrons ce qu'ils attendent de votre site Web.
                                </p>
                            </div>
                        </div>

                        <div className={`etape ${formation ? "formation" : ""}`} >
                            <img src={Formation} alt="Recherche UX"/>
                            <div className={`etapeMethodeText ${diagnostique ? "textEtapeVisible" : ""}`} >
                                <div className='enTete'>
                                    <div className='lineAvantText'></div>
                                    <p className='titleEtape'>Cinquième étape</p>
                                    <div className='lineApresText' ></div>
                                </div>
                                <p>
                                    Afin de comprendre au mieux vos utilisateurs, nous apprenons à les connaître 
                                    de manière intensive. Grâce à des entretiens personnels, des enquêtes et des données. 
                                    <br/><br/>
                                    Nous découvrons ce qu'ils attendent de votre site Web.
                                </p>
                            </div>
                        </div>

                        <div className={`etape ${maintenance ? "maintenance" : ""}`} >
                            <img src={Maintenance} alt="Recherche UX"/>
                            <div className={`etapeMethodeText ${diagnostique ? "textEtapeVisible" : ""}`} >
                                <div className='enTete'>
                                    <div className='lineAvantText'></div>
                                    <p className='titleEtape'>Sixième étape</p>
                                    <div className='lineApresText' ></div>
                                </div>
                                <p>
                                    Afin de comprendre au mieux vos utilisateurs, nous apprenons à les connaître 
                                    de manière intensive. Grâce à des entretiens personnels, des enquêtes et des données. 
                                    <br/><br/>
                                    Nous découvrons ce qu'ils attendent de votre site Web.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id='methodeMobile'>

                    <h2>Les qualités de l’agence à choisir</h2>
                    
                    <div className='etape'>
                        <div className={`title ${diagnostique ? "souligne" : ""}`} onClick={DiagnostiqueVisible}>
                            <h3 className={`${diagnostique ? "souligne" : ""}`}>Diagnostique</h3>
                            <ChevronBottom />
                        </div>

                        <div className={`etapeTextImage ${diagnostique ? "diagnostique" : ""}`}>
                            <img src={Diagnostique} alt='Diagnostique'/>
                            <div className='etapeText'>
                                <p id='title'>Première étape</p>
                                <p>
                                    Nous optons pour un travail collaboratif tout au long du projet. 
                                    Grâce à nos ateliers UX, vous serez au cœur des décisions pour 
                                    que votre site se rapproche au mieux de votre marque
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='line'></div>
                    
                    <div className='etape'>
                        <div className={`title ${uxRecherche ? "souligne" : ""}`} onClick={UxRechercheVisible}>
                            <h3 className={`${uxRecherche ? "souligne" : ""}`}>Ux Recherche</h3>
                            <ChevronBottom />
                        </div>

                        <div className={`etapeTextImage ${uxRecherche ? "uxRecherche" : ""}`}>
                            <img src={UxRecherche} alt="Recherche UX"/>
                            <div className='etapeText'>
                                <p id='title'>Deuxième étape</p>
                                <p>
                                    Nous optons pour un travail collaboratif tout au long du projet. 
                                    Grâce à nos ateliers UX, vous serez au cœur des décisions pour 
                                    que votre site se rapproche au mieux de votre marque
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className='line'></div>
                    
                    <div className='etape'>
                        <div className={`title ${designWeb ? "souligne" : ""}`} onClick={DesignWebVisible}>
                            <h3 className={`${designWeb ? "souligne" : ""}`}>Design web</h3>
                            <ChevronBottom />
                        </div>

                        <div className={`etapeTextImage ${designWeb ? "designWeb" : ""}`}>
                            <img src={DesignWeb} alt="Design web"/>
                            <div className='etapeText'>
                                <p id='title'>Troisième étape</p>
                                <p>
                                    Nous optons pour un travail collaboratif tout au long du projet. 
                                    Grâce à nos ateliers UX, vous serez au cœur des décisions pour 
                                    que votre site se rapproche au mieux de votre marque
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className='line'></div>

                    <div className='etape'>
                        <div className={`title ${developpement ? "souligne" : ""}`} onClick={DeveloppementVisible}>
                            <h3 className={`${developpement ? "souligne" : ""}`}>Developpement</h3>
                            <ChevronBottom />
                        </div>

                        <div className={`etapeTextImage ${developpement ? "developpement" : ""}`}>
                            <img src={Developpement} alt="Developpement"/>
                            <div className='etapeText'>
                                <p id='title'>Quatrième étape</p>
                                <p>
                                    Nous optons pour un travail collaboratif tout au long du projet. 
                                    Grâce à nos ateliers UX, vous serez au cœur des décisions pour 
                                    que votre site se rapproche au mieux de votre marque
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='line'></div>

                    <div className='etape'>
                        <div className={`title ${formation ? "souligne" : ""}`} onClick={FormationVisible}>
                            <h3 className={`${formation ? "souligne" : ""}`}>Formation</h3>
                            <ChevronBottom />
                        </div>

                        <div className={`etapeTextImage ${formation ? "formation" : ""}`}>
                            <img src={Formation} alt="Formation"/>
                            <div className='etapeText'>
                                <p id='title'>Cinquième étape</p>
                                <p>
                                    Nous optons pour un travail collaboratif tout au long du projet. 
                                    Grâce à nos ateliers UX, vous serez au cœur des décisions pour 
                                    que votre site se rapproche au mieux de votre marque
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='line'></div>

                    <div className='etape'>
                        <div className={`title ${maintenance ? "souligne" : ""}`} onClick={MaintenanceVisible}>
                            <h3 className={`${maintenance ? "souligne" : ""}`}>Maintenance</h3>
                            <ChevronBottom />
                        </div>

                        <div className={`etapeTextImage ${maintenance ? "maintenance" : ""}`}>
                            <img src={Maintenance} alt="Maintenance"/>
                            <div className='etapeText'>
                                <p id='title'>Sixième étape</p>
                                <p>
                                    Nous optons pour un travail collaboratif tout au long du projet. 
                                    Grâce à nos ateliers UX, vous serez au cœur des décisions pour 
                                    que votre site se rapproche au mieux de votre marque
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <footer>
                    
                    <Logo />

                    <div className='contacts'>
                        <p id='mail'>contact@pixelway.fr</p>
                        <p id='tel'>+33 7 81 70 42 20</p>
                    </div>

                    <div className='reseaux'>
                        <LinkedIn />
                        <Dribbble />
                        <Instagram />
                    </div>

                    <div className='documentsJuridiques'>
                        <p>Mentions légales</p>
                        <p>Politique cookies</p>
                    </div>

                </footer>
                
                {openModal && <Modal />}

            </div>
        </>

    )
}

export default HomePage