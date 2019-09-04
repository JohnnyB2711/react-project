import React from 'react'
import MovieCard from "../../components/MovieCard/MovieCard";
import '../Layouts.scss'
function Upcoming() {
    return (
        <div className='Body container-fluid'>
            <h1>Upcoming films</h1>
            <MovieCard/>
        </div>
    )
}

export default Upcoming