import 'bootstrap/dist/css/bootstrap.css'
import Form from 'react-bootstrap/Form';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React, { useState } from 'react'
import CampoTexto from '../CampoTexto'
import './Formulario.css'
import DropDown from '../DropDown'
import BotaoForm from '../BotaoForm'

export const Formulario = (props) => {

    
    const [nome, setNome] = useState('');
    const [position, setPosition] = useState('');
    const [Disctag, setDisctag] = useState('');
    const [game, setGame] = useState('');
    const [id, setId] = useState('');

    const addPlayer = (evento) => {
        evento.preventDefault();
        props.addPlayerNovo({
            id,
            nome,
            position,
            Disctag,
            game
        })
       setNome('')
       setGame('')
       setPosition('')
       setDisctag('')
       setId(previousID =>{
        return {count: previousID.count+1}
       })
    }

    return (
    <div className="container-fluid formulario">
        <Form onSubmit={addPlayer}>   
            <h2>Cadastre seu Usertag e seja chamado no LFG!</h2>       
            <CampoTexto 
            obrigatorio={true} 
            label="Nome" 
            placeholder="Digite o seu nome"
            valor={nome}
            aoAlterar={valor => setNome(valor)}/>
            <CampoTexto 
            obrigatorio={true} 
            label="Posiçao" 
            placeholder="Digite a sua posição" 
            valor={position}
            aoAlterar={valor => setPosition(valor)}/>
            <CampoTexto 
            label="Usertag" 
            placeholder="Digite a Usertag do seu Discord!" 
            valor={Disctag}
            aoAlterar={valor => setDisctag(valor)}/>
            <DropDown 
            obrigatorio={true} 
            label="Escolha seu Game" 
            itens={props.games}
            placeholder="Escolha o game"
            valor={game}
            aoAlterar={valor => setGame(valor)}

           />
            <BotaoForm>
                Adicionar o Player
            </BotaoForm>
        </Form>
    </div>

    )

}

