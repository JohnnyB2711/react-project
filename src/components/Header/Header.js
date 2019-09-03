import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {Button, Image, InputGroup, FormControl, Row, Col} from 'react-bootstrap';
import './Header.scss'

function SearchLine() {
    return (
        <InputGroup>
            <FormControl
                placeholder='Enter movie...'
            />
        </InputGroup>
    )
}

function SearchButton() {
    return (
        <Button className='SearchButton'>Search</Button>
    )
}

function Header() {
    return (
        <header className='Header d-flex flex-row'>
            <h1 className='Title'>Movie</h1>
            <SearchLine/>
            <SearchButton/>
        </header>
    );
}

export default Header;