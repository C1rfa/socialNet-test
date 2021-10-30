import React from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends React.Component {
   render () {
      return (
         <nav className='nav d-block'>
            <li className="nav-item nav__items">
                <NavLink className="nav-link nav__link" to="/profile" activeClassName="nav__link__active" > {/*Временное решение*/}
                   <span></span>
                   <i className="pe-7s-home pe-inverse nav__icon"></i> 
                   Profile
                </NavLink>
             </li>
             <li className="nav-item nav__items">
                <NavLink to="/messages" className="nav-link nav__link" activeClassName="nav__link__active">
                   <span></span>
                   <i className="pe-7s-chat pe-inverse nav__icon"></i>
                   Messages
                </NavLink>
             </li>
             <li className="nav-item nav__items">
                <NavLink to="/userlist" className="nav-link nav__link" activeClassName="nav__link__active">
                   <span></span>
                   <i className="pe-7s-users pe-inverse nav__icon"></i>
                   Users
                </NavLink>
             </li>
             <li className="nav-item nav__items">
                <NavLink to="/feed" className="nav-link nav__link" activeClassName="nav__link__active">
                   <span></span>
                   <i className="pe-7s-news-paper pe-inverse nav__icon"></i>
                   News
                </NavLink>
             </li>
             <li className="nav-item nav__items">
                <NavLink to="/music" className="nav-link nav__link" activeClassName="nav__link__active">
                   <span></span>
                   <i className="pe-7s-musiclist pe-inverse nav__icon"></i>
                   Music
                </NavLink>
             </li>
             <li className="nav-item nav__items">
                <NavLink to="/settings" className="nav-link nav__link" activeClassName="nav__link__active">
                   <span></span>
                   <i className="pe-7s-tools pe-inverse nav__icon"></i>
                   Settings
                </NavLink>
             </li>
         </nav>
     );
   }
}

export default Nav;