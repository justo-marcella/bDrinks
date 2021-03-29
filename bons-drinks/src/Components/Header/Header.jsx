import React from 'react';
import style from './Header.module.css';
import { BrowserRouter as Router, Link, NavLink} from "react-router-dom";

function Header() {
    return (
        <div className={style.contentHeader}>
            <ul className={style.listaHeader}>
                <Link to="/drinks">
                    <li className={style.listaComum}>Drinks</li>
                </Link>
                <Link to="/sobre-nos">
                    <li className={style.listaComum}>Sobre</li>
                </Link>
                <Link to="/">
                    <li className={style.listaTitle}>Bons Drinks</li>
                </Link>
                <Link to="/nosso-time">
                    <li className={style.listaComum}>Nosso Time</li>
                </Link>
                <Link to="/contato">
                    <li className={style.listaComum}>Contato</li>
                </Link>
            </ul>


        </div>
    )
}

export default Header
