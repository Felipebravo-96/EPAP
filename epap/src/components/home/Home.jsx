import React from "react";
import style from "./home.module.css"
import { Link } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

function Home(){
    return(
        <div className={style.mainContainer}>
            <Header/>
            EPAP Humedal el charquito
            <Footer/>
        </div>
    )
}

export default Home