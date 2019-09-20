import React from 'react';
import ViewedMovieCard from "../components/MovieCards/MovieCards";
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import {Spinner} from 'react-bootstrap'
import {getViewedMovies} from '../actions'

class ViewedMovies extends React.Component {
    state = {
        movies: [],
        currentPage: 1,
        totalPages: 0,
        loading: true
    };

    componentDidMount() {
        this.getMovies(this.state.currentPage)
    }

    getMovies = async (pageNumber) => {
        this.setState({
            loading: true
        });
        try {
            const data = await getViewedMovies(pageNumber);
            await this.setState({
                    movies: data.data,
                    totalPages: data.total / data.per_page,
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
                    <h1>Viewed movies</h1>
                    {isLoggedIn ? (
                        <Spinner animation="border" role="status"/>
                    ) : (
                        <ViewedMovieCard movies={this.state.movies}/>
                    )}
                </div>

            </div>
        )
    }
}

export default ViewedMovies