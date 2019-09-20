import React from 'react';
import MovieCard from "../components/MovieCards/MovieCard";
import './PagesStyle.scss';
import axios from "axios";
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import {Spinner} from 'react-bootstrap'
import Store from "../stores";

const API_KEY = "ac24c5f255eb805f019fbfdd3539c068";

class UpcomingMovies extends React.Component {
    state = {
        films: {},
        currentPage: 1,
        total_pages: 0,
        loading: true,
        pvFilms: {}
    };

    componentDidMount() {
        this.DownloadSelectedFilms();
        this.getFilms(this.state.currentPage);
        Store.addFilmsListener(this.DownloadSelectedFilms)
    }

    componentWillUnmount() {
        Store.removeFilmsListener(this.DownloadSelectedFilms)
    }

    DownloadSelectedFilms = () => {
        this.setState({
            pvFilms: Store.getFilms()
        })
    };
    getFilms = async (page_number) => {
        this.setState({
            loading: true
        });
        try {
            const {data} = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page_number}`);
            await this.setState({
                    films: data.results,
                    total_pages: data.total_pages,
                    currentPage: page_number,
                    loading: false
                }, () => this.DownloadSelectedFilms(), () => this.NewFilms(this.state.films)
            )
        } catch {
            console.log('error')
        }
    }
    updateMoviesAttrs = newMovie => {
        this.setState({
            films: this.state.films.map(oldMovie => oldMovie.id === newMovie.id ? newMovie : oldMovie)
        })
    };

    render() {
        console.log(this.state.films)
        /*          console.log(this.state.pvFilms)*/
        const isLoggedIn = this.state.loading;
        return (
            <div className='Page container-fluid'>
                <div className='Pagination'>
                    <Pagination onChange={this.getFilms} current={this.state.currentPage} className="ant-pagination"
                                defaultCurrent={this.state.currentPage} total={this.state.total_pages * 10}/>
                </div>
                <div className='PageFilm container-fluid'>
                    <h1>Upcoming movies</h1>
                    {isLoggedIn ? (
                        <Spinner animation="border" role="status"/>
                    ) : (
                        <MovieCard films={this.state.films} updateMoviesAttrs={this.updateMoviesAttrs}/>
                    )}
                </div>

            </div>
        )
    }
}


export default UpcomingMovies