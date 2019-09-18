import React from 'react'
import {Button, Card} from 'react-bootstrap';
import './MovieCard.scss'
import '../Buttons/Buttons'
import Store from "../../stores";
import axios from 'axios'

class ViewedMovieCard extends React.Component {
    state = {
        genres: [],
        films:[]
    };

    componentDidMount() {
        this.onGenresLoaded();
        Store.addGenreListener(this.onGenresLoaded)
    }

    componentWillUnmount() {
        Store.removeGenreListener(this.onGenresLoaded)
    }

    ShowGenre = (id_genre) => {
        const genre = this.state.genres.find((genre) => {
            return genre.id === id_genre
        });
        if (!genre) return '';
        return genre.name + ' '
    };
    onGenresLoaded = () => {
        this.setState({
            genres: Store.getGenre()
        })
    };
    postViewedFilm = async (film) => {
        try {
            await axios.post("http://localhost/api/movie/viewed", film);
            this.deleteViewedFilm(film)
        } catch (e) {
            console.log(e)
        }

    };
    render() {
        const films = this.props.films;
        return (
            <div className='row'>
                {
                    films.map((film) => {
                        return <div key={film.id} className='col-md-3'>

                            <Card className='Card'>
                                <Button className='delete' variant="primary" disabled='false'
                                        onClick={() => this.props.removeViewedFilm(film)}></Button>
                                <Card.Img className='CardImg' variant='top'
                                          src={"https://image.tmdb.org/t/p/w185" + film.poster_path}></Card.Img>
                                <Card.Body>

                                    <Card.Title>{film.title}</Card.Title>

                                    <Card.Subtitle>
                                        {
                                            film.genre_ids.map((id_genre) => {
                                                return (
                                                    <span className='genre'
                                                          key={id_genre}>{this.ShowGenre(id_genre)}</span>
                                                )
                                            })
                                        }
                                    </Card.Subtitle>
                                </Card.Body>
                            </Card>
                        </div>
                    })
                }
            </div>

        )
    }
}

export default ViewedMovieCard;