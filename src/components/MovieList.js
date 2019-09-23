import React from 'react';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import {Spinner} from 'react-bootstrap';
import Store from "../stores";
import MovieCard from "./MovieCard/MovieCard";

class MovieList extends React.Component {
    state = {
        movies: {},
        currentPage: 1,
        totalPages: 0,
        loading: true,
        selectedMovies: {}
    };

    componentDidMount() {
        this.downloadSelectedFilm();
        this.GetMovies(this.state.currentPage);
        Store.addFilmsListener(this.downloadSelectedFilm);
        Store.addFilmsListener(this.onMoviesListLoaded);
    }

    componentWillUnmount() {
        Store.removeFilmsListener(this.downloadSelectedFilm);
        Store.removeFilmsListener(this.onMoviesListLoaded)
    }
    onMoviesListLoaded = () => {
        //let moviesId = Store.getMovies();
        console.log(this.state.selectedMovies);
        this.state.movies.forEach(movie => {
            this.updateMoviesAttrs({
                ...movie,
                planned:this.state.selectedMovies.planned.includes(movie.id),
                viewed: this.state.selectedMovies.viewed.includes(movie.id)
            })
            //console.log(movie)
        })
    };
    updateMoviesAttrs = newMovie => {
        this.setState({
            movies: this.state.movies.map(oldMovie => oldMovie.id === newMovie.id ? newMovie : oldMovie)
        })
            //console.log(newMovie)
    };
    downloadSelectedFilm = () => {
        this.setState({
            selectedMovies: Store.getMovies()
        })
    };
    GetMovies = async (pageNumber) => {
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
            this.onMoviesListLoaded()
        } catch {
            console.log('error')
        }

        console.log(this.state.movies)
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