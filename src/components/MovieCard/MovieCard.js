import React from 'react'
import {Card} from 'react-bootstrap';
import './MovieCard.scss'

function MovieCard(props) {
    const {Movie} = props
    return (
        <Card className='Card'>
            <Card.Img variant='top' src='./img/a.png'></Card.Img>
            <Card.Body>

                <Card.Title> Название фильма</Card.Title>
                <Card.Subtitle>Жанр</Card.Subtitle>

            </Card.Body>
        </Card>
    )
}
export default MovieCard;