import 'bootstrap/dist/css/bootstrap.css'

import './DropDown.css';

import React from 'react'

export const DropDown = (props) => {
    
    

    return (
        <div className='lista-games'>
            <label>{props.label}</label>
            <select required={props.required} 
            value={props.valor}
            onChange={evento => props.aoAlterar(evento.target.value)}>
                <option></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>

    )
}

