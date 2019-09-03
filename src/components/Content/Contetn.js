import React from 'react'
import {Card} from 'react-bootstrap';

function MovieCard(props) {
    const {Movie} = props
    return (
        <Card>
            <Card.Img variant='top' src=''></Card.Img>
            <Card.Body>

                <Card.Title> Название фильма</Card.Title>
                <Card.Subtitle>Жанр</Card.Subtitle>

            </Card.Body>
        </Card>
    )
}

function Content() {
    return (
        <MovieCard/>
    )

}

export default Content;