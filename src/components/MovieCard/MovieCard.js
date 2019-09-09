import React from 'react'
import {Card, NavDropdown} from 'react-bootstrap';
import './MovieCard.scss'
import '../Buttons/Buttons'
import Buttons from "../Buttons/Buttons";
import Toprated from "../../layouts/Toprated/Toprated";
import axios from "axios";
import Store from "../../stores";

const API_KEY = "ac24c5f255eb805f019fbfdd3539c068";

class MovieCard extends React.Component {
    render() {
        return (

            <Card className='Card' key={this.props.film}>
                <Card.Img variant='top' src={this.props.poster}></Card.Img>
                <Card.Body>

                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Subtitle>{this.props.genre_id}</Card.Subtitle>
                    <Buttons/>

                </Card.Body>
            </Card>
            //<NavDropdown.Item key={item.id} href={`/genre/${item.id}`}>{item.name}</NavDropdown.Item>
    )
}


}

export default MovieCard;