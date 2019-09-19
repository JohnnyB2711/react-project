import React from 'react';
import PlannedMovieCard from "../../components/MovieCard/PlannedMovieCard";
import '../Layouts.scss';
import axios from "axios";
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import {Spinner} from 'react-bootstrap'
class Planned extends React.Component {
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
            const {data} = await axios.get(`http://localhost/api/movie/planned?page=${page_number}`);
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
    render() {
        console.log(this.state.films);
        const isLoggedIn = this.state.loading;
        return (
            <div className='Page container-fluid'>
                <div className='Pagination'>
                    <Pagination onChange={this.getFilms} current={this.state.currentPage} className="ant-pagination"
                                defaultCurrent={this.state.currentPage} total={this.state.total_pages * 10}/>
                </div>
                <div className='PageFilm container-fluid'>
                    <h1>Planned films</h1>
                    {isLoggedIn ? (
                        <Spinner animation="border" role="status"/>
                    ) : (
                        <PlannedMovieCard films={this.state.films} getFilms={this.getFilms}/>
                    )}
                </div>

            </div>
        )
    }
}

export default Planned