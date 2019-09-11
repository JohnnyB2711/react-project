import React from 'react';
import MovieCard from "../../components/MovieCard/MovieCard";
import '../Layouts.scss';
import axios from "axios";
import Pagination from 'rc-pagination';
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
        this.setState({
            loading:true
        });
        try {
            const {data} = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&query=%27${props}%27`);
            await this.setState({
                films: data.results,
                total_pages: data.total_pages,
                //currentPage: props,
                loading: false
            })
        } catch {
            console.log('error')
        }
    }

    render() {
        const isLoggedIn = this.state.loading;
        console.log(this.props.value)
        return (
            <div className='Page container-fluid'>
{/*                <div className='Pagination'>
                    <Pagination onChange={this.getFilms(this.props)} current={this.state.currentPage} className="ant-pagination"
                                defaultCurrent={this.state.currentPage} total={3200}/>
                </div>*/}
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


export default SearchMovie