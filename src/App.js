import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';


//css'ы
import './css/style.css';
import './css/pe-icon-7-stroke.css'
import './css/helper.css'

//Компоненты
import Header from'./components/header/header';
import Nav from './components/navigation/nav';
import UserList from './components/users page/usersContainer'
import Dialogs from './components/dialogue page/dialogs';
import {Profile} from './components/profile page/profile'

const App = (props) => {
  return (
    <BrowserRouter>
       <div className='container'>
            <Header/>
            <Nav/>
            <Route path='/messages' render={() => <Dialogs/>} />
            <Route path='/profile' render={() => <Profile/>}/>
            <Route path='/userlist' render={() => <UserList/>}/>
        </div>
    </BrowserRouter>
  );
}

export default App;
