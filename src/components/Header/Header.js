import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {Button, InputGroup, FormControl} from 'react-bootstrap';
import './Header.scss'
class Header extends React.Component {
    state = {
        inputValue: ''
    };

    updateInputValue = event => {
        this.setState({inputValue: event.target.value});
        this.props.updateValue(this.state.inputValue)

    };
    Search=(line)=>{
        // eslint-disable-next-line no-restricted-globals
        history.push('/search')
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
                                onClick={() => this.Search(this.state.inputValue)}></Button>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;