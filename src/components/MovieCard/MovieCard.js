import React from 'react'
import {Button, Card} from 'react-bootstrap';
import './MovieCard.scss'
import '../Buttons/Buttons'
import Store from "../../stores";
import axios from 'axios'

class MovieCard extends React.Component {
    state = {
        genres: [],
        pvFilms: {}
    };

    componentDidMount() {
        this.onGenresLoaded();
        Store.addGenreListener(this.onGenresLoaded);
        Store.addFilmsListener(this.DownloadSelectedFilms)
    }

    componentWillUnmount() {
        Store.removeGenreListener(this.onGenresLoaded);
        Store.removeFilmsListener(this.DownloadSelectedFilms)
    }

    ShowGenre = (id_genre) => {
        const genre = this.state.genres.find((genre) => {
            return genre.id === id_genre
        });
        if (!genre) return '';
        return genre.name + ' '
    };
    AddingFilmNewOptions = () => {
        this.props.films.forEach((film) => {
            /*                        Object.defineProperties(film, {
                            planned:this.state.pvFilms.planned.includes(film.id),
                            viewed: this.state.pvFilms.viewed.includes(film.id)
                        })
                        this.props.newFilms(film)*/
            //console.log(film)
            this.props.newFilms({
                ...film,
               planned: this.state.pvFilms.planned.includes(film.id),
              viewed: this.state.pvFilms.viewed.includes(film.id)
            });
        })
    };
    onGenresLoaded = () => {
        this.setState({
            genres: Store.getGenre()
        })
    };
    DownloadSelectedFilms = () => {
        this.setState({
            pvFilms: Store.getFilms()
        }, () =>
            this.AddingFilmNewOptions())

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
        const films = this.props.films;

        for (let film in Object.keys(this.props.films))
        {
            console.log(...film)
            console.log(film)
        }
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
                                                return (
                                                    <span className='genre'
                                                          key={id_genre}>{this.ShowGenre(id_genre)}</span>
                                                )
                                            })
                                        }
                                    </Card.Subtitle>

                                    <div className='buttons'>
                                        <Button className='add' variant="primary"
                                                disabled={film.viewed}
                                                onClick={() => this.postViewedFilm(film)}></Button>
                                        <Button className='check' variant="primary"
                                                disabled={film.planned}
                                                onClick={() => this.postPlannedFilm(film)}></Button>
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