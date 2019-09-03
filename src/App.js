import React from 'react';
import Header from './components/Header/Header'
import Content from './components/Content/Contetn'
import Menu from './components/Menu/Menu'
import 'bootstrap/dist/css/bootstrap.css'
function App() {
    return(
        <div className='container col-12'>
            <Header/>
            <Menu/>
        </div>

    )
}
export default App;
