import React from 'react';

//Компоненты
import Contact from './contacts/contacts_container'
import Message from './messages/message_container'

class Dialogs extends React.Component {
    
    render () {
        return (
            <div className="dialogs">
                <Contact/>
                <Message/>
            </div>        
        )
    }
}

export default Dialogs;