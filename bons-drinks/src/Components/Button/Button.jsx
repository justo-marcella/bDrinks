import React from 'react';
import style from './Button.module.css';
import {useState} from 'react'


export default function Button({style, noClick, title}) {
    return (
        <div>
            <button className={style} onClick={() => {
                noClick()
            }}>
                {title}
            </button>
        </div>
    )
}
