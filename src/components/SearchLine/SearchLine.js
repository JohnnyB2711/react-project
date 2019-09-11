import {FormControl, InputGroup} from "react-bootstrap";
import React from 'react';


class SearchLine extends React.Component {
    render() {
        return (
            <InputGroup className='SearchInput'>
                <FormControl
                    placeholder='Enter movie...'
                />
            </InputGroup>
        )
    }
}
export default SearchLine
