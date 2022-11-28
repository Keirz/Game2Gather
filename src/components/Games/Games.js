import './Games.css'
import React from 'react'
import PlayerCard from '../PlayerCard'
import data from '../Infos/'


export const Games = (props) => {

    /* const fundoVar = {backgroundColor: props.corSecundaria};  */ // criar variavel pro fundo para tornar mais manuseavel

    return (
        (props.players.length >0) && // ou ? e : '' no final (ternario)
        <section className='games-section' style={{backgroundColor: props.corSecundaria, backgroundImage: `url(${props.imgFundo})`, backgroundRepeat: 'no-repeat', backgroundSize: '100%'}}>
            <h3 style={{borderColor: props.corPrimaria, backgroundColor: props.corSecundaria, borderRadius: '4px' }}>{props.nome}</h3>
            <div className='players'>
            {props.players.map(player => <PlayerCard 
            corDeFundo={props.corPrimaria}
            key={player.nome} nome={player.nome} position={player.position} tag={player.tag} Disctag={player.Disctag}
            imgFundo={player.imgFundo} game={player.game}
            />)}
            </div>
        </section>

    )

}

