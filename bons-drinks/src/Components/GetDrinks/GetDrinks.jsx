import React from 'react'
import style from './GetDrinks.module.css';
import {Link, Switch, Route} from 'react-router-dom';
import Populares from './Popular/Popular';

function GetDrinks () {
    return (
        <div className={style.contentDrinks}>
            <h2 className={style.titleDrinks}>Drinks</h2>
            <section className={style.sectionDrinks}>
                <button className={style.buttonDrinks1}>
                    <Link to="/drinks/Populares">Drinks Populares</Link>
                </button>
            </section>
            <div>
            <Switch>
                <Route path="/drinks/Populares">
                    <Populares />
                </Route>
            </Switch>
            </div>
        </div>
    )
}

export default GetDrinks