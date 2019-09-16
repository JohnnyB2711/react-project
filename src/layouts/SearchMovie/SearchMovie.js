import React from 'react';
import MovieCard from "../../components/MovieCard/MovieCard";
import '../Layouts.scss';
import axios from "axios";
//import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import {Spinner} from 'react-bootstrap'
const API_KEY = "ac24c5f255eb805f019fbfdd3539c068";


class SearchMovie extends React.Component {
    state = {
        films: [],
        currentPage: 1,
        total_pages: 0,
        loading: true
    };

    async componentDidMount() {
        this.getFilms(this.props.inputValue)
    }

    getFilms = async (props) => {

    }

    render() {
        const SearchLine = this.props.match.params.query;
        const isLoggedIn = this.state.loading;
        return (
            <div className='Page container-fluid'>
{/*                <div className='Pagination'>
                    <Pagination onChange={this.getFilms(this.props)} current={this.state.currentPage} className="ant-pagination"
                                defaultCurrent={this.state.currentPage} total={3200}/>
                </div>*/}
                <div className='PageFilm container-fluid'>
                    <h1>SearchMovie films {SearchLine }</h1>
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


export default SearchMovie