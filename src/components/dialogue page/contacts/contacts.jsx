import React from 'react';
import {NavLink} from 'react-router-dom';


class Contact extends React.Component {

    render() {

        let items = this.props.dialogTrees.map(item => {
            let expandTreeClick = () => {
                this.props.expandDialogTree(item.id)
            }

            let isActiveCon = () => {
                return this.props.activeContactId === item.id ? true: false
            }

            return (
                <div key={item.id} className="contacts__item">
                    <NavLink isActive={isActiveCon} className="contacts__link" to={"/messages/" + item.contactId} onClick={expandTreeClick} activeClassName="contacts__item__active">
                        <span className="contacts__link__wrap"></span>    
                        <img src={item.avatar} alt="avatar" className="avatar contacts__avatar"/>
                        <div className="contacts__row">
                            <span className="contacts__name">{item.firstName + ' ' + item.lastName}</span>
                            <span className="contacts__lastMessage">{item.messages[item.messages.length-1].message}</span>
                        </div>
                    </NavLink>
                </div>
            )
        })

        return(
                <div className="contacts">
                        <div className="contacts__header">
                            <div className="contacts__search">
                                <input type="text" placeholder="Find someone"/>
                            </div>
                        </div>
                        <div className="contacts__body">
                            {items}
                        </div>
                </div>
        )
    }

}

export default Contact;