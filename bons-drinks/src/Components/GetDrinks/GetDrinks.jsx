import React from 'react';
import Button from '../Button/Button';
import style from './GetDrinks.module.css';

function GetDrinks() {
    return (
        <div className={style.gridDrinks}>
        <section className={style.headerDrinks}>
            <div>
                <h1>Drinks</h1>
            </div>
        </section>
        <section className={style.contentDrinks}>
            <Button titulo="Drinks Populares"/>
            <Button titulo="Buscar Drinks"/>
        </section>
        
    </div>
    )
}

export default GetDrinks
