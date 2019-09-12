import React from 'react'
import {Card} from 'react-bootstrap';
import './MovieCard.scss'
import '../Buttons/Buttons'
import Buttons from "../Buttons/Buttons";
import Store from "../../stores";

//import Store from '../../stores'

class MovieCard extends React.Component {
    state = {
        genres: []
    }

    componentDidMount() {
        Store.addGenreListener(this.Function.bind(this))
    }

    componentWillUnmount() {
        Store.removeGenreListener(this.Function.bind(this))
    }

    ShowGenre = (id_genre, genres) => {
        const genre = this.state.genres.find((genre) => {
            return genre.id === id_genre
        });
        if (!genre) return '';
        return genre.name+' / '
    };
    Function =
        (items) => {
            this.setState({
                genres: Store.getGenre()
            })

        }

    render() {
        const films = this.props.films;
        return (
            <div className='row'>
                {
                    films.map((film) => {
                        return <div key={film.id} className='col-md-3'>
                            <Card className='Card'>
                                <Card.Img className='CardImg' variant='top'
                                          src={"https://image.tmdb.org/t/p/w185" + film.poster_path}></Card.Img>
                                <Card.Body>

                                    <Card.Title>{film.title}</Card.Title>

                                    <Card.Subtitle>
                                        {
                                            film.genre_ids.map((id_genre) => {
                                                //console.log(id_genre)
                                                return (
                                                    <span key={id_genre}>{this.ShowGenre(id_genre)}</span>
                                                )
                                            })
                                        }
                                    </Card.Subtitle>

                                    <Buttons/>

                                </Card.Body>
                            </Card>
                        </div>
                    })
                }
            </div>

        )
    }


}

export default MovieCard;