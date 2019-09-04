import React from 'react'
import MovieCard from "../../components/MovieCard/MovieCard";
import '../Layouts.scss'
function Planed() {
    return (
        <div className='Body container-fluid'>
            <h1>Planed films</h1>
            <MovieCard/>
        </div>
    )
}
export default Planed