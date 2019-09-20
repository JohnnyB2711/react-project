import React from 'react';
import MovieCards from "../components/MovieCards/MovieCards";
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import {Spinner} from 'react-bootstrap'
import {searchMovie} from '../actions'

class SearchMovies extends React.Component {
    state = {
        movies: [],
        currentPage: 1,
        totalPages: 0,
        loading: true
    };

    componentDidMount() {
        this.getMovies(this.state.currentPage)
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.line !== prevProps.match.params.line) {
            this.getMovies(this.state.currentPage);
        }
    }

    getMovies = async (pageNumber) => {
        this.setState({
            loading: true
        });
        try {
            const data = await searchMovie(this.props.match.params.line, pageNumber);
            await this.setState({
                    movies: data.results,
                    totalPages: data.total_pages,
                    currentPage: pageNumber,
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
                    <Pagination onChange={this.getMovies} current={this.state.currentPage} className="ant-pagination"
                                defaultCurrent={this.state.currentPage} total={this.state.totalPages * 10}/>
                </div>
                <div className='PageFilm container-fluid'>
                    <h1>SearchMovie movies</h1>
                    {isLoggedIn ? (
                        <Spinner animation="border" role="status"/>
                    ) : (
                        <MovieCards movies={this.state.movies}/>
                    )}
                </div>

            </div>
        )
    }
}

export default SearchMovies

