import React from 'react';
import MovieCard from "../../components/MovieCard/MovieCard";
import '../Layouts.scss';
import axios from "axios";
/*import {Pagination, PageItem} from 'react-bootstrap'*/
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';

const API_KEY = "ac24c5f255eb805f019fbfdd3539c068";

class Toprated extends React.Component {
    state = {
        films: [],
        currentPage: 1,
        total_pages: 0
    };

    async componentDidMount() {
        this.getFilms(this.state.currentPage)
    }

    getFilms = async (page_number) => {
        try {
            const {data} = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page_number}`);
            await this.setState({
                films: data.results,
                total_pages: data.total_pages,
                currentPage: page_number
            })
        } catch {
            console.log('error')
        }
    }

    render() {
        return (
            <div className='Page container-fluid'>
                <div className='PageFilm container-fluid'>
                    <h1>Top rated films</h1>
                    <MovieCard films={this.state.films}/>
                </div>
                <div className='Pagination'>
                <Pagination onChange={this.getFilms} current={this.state.currentPage} className="ant-pagination"
                            defaultCurrent={this.state.currentPage} total={3200}/>
                </div>
            </div>
        )
    }
}


export default Toprated