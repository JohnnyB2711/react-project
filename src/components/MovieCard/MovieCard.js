import React from 'react'
import {Button, Card} from 'react-bootstrap';
import './MovieCard.scss'
import '../Buttons/Buttons'
import Store from "../../stores";
import axios from 'axios'

class MovieCard extends React.Component {
    state = {
        genres: [],
        pvFilms: [],
        plannedFilm:'false',
        vievedFilm:'false'
    };

    componentDidMount() {
        this.onGenresLoaded();
        this.onPVFilmLoaded();
        Store.addGenreListener(this.onGenresLoaded);
        Store.addFilmsListener(this.onPVFilmLoaded)
    }

    componentWillUnmount() {
        Store.removeGenreListener(this.onGenresLoaded);
        Store.removeFilmsListener(this.onPVFilmLoaded)
    }

    ShowGenre = (id_genre) => {
        const genre = this.state.genres.find((genre) => {
            return genre.id === id_genre
        });
        if (!genre) return '';
        return genre.name + ' '
    };
   /* SearchFilmInPlanned = (id_film) => {
        const pvFilms = this.state.pvFilms;
        Object.keys(pvFilms).map((f) => {
            const pF = pvFilms[f].planned.find((pf) => {
                return pf === id_film;

            });
            this.setState({
                plannedFilm:'true'
            })
        })
    }
    SearchFilmInViewed = (id_film) => {
        const pvFilms = this.state.pvFilms;
        Object.keys(pvFilms).map((f) => {
            const vF = pvFilms[f].viewed.find((vf) => {
                return vf === id_film
            });
            this.setState({
               vievedFilm:'true'
            })
        });
    };*/
    onGenresLoaded = () => {
        this.setState({
            genres: Store.getGenre()
        })
    };
    onPVFilmLoaded = () => {
        this.setState({
            pvFilms: Store.getFilms()
        })
    };
    postViewedFilm = async (film) => {
        try {
            await axios.post("http://localhost/api/movie/viewed", film);
        } catch (e) {
            console.log(e)
        }

    };
    postPlannedFilm = async (film) => {
        try {
            await axios.post("http://localhost/api/movie/planned", film);
        } catch (e) {
            console.log(e)
        }
    };

    render() {
        const pvFilms = this.state.pvFilms;

        const films = this.props.films;
        return (
            <div className='row'>
                {
                    films.map((film) => {
                        return <div key={film.id} className='col-md-3'>
                            <Card className='Card'>
                                <Card.Img className='CardImg' variant='top' src={"https://image.tmdb.org/t/p/w185" + film.poster_path}></Card.Img>
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

                                    <div className='buttons'>
                                        <Button className='add' variant="primary"  onClick={() => this.postViewedFilm(film)}></Button>
                                        <Button className='check' variant="primary"  onClick={() => this.postPlannedFilm(film)}></Button>
                                    </div>

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