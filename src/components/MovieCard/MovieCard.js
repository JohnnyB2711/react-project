import React from 'react'
import {Card, NavDropdown} from 'react-bootstrap';
import './MovieCard.scss'
import '../Buttons/Buttons'
import Buttons from "../Buttons/Buttons";
import axios from "axios";
import Store from "../../stores";

const API_KEY = "ac24c5f255eb805f019fbfdd3539c068";

class MovieCard extends React.Component {
    state = {
        films: []
    }

    async componentDidMount() {
        this.setState({
            films: this.getFilms()
        })
    }

    getFilms = async () => {
        try {
            const {data} = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
            return data
        } catch {
            console.log('error')
        }
    };

    render() {
        return (
            this.state.films.map((item) => {
                return (
                    <Card className='Card' key={item.id}>
                        <Card.Img variant='top' src={`${item.poster_path}`}></Card.Img>
                        <Card.Body>

                            <Card.Title>{}</Card.Title>
                            <Card.Subtitle>Жанр</Card.Subtitle>
                            <Buttons/>

                        </Card.Body>
                    </Card>
                )

                return <NavDropdown.Item key={item.id} href={`/genre/${item.id}`}>{item.name}</NavDropdown.Item>
            })


        )
    }


}

export default MovieCard;