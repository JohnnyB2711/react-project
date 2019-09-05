import React from 'react'
import {Card} from 'react-bootstrap';
import './MovieCard.scss'
import '../Buttons/Buttons'
import Buttons from "../Buttons/Buttons";

function MovieCard(props) {
    //const {Movie} = props
    return (
        <Card className='Card'>
            <Card.Img variant='top' src='./img/a.png'></Card.Img>
            <Card.Body>

                <Card.Title> Название фильма</Card.Title>
                <Card.Subtitle>Жанр</Card.Subtitle>
                <Buttons/>

            </Card.Body>
        </Card>
    )
}
export default MovieCard;