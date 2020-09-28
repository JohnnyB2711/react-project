import React from 'react'
import {Button, Card, Badge} from 'react-bootstrap';
import './MovieCard.scss'
import Store from "../../stores";
import {postPlannedMovie, postViewedMovie} from '../../actions'
import analyze from 'rgbaster'
import {connect} from "react-redux";

class MovieCard extends React.Component {
    async componentDidMount() {
/*        console.log(this.props.genres)
        this.onGenresLoaded();
        Store.addGenreListener(this.onGenresLoaded);*/
        /*        const c = document.getElementById(this.props.movie.id).style.background = await this.test();*/
        //Store.addFilmsListener(this.onMoviesListLoaded)
    }

    componentWillUnmount() {
/*        Store.removeGenreListener(this.onGenresLoaded);*/
        //Store.removeFilmsListener(this.onMoviesListLoaded)
    }

    showGenres = (idGenre, index) => {
        const genre = this.props.genres.find(genre => genre.id === idGenre);
        if (!genre) return null;
        return (index - (this.props.movie.genre_ids.length - 1)) ? genre.name + ' / ' : genre.name + ' ';
    };
    /*    onMoviesListLoaded = () => {
            let moviesId = Store.getMovies();
            this.props.movies.forEach(movie => {
                this.props.updateMoviesAttrs({
                    ...movie,
                    planned: moviesId.planned.includes(movie.id),
                    viewed: moviesId.viewed.includes(movie.id)
                })
            })
        };*/
    postViewedMovie = async (movie) => {
        await postViewedMovie(movie);
        this.props.getMovies()
    };
    /*  getAverageRGB = (imgEl) => {

          let blockSize = 5, // only visit every 5 pixels
              defaultRGB = {r: 0, g: 0, b: 0}, // for non-supporting envs
              canvas = document.createElement('canvas'),
              context = canvas.getContext && canvas.getContext('2d'),
              data, width, height,
              i = -4,
              length,
              rgb = {r: 0, g: 0, b: 0},
              count = 0;

          if (!context) {
              return defaultRGB;
          }

          height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
          width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

          context.drawImage(imgEl, 0, 0);

          try {
              data = context.getImageData(0, 0, width, height);
          } catch (e) {
              /!* security error, img on diff domain *!/
              alert('x');
              return defaultRGB;
          }

          length = data.data.length;

          while ((i += blockSize * 4) < length) {
              ++count;
              rgb.r += data.data[i];
              rgb.g += data.data[i + 1];
              rgb.b += data.data[i + 2];
          }

          // ~~ used to floor values
          rgb.r = ~~(rgb.r / count);
          rgb.g = ~~(rgb.g / count);
          rgb.b = ~~(rgb.b / count);

          return rgb;

      }*/


    test = async () => {
        const c = await analyze(`https://image.tmdb.org/t/p/w185${this.props.movie.poster_path}`, {ignore: ['rgb(255,255,255)', 'rgb(0,0,0)']});
        return c[0].color
    };
    openModal = (film) => {
        this.props.setFilm(film);
        this.props.open()
    };

    render() {
        const movie = this.props.movie;
        return (
            <Card className='Card' id={movie.id} onClick={() => this.openModal(movie)}>
                <div style={{position: 'relative'}}>
                    <Badge style={{backgroundColor: '#675da1', color: 'white'}}>{movie.vote_average}</Badge>
                    <Card.Img className='CardImg' variant='top'
                              src={"https://image.tmdb.org/t/p/w185" + movie.poster_path}/>
                </div>
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>

                    <Card.Subtitle>
                        {
                            movie.genre_ids.map((idGenre, index) => {
                                return (
                                    <span className='genre'
                                          key={idGenre}>{this.showGenres(idGenre, index)}</span>
                                )
                            })
                        }
                    </Card.Subtitle>

                    <div className='buttons'>
                        <Button className='add'
                                disabled={movie.viewed}
                                onClick={() => console.log(movie)}/>
                        <Button className='check'
                                disabled={movie.viewed === true ? !movie.planned : movie.planned}
                                onClick={() => postPlannedMovie(movie)}/>
                    </div>

                </Card.Body>
            </Card>

        )
    }
}

const mapStateToProps = store => {
    return {
        genres: store.movies.genres,
    }
};
export default connect(mapStateToProps)(MovieCard);

