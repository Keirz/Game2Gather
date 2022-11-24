import './PlayerCard.css'
import React from 'react';


export const PlayerCard = ({nome, tag, position, corDeFundo}) =>{

    return(
        <div className='player-card'>
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={tag} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{position}</h5>
            </div>
        </div>

    )
}