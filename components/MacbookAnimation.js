import React, { useRef , useState, useEffect , Component } from 'react'; 
import styles from '../styles/Realisations.module.css'

import Image from 'next/image'

import RudolphDesktopAnimation from "../media/RudolphDesktopAnimation.png"
import RudolphDesktop from "../media/RudolphDesktop.png"


class MacbookAnimation extends Component { 


    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
    }
    
    listenToScroll = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop                     //document.body.scrollTop = 0; // For Safari
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight        //document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        const scrolled = winScroll / height
        this.setState({
            theposition: scrolled,
        })
    }

    render() {
        if (typeof window !== "undefined") {
            const sceneWrapper = document.getElementById("animationElement");
            const imageAnimation = document.getElementById("ImagedeLordi");            
            
            // console.log(document.getElementById("animationElement").scrollHeight)
            // console.log(document.documentElement.scrollTop)

            const winScroll = document.body.scrollTop || document.documentElement.scrollTop                     //document.body.scrollTop = 0; // For Safari
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight        //document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
            const scrolled = winScroll / height
            // console.log(scrolled)

            const pourcentage = 1 + (document.documentElement.scrollTop - document.getElementById("animationElement").offsetTop) * 10 / document.getElementById("animationElement").scrollHeight

            console.log(document.getElementById("ImagedeLordi").offsetWidth)
            console.log(document.documentElement.clientWidth)

        }
        
        return(
            <div id="animationElement" className={styles.sceneWrapper} >
                <div className={styles.macbook}>
                    <div className={styles.containerTopPageRudolph}
                     style =
                     {(typeof window !== "undefined") ? 
                         ( (1 + (document.documentElement.scrollTop - document.getElementById("animationElement").offsetTop) * 10 / document.getElementById("animationElement").scrollHeight) > 1.56 ? 
                             {
                                 opacity: `${1.56 - ((document.documentElement.scrollTop - document.getElementById("animationElement").offsetTop) * 12 / document.getElementById("animationElement").scrollHeight) }` 
                             } 
                             : 
                             null
                         ) 
                     : null}

                    >
                        <Image id="ImagedeLordi" src={RudolphDesktopAnimation} alt='Réalisation pour Tuyau Flexibles Rudolph'  
                            style = 
                            {(typeof window !== "undefined") ? 
                                ( document.documentElement.scrollTop > document.getElementById("animationElement").offsetTop && (1 + (document.documentElement.scrollTop - document.getElementById("animationElement").offsetTop) * 2 / document.getElementById("animationElement").scrollHeight) < 1.56 ? 
                                    {
                                        transform: `scale(${1 + (document.documentElement.scrollTop - document.getElementById("animationElement").offsetTop) * 10 / document.getElementById("animationElement").scrollHeight })`,
                                        filter: `blur(${(document.documentElement.scrollTop - document.getElementById("animationElement").offsetTop) * 10 / document.getElementById("animationElement").scrollHeight})`
                                    } 
                                    : 
                                    null
                                ) 
                            : null}
                        />
                    </div>
                </div>

                <div className={styles.containerLongPageRudolph}
                    style =
                    {(typeof window !== "undefined") ? 
                        ( (1 + (document.documentElement.scrollTop - document.getElementById("animationElement").offsetTop) * 10 / document.getElementById("animationElement").scrollHeight) > 1.56 ? 
                            {
                                opacity: `${((document.documentElement.scrollTop - document.getElementById("animationElement").offsetTop) * 12 / document.getElementById("animationElement").scrollHeight) } ` 
                            } 
                            : 
                            null
                        ) 
                    : null}
                >
                        <Image className={styles.longPageRudolph} src={RudolphDesktop} alt='Réalisation pour Tuyau Flexibles Rudolph' />
                </div>

            </div>
        )
    }
}

export default MacbookAnimation;
