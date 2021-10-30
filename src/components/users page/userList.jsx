import React from 'react';

export class UserList extends React.Component {
    render () {
        let items = this.props.data.userList.map( item => {

            let friendClick = () => {
                this.props.friendBtnClick(item.id, item.isFriend ? false : true)
            }
    
            
            let isFriend = () => {
                 if (item.isFriend)
                    return (
                        <button onClick={friendClick} className="users__btn users__btn--remove">
                            <span className="pe-7s-delete-user pe-4x pe-inverse"></span>
                        </button>
                    )
                else
                    return (
                        <button onClick={friendClick} className="users__btn users__btn--add">
                            <span className="pe-7s-add-user pe-4x pe-inverse"></span>
                        </button>
                    )
             }
    
            return (
                <div className="users__item" key={item.id}>
                        <img src={item.avatar} alt="" className="users__avtr"/>
                        <div className="users__header">
                            <span className="users__title">{item.firstName + " " + item.lastName}</span>
                            <span className="users__subtitle">{item.country}</span>
                            <span className="users__subtitle">{item.city}</span>
                            <span className="users__subtitle">{item.language}</span>
                        </div>          
                        <div className="users__footer">
                            {isFriend()}
                        </div>
                </div>
            )
        })
        
        return (
            <div className="users">
                {items}
            </div>
        )
    }
}