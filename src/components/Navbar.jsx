import React from 'react'
import "./Navbar.css"
import PropTypes from 'prop-types';

export default function Navbar(props) {
    return (
        <div className='navbar'>
            <h1>{props.title}</h1>     
        </div>
    )
}

Navbar.defaultProps = {
    title:"Hello",
}
Navbar.propTypes = {
    title: PropTypes.bool,

};




