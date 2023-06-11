import React from "react";
import style from "./header.module.css"
import { Link } from "react-router-dom";

function Header(){
    return(
        <div className={style.mainContainer}>
            <div>
                <Link to="/">
                    <h1>LOGO</h1>
                </Link>
            </div>
            <div className={style.navbarContainer}>
                <div>
                    <Link to="/">
                        <h1>seccion1</h1>
                    </Link>
                </div>
                <div>
                    <Link to="/">
                        <h1>seccion2</h1>
                    </Link>
                </div>
                <div>
                    <Link to="/">
                        <h1>seccion3</h1>
                    </Link>
                </div>
                <div>
                    <Link to="/">
                        <h1>seccion4</h1>
                    </Link>
                </div>
                <div>
                    <Link to="/">
                        <h1>seccion5</h1>
                    </Link>
                </div>
                <div>
                    <Link to="/">
                        <h1>seccion6</h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header