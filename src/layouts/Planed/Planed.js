import React from 'react'
import MovieCard from "../../components/MovieCard/MovieCard";
import '../Layouts.scss'
import Store from "../../stores";
import axios from 'axios'
const API_KEY = "ac24c5f255eb805f019fbfdd3539c068";

class Planed extends React.Component {
    state = {
        planedFilmsID: [],
        planedFilms: []
    }

    componentDidMount() {
        //this.loadPlannedFilms()
        Store.addFilmsListener(this.loadPlannedFilms)
    }

    componentWillUnmount() {
        Store.removeFilmsListener(this.loadPlannedFilms)
    }

    loadPlannedFilms = () => {
        this.setState({
            planedFilmsID: Store.getPlannedFilms()
        })
    };
    getFilmName= ()=>{
        this.state.planedFilmsID.map(async (id)=>{
            try{
                const {data} = await axios.get()

            }catch (e) {
               console.log(e)
            }
        })

    }
    render() {
        console.log(this.state.planedFilmsID)
        return (
            <div className='container-fluid'>
                <h1>Planed films</h1>
                {/*<MovieCard/>*/}
            </div>
        )
    }
}

export default Planed