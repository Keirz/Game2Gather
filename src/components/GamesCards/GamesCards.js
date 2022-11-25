import './GamesCards.css'
import * as React from "react"
import Card from 'react-bootstrap/Card';

export const GamesCards = (props) =>{


    return(
        <div className='cards-games' key={props.nome}>
            <Card key={props.nome} style={{ width: '18rem', maxWidth:'18rem', backgroundColor: props.corSecundaria }}>
                <Card.Img variant="top" src={props.imgFundo} key={props.imgFundo} />
                <Card.Body className='card-games-body' key={props.nome}>
                    <Card.Title key={props.nome}>{props.nome}</Card.Title>
                    <Card.Text key={props.descr}>
                        {props.descr}
                    </Card.Text>
                  {/*   <Button variant="primary" className='card-button' 
                    onClick={(props) => scrollToGame(Games.ref)}
                    >Cheque os players!</Button> */}
                </Card.Body>
            </Card>

        </div>

    )
}