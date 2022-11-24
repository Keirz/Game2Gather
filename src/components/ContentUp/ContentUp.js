import React, { useState} from "react";
import GamesCards from "../GamesCards";
import Formulario from "../Formulario";
import './ContentUp.css'

export const ContentUp = () =>{

   const games = [
    {
     nome: 'OverWatch2',
     corPrimaria: '#57c278',
     corSecundaria: '#d9f7e9'
    },  
     {
     nome: 'World of Warcraft',
     corPrimaria: '#82cffa',
     corSecundaria: '#e8f8ff'
    }, 
     {
     nome: 'League of Legends',
     corPrimaria: '#A6D157',
     corSecundaria: '#f0f8e2'
    }, 
     {
     nome: 'Call of Duty MW2',
     corPrimaria: '#e06b69',
     corSecundaria: '#fde7e8'
    },  
    {
     nome: 'Dota 2',
     corPrimaria: '#db6ebf',
     corSecundaria: '#fae6f5'
    }, 
     {
     nome: 'Final Fantasy XIV',
     corPrimaria: '#ffba05',
     corSecundaria: '#fff5d9'
    },  
    {
     nome: 'CS: Global Offensive',
     corPrimaria: '#ff8a29',
     corSecundaria: '#ffeedf'
    }
   ]
    
  const [players, setPlayers] = useState([]);
  
  const playerAdicionado = (player) =>{
    console.log(player)
    setPlayers([...players, player])   // adicionando novo player dentro da array com useState
                                        // ...players eh a syntaxe para espalhar os players antigos na array
  }
    return (
        <section className="container-fluid contentup">
            
            <Formulario games={games.map(game => game.nome)} 
            addPlayerNovo={ player => playerAdicionado(player)}/>
            <GamesCards />
        </section>
    )
}