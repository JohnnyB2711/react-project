import React from 'react'
import MovieCard from "../../components/MovieCard/MovieCard";
import '../Layouts.scss'
import Dispatcher from "flux";
import axios from "axios";
const API_KEY = "ac24c5f255eb805f019fbfdd3539c068";

class Toprated extends React.Component{

    /*async componentDidMount() {
        this.getFilms()
    }
    getFilms = async () => {
        try {
            const {data} = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
            console.log(data)
        } catch {
            console.log('error')
        }
    };*/
    render() {
        return (
            <div className='Body container-fluid'>
                <h1>Top rated films</h1>
                <div className='row'>
                    <div className='col-md-3'>
                        <MovieCard/>
                    </div>
                </div>

            </div>
        )
    }
}


export default Toprated