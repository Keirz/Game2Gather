import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CadastroPlayer from './components/CadastroPlayer';
import GamesCards from './components/GamesCards';
import HeaderIMG from './components/HeaderIMG';
import React, {useState} from 'react';
import  Games  from './components/Games';
import data from './components/Infos/data.json';
import List  from "./components/Infos/";
import {TextField} from "@material-ui/core";
import './App.css';

function App() {

 /*  const playersArray =[
    {
      id: 1,
      nome: 'Pedro Queiróz',
      position: 'Coach',
      tag: 'https://github.com/Keirz.png',
      game: 'OverWatch2' 
    }
  ] */

  const games = [
   {
    nome: 'OverWatch2',
    corPrimaria: '#57c278',
    corSecundaria: '#d9f7e9',
    imgFundo: '/images/overwatch2.jpg',
    descr: 'Do TinderWatch ao Masters! Juntos!'
   },  
    {
      id: 1,
    nome: 'World of Warcraft',
    corPrimaria: '#82cffa',
    corSecundaria: '#e8f8ff',
    imgFundo: '/images/wow.webp',
    descr: 'Dungeons? Raids? Pugs? Ache aqui!'
   }, 
    {
      id: 2,
    nome: 'League of Legends',
    corPrimaria: '#A6D157',
    corSecundaria: '#f0f8e2',
    imgFundo:'/images/lol.jpg',
    descr: 'Depressão connjunta!'
   }, 
    {
      id: 3,
    nome: 'Call of Duty MW2',
    corPrimaria: '#e06b69',
    corSecundaria: '#fde7e8',
    imgFundo:'/images/CODMW2.jpg',
    descr: 'Violence, speed, momentum, juntos!'
   },  
   {
    id: 4,
    nome: 'Dota 2',
    corPrimaria: '#db6ebf',
    corSecundaria: '#fae6f5',
    imgFundo: '/images/dota2.jpg',
    descr: 'Coach? Supp? Cores? Jogue junto!'
   },  
   {
    id: 5,
    nome: 'CS: Global Offensive',
    corPrimaria: '#ff8a29',
    corSecundaria: '#ffeedf',
    imgFundo: '/images/csgo.webp',
    descr: 'Jogue Ranqueadas juntos!'
   }
  ]

 
  const  [players, setPlayers] = useState(data);

  const playerAdicionado = (player) =>{
   
    setPlayers(players => [...players, player]) 
      // adicionando novo player dentro da array com useState
                                            // ...players eh a syntaxe para espalhar os players antigos na array
    
    console.log(players);
    console.log(player);
    console.log(JSON.stringify(players))
  }
  const [inputTexto, setInputTexto] = useState("");
    let inputHandler = (e) => {
      //convertendo o input para lower case para facilitar o query
      var lowerCase = e.target.value.toLowerCase();
      setInputTexto(lowerCase);
    }
  return (
    <div className="App">
      
      <div className='img' key='img'>
      <HeaderIMG key='headerimg' />
      </div>
      
      <div className='h2gamescard'key='h2gamescard'>
      <h2 key='h2gamescard' style={{margin: '32px', fontWeight: '700', color: '#db6ebf', border: '2px solid #ffffff' }}>Cheque os nossos Games:</h2>
      </div>
  
      <div className='container-fluid' style={{display: 'flex'}} key='gamescards'>
        
      {games.map(game =><GamesCards className={game.id}
      key={game.id}
      nome={game.nome}
      imgFundo={game.imgFundo}
      corPrimaria={game.corPrimaria}
      descr={game.descr}
      corSecundaria={game.corSecundaria}
      />)}
      </div>
      
      <div className="container-fluid search" key='search'>
      <h1 style={{margin: '32px', fontWeight: '700', color: '#db6ebf', border: 'none', alignSelf: 'center' }}>Procure um Player ou Jogo:</h1>
      <div className="searchbar container-fluid">
        <TextField
        key='serarch'
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <List input={inputTexto} corDeFundo={games.corPrimaria} />
    </div>
      <div key='form'>
      <CadastroPlayer 
        key='form'
        games={games.map(game => game.nome)} 
        addPlayerNovo={ player => playerAdicionado(player)}/>
      </div>
      <div key='gamessection'>
      {games.map(game => <Games 
      key={game.id} 
      nome={game.nome} 
      corPrimaria={game.corPrimaria} 
      corSecundaria={game.corSecundaria}
      imgFundo={game.imgFundo}
      players={players.filter(player => player.game === game.nome)} /> )}
      <div/>
      </div>
    </div>
  );
}

export default App;
