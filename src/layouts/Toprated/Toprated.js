import React from 'react'
import MovieCard from "../../components/MovieCard/MovieCard";
import '../Layouts.scss'

function Toprated() {
    return (
        <div className='Body container-fluid'>
            <h1>Top rated films</h1>
            <div className='row'>
                <div className='col-md-3'>
                    <MovieCard/>
                </div>
                <div className='col-md-3'>
                    <MovieCard/>
                </div>
                <div className='col-md-3'>
                    <MovieCard/>
                </div>
                <div className='col-md-3'>
                    <MovieCard/>
                </div>
                <div className='col-md-3'>
                    <MovieCard/>
                </div>
                <div className='col-md-3'>
                    <MovieCard/>
                </div>
                <div className='col-md-3'>
                    <MovieCard/>
                </div>
                <div className='col-md-3'>
                    <MovieCard/>
                </div>


            </div>

        </div>
    )
}

export default Toprated