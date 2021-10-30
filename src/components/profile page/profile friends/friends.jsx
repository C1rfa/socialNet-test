import React from 'react';


class FriendList extends React.Component {
    render(){
            let items = this.props.data.map(item => {
                return (
                    <div className="friends__item">
                        <a href={'/'+ item.id } className="friends__link">
                            <img src={item.avatar} alt="" className="friends__avatar"/>
                            <span className="friends__name">{item.firstName}</span>
                            <span className="friends__wrap"></span>
                        </a>
                    </div>
                )
            })

            return (
                <div className="friends">
                    {items}
                </div>
            )
    }
}

export default FriendList;