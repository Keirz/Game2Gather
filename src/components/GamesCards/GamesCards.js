import './GamesCards.css'
import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Games } from '../Games/Games';
import { getValue } from '@testing-library/user-event/dist/utils';

export const GamesCards = (props) =>{

/*     const gamesSection = useRef(null)

    const scrollToGame = (elementRef) =>{
        window.scrollTo(
            {
                top: elementRef.current.offsetTop,
                behavior: "smooth",
            }
        )
    }
 */

    return(
        <div className='cards-games'>
            <Card  style={{ width: '18rem', maxWidth:'18rem', backgroundColor: props.corSecundaria }}>
                <Card.Img variant="top" src={props.imgFundo} />
                <Card.Body className='card-games-body'>
                    <Card.Title>{props.nome}</Card.Title>
                    <Card.Text>
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