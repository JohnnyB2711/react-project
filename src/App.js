import React from 'react';
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Footer from './components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.css'
import {Route} from 'react-router-dom'
import Toprated from "./layouts/Toprated/Toprated";
import Upcoming from "./layouts/Upcoming/Upcoming";
import Popular from "./layouts/Popular/Popular";
import Viewed from "./layouts/Viewed/Viewed";
import Planed from "./layouts/Planed/Planed";
import Genre from "./layouts/Genre/Genre";
function App() {
    return(
        <div className='container col-12'>
            <Header/>
            <Menu/>
                <Route path='/toprated' component={Toprated}/>
                <Route path='/upcoming' component={Upcoming}/>
                <Route path='/popular' component={Popular}/>
                <Route path='/viewed' component={Viewed}/>
                <Route path='/planed' component={Planed}/>
                <Route path='/genre' component={Genre}/>
            <Footer/>
        </div>
    )
}
export default App;
