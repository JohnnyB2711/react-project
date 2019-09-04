import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {Button, Image, InputGroup, FormControl, Row, Col} from 'react-bootstrap';
import './Header.scss'

function SearchLine() {
    return (
        <InputGroup className='SearchInput'>
            <FormControl
                placeholder='Enter movie...'
            />
        </InputGroup>
    )
}

function SearchButton() {
    return (
        <Button className='SearchButton'></Button>
    )
}

function Header() {
    return (
        <header className='container-fluid Header d-flex flex-row'>
            <div className='HeaderContent'>
                <h1 className='Title'>Movie</h1>
                <div className='SearchBlock'>
                    <SearchLine/>
                    <SearchButton/>
                </div>
            </div>
        </header>
    );
}

export default Header;