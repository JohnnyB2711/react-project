import React from 'react';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import {Spinner} from 'react-bootstrap';
import Store from "../stores";
import MovieCard from "./MovieCards/MovieCard";

class MovieList extends React.Component {
    state = {
        movies: {},
        currentPage: 1,
        totalPages: 0,
        loading: true,
        selectedMovies: {}
    };

    componentDidMount() {
        this.getMovies(this.state.currentPage);
        Store.addFilmsListener(this.DownloadSelectedFilms);
        Store.addFilmsListener(this.onMoviesListLoaded);
    }

    componentWillUnmount() {
        Store.removeFilmsListener(this.DownloadSelectedFilms);
        Store.removeFilmsListener(this.onMoviesListLoaded)
    }
    onMoviesListLoaded = () => {
        let moviesId = Store.getMovies();
        this.state.movies.forEach(movie => {
            this.updateMoviesAttrs({
                ...movie,
                planned: moviesId.planned.includes(movie.id),
                viewed: moviesId.viewed.includes(movie.id)
            })
        })
    };
    updateMoviesAttrs = newMovie => {
        this.setState({
            movies: this.state.movies.map(oldMovie => oldMovie.id === newMovie.id ? newMovie : oldMovie)
        })
    };
    DownloadSelectedFilms = () => {
        this.setState({
            selectedMovies: Store.getMovies()
        })
    };
    getMovies = async (pageNumber) => {
        this.setState({
            loading: true
        });
        try {
            const data = await this.props.getFunction(pageNumber);
            await this.setState({
                    movies: data.results,
                    totalPages: data.total_pages,
                    currentPage: pageNumber,
                    loading: false
                }
            )
        } catch {
            console.log('error')
        }
    };


    render() {
        const isLoggedIn = this.state.loading;
        return (
            <div className='Page container-fluid'>
                <div className='Pagination'>
                    <Pagination onChange={this.getMovies} current={this.state.currentPage} className="ant-pagination"
                                defaultCurrent={this.state.currentPage} total={this.state.totalPages * 10}/>
                </div>
                <div className='PageFilm container-fluid'>
                    <h1>{this.props.name}</h1>
                    {isLoggedIn ? (
                        <Spinner animation="border" role="status"/>
                    ) : (
                        <div className='row'>
                            {
                                this.state.movies.map((movie) => {
                                    return <div key={movie.id} className='col-md-4'>
                                        <MovieCard movie={movie} updateMoviesAttrs={this.updateMoviesAttrs}/>
                                    </div>
                                })
                            }
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default MovieList