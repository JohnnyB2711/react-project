import React from 'react';
import MovieCard from "../components/MovieCards/MovieCard";
import './PagesStyle.scss';
import axios from "axios";
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import {Spinner} from 'react-bootstrap'

const API_KEY = "ac24c5f255eb805f019fbfdd3539c068";

class SearchMovies extends React.Component {
    state = {
        films: [],
        currentPage: 1,
        total_pages: 0,
        loading: true
    };

    componentDidMount() {
        this.getFilms(this.state.currentPage)
    }
    componentDidUpdate(prevProps) {
        if (this.props.match.params.Line !== prevProps.match.params.Line) {
            this.getFilms(this.state.currentPage);
        }
    }
    getFilms = async (page_number) => {
        this.setState({
            loading: true
        });
        try {
            const {data} = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=${page_number}&query=${this.props.match.params.Line}`);
            await this.setState({
                    films: data.results,
                    total_pages: data.total_pages,
                    currentPage: page_number,
                    loading: false
                }
            )
        } catch (e) {
            console.log(e)
        }
    };
    render() {
        const isLoggedIn = this.state.loading;
        return (
            <div className='Page container-fluid'>
                <div className='Pagination'>
                    <Pagination onChange={this.getFilms} current={this.state.currentPage} className="ant-pagination"
                                defaultCurrent={this.state.currentPage} total={this.state.total_pages * 10}/>
                </div>
                <div className='PageFilm container-fluid'>
                    <h1>SearchMovie films</h1>
                    {isLoggedIn ? (
                        <Spinner animation="border" role="status"/>
                    ) : (
                        <MovieCard films={this.state.films}/>
                    )}
                </div>

            </div>
        )
    }
}


export default SearchMovies

