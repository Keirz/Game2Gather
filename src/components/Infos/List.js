import React from 'react'
import PlayerCard from '../PlayerCard'
import myData from './data.json'
import './List.css'
import '../PlayerCard/PlayerCard.css'

export const List = (props) => {
    //create a new array by filtering the original array
    const filteredData = myData.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.nome.toLowerCase().includes(props.input) || el.game.toLowerCase().includes(props.input)
        }
    })
    
    return (
        (props.input) && 
        <ul className='listaplayers'>
            
            {filteredData.map((item) => (
                <PlayerCard key={item.nome} nome={item.nome} position={item.position} tag={item.tag} Disctag={item.Disctag} game={item.game} />
              /*   <li className='linha' key={item.nome}>Player:{item.nome}, <br/> Jogo:{item.game},<br/> Posição: {item.position},<br/> Discord Tag: {item.Disctag}</li>
                 */
            ))}
           
        </ul>
    )
}
