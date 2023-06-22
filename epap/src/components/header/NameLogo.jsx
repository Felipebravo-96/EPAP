import React from "react";
import style from "./nameLogo.module.css"
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo-epap-img.png"
import hojas from "../../assets/img/hojas.png"
import { HiMenu } from "react-icons/hi";

function NameLogo(){
    return(
        <div className={style.mainContainer}>
            <div className={style.logoMenu}>
                <div className={style.imgLogoContainer}>
                    <Link to="/">
                        <img className={style.imgLogo} src ={logo}  alt="EPAP"/>
                    </Link>
                </div>
                <div className={style.hojasimg}>
                    <img className={style.hojas} src ={hojas}  alt="EPAP"/>
                </div>
                <div className={style.menuMobile}>
                    <button className={style.menuButton}>
                     <HiMenu className={style.menuicon}/>
                    </button>
                </div>
                <div className={style.navMobileContainer}>
                    <ul className={style.navMobile}>
                        <li className={style.navMobileOption}>¿Quiénes somos?</li>
                        <li className={style.navMobileOption}>Biodiversidad</li>
                        <li className={style.navMobileOption}>Soberanía alimentaria</li>
                        <li className={style.navMobileOption}>Arte</li>
                        <li className={style.navMobileOption}>Repositorio</li>
                    </ul>
                </div>
            </div>
            <div className={style.navbarContainer}>
                <div>
                    ESCUELA DE PENSAMIENTO AMBIENTAL Y DE PAZ HUMEDAL EL CHARQUITO
                </div>
                <div>
                    EDUCACIÓN AMBIENTAL COMUNITARIA
                </div>
            </div>
        </div>
    )
}

export default NameLogo