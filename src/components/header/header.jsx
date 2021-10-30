import React from 'react';

//Изображения
import logo from './../../img/navbar/logo.png'

class Header extends React.Component {
    render () {
        return (
            <div className='header'>
                <div className="navbar-logo d-flex justify-content-center align-items-center">
                    <img src={logo} alt="logo"/>
                </div>
            </div>
        )
    }
}

export default Header;