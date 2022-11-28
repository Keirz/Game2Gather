import './PlayerCard.css'
import React from 'react';


export const PlayerCard = ({nome, Disctag, position, corDeFundo, game, tag}) =>{

    return(
        <div className='player-card'>
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src='/images/profile.jpg' alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{Disctag}</h5>
                <h5>{position}</h5>
                <h6>{game}</h6>
            </div>
        </div>

    )
}