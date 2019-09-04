import React from 'react'
import MovieCard from "../../components/MovieCard/MovieCard";
import '../Layouts.scss'
function Popular() {
    return (
        <div className='Body container-fluid'>
            <h1>Popular films</h1>
            <MovieCard/>
        </div>
    )
}
export default Popular