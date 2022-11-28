import 'bootstrap/dist/css/bootstrap.css'
import Form from 'react-bootstrap/Form';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React, { useState } from 'react'
import InputsCadastro from '../InputsCadastro'
import './CadastroPlayer.css'
import DropDown from '../DropDown'
import BotaoForm from '../BotaoForm'
import data from '../Infos/data.json'


export const CadastroPlayer = (props) => {

    const [nome, setNome] = useState('');
    const [position, setPosition] = useState('');
    const [Disctag, setDisctag] = useState('');
    const [game, setGame] = useState('');
    const [tag, setTag] = useState('');


    const addPlayer = (evento) => {
        evento.preventDefault();
     
        props.addPlayerNovo({
            nome,
            position,
            Disctag,
            game,
            tag
        })
       setNome('');
       setGame('');
       setPosition('');
       setDisctag('');
      

      
       
       
    }

    return (
    <div className="container-fluid formulario">
        <Form onSubmit={(addPlayer)} key='formulario'>   
            <h2 key='h2form'>Cadastre seu Usertag e seja chamado no LFG!</h2>       
            <InputsCadastro 
            key='inputNome'
            obrigatorio={true} 
            label="Nome" 
            placeholder="Digite o seu nome"
            valor={nome}
            aoAlterar={valor => setNome(valor)}/>
            <InputsCadastro 
            key='inputPos'
            obrigatorio={true} 
            label="Posiçao" 
            placeholder="Digite a sua posição" 
            valor={position}
            aoAlterar={valor => setPosition(valor)}/>
            <InputsCadastro 
            key='inputUtag'
            label="Usertag" 
            placeholder="Digite a Usertag do seu Discord!" 
            valor={Disctag}
            aoAlterar={valor => setDisctag(valor)}/>
            <DropDown 
            key='dropdown'
            obrigatorio={true} 
            label="Escolha seu Game" 
            itens={props.games}
            placeholder="Escolha o game"
            valor={game}
            aoAlterar={valor => setGame(valor)}
           />
            <BotaoForm  key='botaoform'>
                Adicionar o Player
            </BotaoForm>
        </Form>
    </div>

    )

}

