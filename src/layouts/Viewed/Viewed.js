import React from 'react';
import ViewedMovieCard from "../../components/MovieCard/ViewedMovieCard";
import '../Layouts.scss';
import axios from "axios";
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import {Spinner} from 'react-bootstrap'
class Viewed extends React.Component {
    state = {
        films: [],
        currentPage: 1,
        total_pages: 0,
        loading: true
    };

    componentDidMount() {
        this.getFilms(this.state.currentPage)
    }
    getFilms = async (page_number) => {
        this.setState({
            loading: true
        });
        try {
            const {data} = await axios.get(`http://localhost/api/movie/viewed?page=${page_number}`);
            await this.setState({
                    films: data.data,
                    total_pages: data.total/data.per_page,
                    currentPage: page_number,
                    loading: false
                }
            )
        } catch {
            console.log('error')
        }
    };
    // removeViewedFilm = (film) => {
    //     this.setState((prevState) => ({
    //         films: prevState.films.filter(stateFilm => stateFilm.id !== film.id)
    //     }));
    // };
    // postFilmAfterDelete = async (films) => {
    //     try {
    //         await axios.post("http://localhost/api/movie/planned", films);
    //     } catch {
    //         console.log('error')
    //     }
    // };
    render() {
        const isLoggedIn = this.state.loading;
        return (
            <div className='Page container-fluid'>
                <div className='Pagination'>
                    <Pagination onChange={this.getFilms} current={this.state.currentPage} className="ant-pagination"
                                defaultCurrent={this.state.currentPage} total={this.state.total_pages * 10}/>
                </div>
                <div className='PageFilm container-fluid'>
                    <h1>Viewed films</h1>
                    {isLoggedIn ? (
                        <Spinner animation="border" role="status"/>
                    ) : (
                        <ViewedMovieCard films={this.state.films} />
                    )}
                </div>

            </div>
        )
    }
}
export default Viewed