import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/reduxStore'


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);



// let renderTree = (state)=> {
//   ReactDOM.render(
//     <React.StrictMode>
//       <App state={state} dispatch={store.dispatch.bind(store)}/>
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// }

// renderTree(store.getState())
// store.subscribe(()=>{
//   let state = store.getState()
//   renderTree(state);
// })


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
