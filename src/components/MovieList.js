import React from 'react';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import {Spinner} from 'react-bootstrap';
import Store from "../stores";
import MovieCard from "./MovieCard/MovieCard";
import Popup from "../pages/Popup";
import {getSelectedMovie} from "../store/actions/movies";
import {connect} from "react-redux";

class MovieList extends React.Component {
    state = {
        movies: {},
        currentPage: 1,
        totalPages: 0,
        loading: true,
        selectedMovies: [],
        open: false
    };

    componentDidMount() {
        this.props.getMoviesF({lg: 'en', page: this.state.currentPage});
        /*        this.downloadSelectedFilm();
                this.getMovies(this.state.currentPage);
                Store.addFilmsListener(this.downloadSelectedFilm);
                Store.addFilmsListener(this.onMoviesListLoaded);*/
    }

    /*    componentWillUnmount() {
            Store.removeFilmsListener(this.downloadSelectedFilm);
            Store.removeFilmsListener(this.onMoviesListLoaded)
        }*/

    changePopupState = () => {
        this.setState((prevState) => ({
            open: !prevState.open
        }));
    };
    setOpenFilm = (film) => {
        this.props.getMovie(film.id);
    };

    onMoviesListLoaded = () => {
        this.state.movies.forEach(movie => {
            this.updateMoviesAttrs({
                ...movie,
                planned: this.state.selectedMovies.planned.includes(movie.id),
                viewed: this.state.selectedMovies.viewed.includes(movie.id)
            })
        })
    };
    updateMoviesAttrs = newMovie => {
        this.setState({
            movies: this.state.movies.map(oldMovie => oldMovie.id === newMovie.id ? newMovie : oldMovie)
        })
    };
    /*    downloadSelectedFilm = () => {
            this.setState({
                selectedMovies: Store.getMovies()
            })
        };*/
    test = () => {
        console.log(this.state.currentPage)
    };
    getMoviesF = (e) => {
        console.log(e);
        this.setState({currentPage: e}, () => {
            this.props.getMoviesF({lg: 'ru', page: this.state.currentPage});
        });
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
            this.onMoviesListLoaded()
        } catch {
            console.log('error')
        }
    };

    render() {
        /*        const isLoggedIn = this.state.loading;*/
        return (
            <React.Fragment>
                <button onClick={this.test}>ТЕСТ</button>
                <div className='Page container-fluid'>
                    <div className='Pagination'>
                        <Pagination onChange={(e) => {
                            this.getMoviesF(e)
                        }}
                                    current={this.state.currentPage}
                                    defaultCurrent={this.state.currentPage}
                                    className="ant-pagination"
                                    total={this.props.moviesF.totalPages * 10}/>
                    </div>
                    <div className='PageFilm container-fluid'>
                        <h1>{this.props.name}</h1>
                        {this.props.moviesF.isLoading ? (
                            <Spinner animation="border" role="status"/>
                        ) : (
                            <div className='row'>
                                {
                                    this.props.moviesF.data.map((movie) => {
                                        return <div key={movie.id} className='col-lg-3 col-mg-4'>
                                            <MovieCard movie={movie} getMovies={this.getMovies}
                                                       open={this.changePopupState}
                                                       setFilm={this.setOpenFilm}/>
                                        </div>
                                    })
                                }
                            </div>
                        )}
                    </div>
                </div>
                <Popup isOpen={this.state.open} changePopup={this.changePopupState}/>
            </React.Fragment>

        )
    }
}

const mapStateToProps = store => {
    return {
        selectedMovie: store.movies.selectedMovie,
        moviesF: store.movies,
    }
};
const mapDispatchToProps = (dispatch, props) => ({
    getMovie: (data) => dispatch(getSelectedMovie(data)),
    getMoviesF: (data) => dispatch(props.getMoviesFunction(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);