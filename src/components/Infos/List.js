import React from 'react'
import PlayerCard from '../PlayerCard'
import myData from './data.json'
import './List.css'
import '../PlayerCard/PlayerCard.css'

export const List = (props) => {
    //creando uma nova array da array antiga com o json
    const filteredData = myData.filter((el) => {
        //if  input nulo devolve a array antiga
        if (props.input === '') {
            return el;
        }
        //retorna a pesquisa com o input do usuario comparando com nome de jogo ou player
        else {
            return el.nome.toLowerCase().includes(props.input) || el.game.toLowerCase().includes(props.input)
        }
    })
    
    return (
        (props.input) && 
        <ul className='listaplayers'>
            
            {filteredData.map((item) => (
                <PlayerCard key={item.nome} nome={item.nome} position={item.position} tag={item.tag} Disctag={item.Disctag} game={item.game} />
             
            ))}
           
        </ul>
    )
}
