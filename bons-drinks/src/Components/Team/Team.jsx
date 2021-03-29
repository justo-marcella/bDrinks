import React from 'react';
import style from './Team.module.css';

function Team() {
    return (
        <div className={style.timeContent}>
            <h1>Nosso Time</h1>
            <img className={style.teamOne} src="https://i.pinimg.com/originals/ff/4e/e4/ff4ee44d5de97326c56ab0e5f7f92967.jpg" alt="Personagem Lidia Aguilar, as Telefonistas"/>
            <section className={style.personOne}>
                <h2>Lidia Aguilar</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel enim consequat lacus consectetur tempus nec sit amet tellus. Nam nec justo lacus. Sed sit.</p>
            </section>
            <img className={style.teamTwo} src="https://images6.fanpop.com/image/polls/1674000/1674058_1520087326631_full.png" alt="Personagem Lidia Aguilar, as Telefonistas"/>
            <section className={style.personTwo}>
                <h2>Angeles Vidal</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel enim consequat lacus consectetur tempus nec sit amet tellus. Nam nec justo lacus. Sed sit.</p>
            </section>
            <img className={style.teamThree} src="https://images6.fanpop.com/image/polls/1674000/1674058_1520087347744_full.png" alt="Personagem Lidia Aguilar, as Telefonistas"/>
            <section className={style.personThree}>
                <h2>Carlota Rodriguez</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel enim consequat lacus consectetur tempus nec sit amet tellus. Nam nec justo lacus. Sed sit.</p>
            </section>
            <img className={style.teamFour} src="https://images6.fanpop.com/image/polls/1674000/1674058_1520087339792_full.png" alt="Personagem Lidia Aguilar, as Telefonistas"/>
            <section className={style.personFour}>
                <h2>Marga Soarez</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel enim consequat lacus consectetur tempus nec sit amet tellus. Nam nec justo lacus. Sed sit.</p>
            </section>
        
        
        
        </div>
    )
}

export default Team
