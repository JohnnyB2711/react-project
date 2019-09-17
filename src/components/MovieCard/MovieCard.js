import React from 'react'
import {Button, Card} from 'react-bootstrap';
import './MovieCard.scss'
import '../Buttons/Buttons'
import Store from "../../stores";
import axios from 'axios'

class MovieCard extends React.Component {
    state = {
        genres: [],
        viewedFlag:'false',
        planedFlag:'false'
    };

    componentDidMount () {
        this.onGenresLoaded();
        Store.addGenreListener(this.onGenresLoaded)
    }

    componentWillUnmount () {
        Store.removeGenreListener(this.onGenresLoaded)
    }

    ShowGenre = (id_genre) => {
        const genre = this.state.genres.find((genre) => {
            return genre.id === id_genre
        });
        if (!genre) return '';
        return genre.name+' '
    };
    onGenresLoaded = () => {
        this.setState({
            genres: Store.getGenre()
        })
    };
    postViewedFilm= async (film)=>{

        try {
            var response = await axios.post("http://localhost/api/movie/viewed",
                {
                    "poster_path": "/e1mjopzAS2KNsvpbpahQ1a6SkSn.jpg",
                    "adult": false,
                    "overview": "From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government, undertaking high-risk black ops missions in exchange for commuted prison sentences.",
                    "release_date": "2016-08-03",
                    "genre_ids": [
                        14,
                        28,
                        80
                    ],
                    "id": film.id,
                    "original_title": "Suicide Squad",
                    "original_language": "en",
                    "title": "Suicide Squad",
                    "backdrop_path": "/ndlQ2Cuc3cjTL7lTynw6I4boP4S.jpg",
                    "popularity": 48.261451,
                    "vote_count": 1466,
                    "video": false,
                    "vote_average": 5.91
                }
            );
            this.setState({
                viewedFlag:'true'
            })
        } catch (e) {
           console.log(e)
        }

    }

    render() {
        const films = this.props.films;
        return (
            <div className='row'>
                {
                    films.map((film) => {
                        return <div key={film.id} className='col-md-2'>
                            <Card className='Card'>
                                <Card.Img className='CardImg' variant='top'
                                          src={"https://image.tmdb.org/t/p/w185" + film.poster_path}></Card.Img>
                                <Card.Body>

                                    <Card.Title>{film.title}</Card.Title>

                                    <Card.Subtitle>
                                        {
                                            film.genre_ids.map((id_genre) => {
                                                return (
                                                    <span className='genre' key={id_genre}>{this.ShowGenre(id_genre)}</span>
                                                )
                                            })
                                        }
                                    </Card.Subtitle>

                                    <div className='buttons'>
                                        <Button className='add' variant="primary" onClick={() => this.postViewedFilm(film)}></Button>
                                        <Button className='check' variant="primary"></Button>
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