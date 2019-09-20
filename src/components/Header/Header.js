import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {Button, InputGroup, FormControl} from 'react-bootstrap';
import './Header.scss'
import {withRouter} from 'react-router';

class Header extends React.Component {
    state = {
        inputValue: ''
    };

    updateInputValue = (event) => {
        this.setState({value: event.target.value});
        this.props.inputValue(this.state.inputValue)

    };
    searchFilms = (line) => {
        this.props.history.push(`/search/${line}`);
    };

    render() {
        return (
            <header className='container-fluid Header d-flex flex-row'>
                <div className='HeaderContent'>
                    <h1 className='Title'>Movie</h1>
                    <div className='SearchBlock'>
                        <InputGroup className="SearchInput mb-3">
                            <FormControl
                                placeholder="Введите фильм для поиска"
                                onChange={this.updateInputValue}/>
                        </InputGroup>
                        <Button className='SearchButton'
                                onClick={() => this.searchFilms(this.state.value)}></Button>
                    </div>
                </div>
            </header>
        )
    }
}

export default withRouter(Header);