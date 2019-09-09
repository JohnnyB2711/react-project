import React from 'react'
import MovieCard from "../../components/MovieCard/MovieCard";
import '../Layouts.scss'
import Dispatcher from "flux";
import axios from "axios";
import {ButtonGroup, ButtonToolbar, Button, NavDropdown, Pagination, PageItem} from 'react-bootstrap'

const API_KEY = "ac24c5f255eb805f019fbfdd3539c068";

class Toprated extends React.Component {
    state = {
        films: [],
        page: 1,
        total_pages: 0,
        filmPage: 20
    };

    async componentDidMount() {
        this.getFilms(this.page)
    }

    getFilms = async (page_number) => {
        try {
            const {data} = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page_number}`);
            console.log(data.results)
            await this.setState({
                films: data.results,
                total_pages: data.total_pages
            })
        } catch {
            console.log('error')
        }
    };

    render() {
        let pages = [];
        for (let i = 1; i <= this.state.total_pages; i++) {
            pages.push(i)
        }
        return (
            <div className='Body container-fluid'>
                <h1>Top rated films</h1>
                <div className='row'>
                    {
                        this.state.films.map((film) => {
                            return <div key={film.id} className='col-md-3'>
                                <MovieCard film={film}/>
                            </div>
                        })
                    }
                </div>
                <Pagination>
                    <Pagination.First/>
                    <Pagination.Prev/>
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Ellipsis/>

                    <Pagination.Item>{10}</Pagination.Item>
                    <Pagination.Item>{11}</Pagination.Item>
                    <Pagination.Item>{12}</Pagination.Item>
                    <Pagination.Item>{13}</Pagination.Item>
                    <Pagination.Item disabled>{14}</Pagination.Item>

                    <Pagination.Ellipsis/>
                    <Pagination.Item>{pages}</Pagination.Item>
                    <Pagination.Next/>
                    <Pagination.Last/>
                </Pagination>

                    <ButtonToolbar>
                        <ButtonGroup>
                            {
                                pages.map((page_number) => {
                                    return <Button key={page_number} onClick={(e) => {
                                        this.getFilms(page_number)
                                    }}>{page_number}</Button>
                                })
                            }
                        </ButtonGroup>

                    </ButtonToolbar>


            </div>
        )
    }
}


export default Toprated