import React from 'react'
import {Button, Card} from 'react-bootstrap';
import './MovieCards.scss'
import Store from "../../stores";
import axios from 'axios'

class MovieCards extends React.Component {
    state = {
        genres: []
    };

    componentDidMount() {
        this.onGenresLoaded();
        Store.addGenreListener(this.onGenresLoaded);
        Store.addFilmsListener(this.onMoviesListLoaded)
    }

    componentWillUnmount() {
        Store.removeGenreListener(this.onGenresLoaded);
        Store.removeFilmsListener(this.onMoviesListLoaded)
    }

    showGenres = (idGenre) => {
        const genre = this.state.genres.find(genre => genre.id === idGenre);
        if (!genre) return '';
        return genre.name + ' '
    };
    onGenresLoaded = () => {
        this.setState({
            genres: Store.getGenre()
        })
    };
    onMoviesListLoaded = () => {
        let moviesId = Store.getMovies();
        this.props.movies.forEach(movie => {
            this.props.updateMoviesAttrs({
                ...movie,
                planned: moviesId.planned.includes(movie.id),
                viewed: moviesId.viewed.includes(movie.id)
            })
        })
    };
    postViewedMovie = async (movie) => {
        try {
            await axios.post("http://localhost/api/movie/viewed", movie);
        } catch (e) {
            console.log(e)
        }
        await this.props.getMovies()
    };
    postPlannedMovie = async (movie) => {
        try {
            await axios.post("http://localhost/api/movie/planned", movie);
        } catch (e) {
            console.log(e)
        }
    };

    render() {
        const movies = this.props.movies;
        return (
            <div className='row'>
                {
                    movies.map((movie) => {
                        return <div key={movie.id} className='col-md-2'>
                            <Card className='Card'>
                                <Card.Img className='CardImg' variant='top'
                                          src={"https://image.tmdb.org/t/p/w185" + movie.poster_path}></Card.Img>
                                <Card.Body>

                                    <Card.Title>{movie.title}</Card.Title>

                                    <Card.Subtitle>
                                        {
                                            movie.genre_ids.map((idGenre) => {
                                                return (
                                                    <span className='genre'
                                                          key={idGenre}>{this.showGenres(idGenre)}</span>
                                                )
                                            })
                                        }
                                    </Card.Subtitle>

                                    <div className='buttons'>
                                        <Button className='add' variant="primary"
                                                disabled={movie.viewed}
                                                onClick={() => this.postViewedMovie(movie)}></Button>
                                        <Button className='check' variant="primary"
                                                disabled={movie.viewed == true ? !movie.planned : movie.planned}
                                                onClick={() => this.postPlannedMovie(movie)}></Button>
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

export default MovieCards;