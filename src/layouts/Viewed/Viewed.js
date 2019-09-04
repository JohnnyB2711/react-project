import React from 'react'
import MovieCard from "../../components/MovieCard/MovieCard";
import '../Layouts.scss'
function Viewed() {
    return (
        <div className='Body container-fluid'>
            <h1>Viewed films</h1>
            <MovieCard/>
        </div>
    )
}
export default Viewed