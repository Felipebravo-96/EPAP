import React from "react";
import style from "./footer.module.css"
import { Link } from "react-router-dom";




function Footer(){
    return(
        <div className={style.footerContainer}>
            <div className={style.txtCorreoContainer}>
                <h4 className={style.txtCorreo}>Contáctanos: epaphumedalelcharquito@gmail.com</h4>
            </div>
            <div className={style.logosRedesContainer}>
                <div className={style.logosImgContainer}>
                    <a rel="noreferrer" href="https://www.facebook.com/epaphumedalelcharquito" target="_blank">
                        <div className={style.faceIcon}>

                        </div>
                    </a>
                </div>  
                <div className={style.logosImgContainer}>
                    <a rel="noreferrer" href="https://www.instagram.com/epaphumedalelcharquito/" target="_blank">
                        <div className={style.instagramIcon}>

                        </div>
                    </a>
                </div>
                <div className={style.logosImgContainer}>
                     <a rel="noreferrer" href="https://www.youtube.com/@epaphumedalelcharquito8998" target="_blank">
                        <div className={style.youtubeIcon}>

                        </div>
                    </a>
                </div>
                <div className={style.logosImgContainer}>
                    <a rel="noreferrer" href="https://vimeo.com/elcharquito" target="_blank">
                        <div className={style.vimeoIcon}>

                        </div>
                    </a>
                </div>
                <div className={style.logosImgContainer}>
                    <a rel="noreferrer" href="https://open.spotify.com/show/5buQf0flUkC0IPCWe473qG" target="_blank">
                        <div className={style.spotifyIcon}>

                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer