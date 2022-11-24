import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './components/Formulario'
import GamesCards from './components/GamesCards'
import Banner from './components/Banner';
import React, {useState} from 'react';
import  Games  from './components/Games';

function App() {

  const playersArray =[
    {
      nome: 'Pedro Queiróz',
      position: 'Coach',
      tag: 'https://github.com/Keirz.png',
      game: 'OverWatch2' 
    }
  ]

  const games = [
   {
    nome: 'OverWatch2',
    corPrimaria: '#57c278',
    corSecundaria: '#d9f7e9',
    imgFundo: '/images/overwatch2.jpg',
    descr: 'Do TinderWatch ao Masters! Juntos!'
   },  
    {
    nome: 'World of Warcraft',
    corPrimaria: '#82cffa',
    corSecundaria: '#e8f8ff',
    imgFundo: '/images/wow.webp',
    descr: 'Dungeons? Raids? Pugs? Ache aqui!'
   }, 
    {
    nome: 'League of Legends',
    corPrimaria: '#A6D157',
    corSecundaria: '#f0f8e2',
    imgFundo:'/images/lol.jpg',
    descr: 'Depressão connjunta!'
   }, 
    {
    nome: 'Call of Duty MW2',
    corPrimaria: '#e06b69',
    corSecundaria: '#fde7e8',
    imgFundo:'/images/CODMW2.jpg',
    descr: 'Violence, speed, momentum, juntos!'
   },  
   {
    nome: 'Dota 2',
    corPrimaria: '#db6ebf',
    corSecundaria: '#fae6f5',
    imgFundo: '/images/dota2.jpg',
    descr: 'Coach? Supp? Cores? Jogue junto!'
   },  
   {
    nome: 'CS: Global Offensive',
    corPrimaria: '#ff8a29',
    corSecundaria: '#ffeedf',
    imgFundo: '/images/csgo.webp',
    descr: 'Jogue Ranqueadas juntos!'
   }
  ]

 
  const  [players, setPlayers] = useState(playersArray);
  
  const playerAdicionado = (player) =>{
    
    setPlayers(players => [...players, player])   // adicionando novo player dentro da array com useState
                                        // ...players eh a syntaxe para espalhar os players antigos na array
  
    console.log(players)
    console.log(playersArray) 
    console.log(player)
    console.log(JSON.stringify(players))
  }
  
  return (
    <div className="App">
      <Banner />
      <>
      <h2 style={{margin: '32px', fontWeight: '700', color: '#db6ebf', border: '2px solid #ffffff' }}>Cheque os players por jogos:</h2>
      <div className='container-fluid' style={{display: 'flex'}}>
        
      {games.map(game =><GamesCards 
      key={game.nome}
      nome={game.nome}
      imgFundo={game.imgFundo}
      corPrimaria={game.corPrimaria}
      descr={game.descr}
      corSecundaria={game.corSecundaria}/* 
      qtd={players.filter(player => player.game === game.nome).length} */
      />)}
      </div>
      <Formulario 
        games={games.map(game => game.nome)} 
        addPlayerNovo={ player => playerAdicionado(player)}
      />
 
      </>

      {games.map(game => <Games 
      key={game.nome} 
      nome={game.nome} 
      corPrimaria={game.corPrimaria} 
      corSecundaria={game.corSecundaria}
    
      players={players.filter(player => player.game === game.nome)} /> )}
      
    </div>
  );
}

export default App;
