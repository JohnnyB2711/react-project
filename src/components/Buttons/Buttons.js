import React from 'react'
import '../Header/Header.scss'
import {Button} from 'react-bootstrap';

function Buttons() {
    return(
        <div className='buttons'>
            <Button className='add' variant="primary"></Button>
            <Button className='check' variant="primary"></Button>
        </div>
    )

}
export default Buttons