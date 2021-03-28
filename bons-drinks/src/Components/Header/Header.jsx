import React from 'react';
import style from './Header.module.css';
// import {Link} from "react-router-dom";

function Header() {
    return (
        <header>
            <ul className={style.listaHeader + " header "}>
                {/* <Link to=""> */}
                    <li className={style.listaComum}>Drinks</li>
                {/* </Link> */}
                {/* <Link to=""> */}
                    <li className={style.listaComum}>Sobre</li>
                {/* </Link> */}
                {/* <Link to=""> */}
                    <li className={style.listaTitle}>Bons Drinks</li>
                {/* </Link> */}
                {/* <Link to=""> */}
                    <li className={style.listaComum}>Nosso Time</li>
                {/* </Link> */}
                {/* <Link to=""> */}
                    <li className={style.listaComum}>Contato</li>
                {/* </Link> */}
            </ul>


        </header>
    )
}

export default Header
