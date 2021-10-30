import React from 'react';

class UserInfo extends React.Component {
    render () {
        return (
            <div className="userInfo">
                <div className="userInfo__col1">
                    <div className="userInfo__avatar">
                        <img src={this.props.data.avatar} alt={this.props.data.fullName} className="userInfo__image"/>
                    </div>
                </div>
                <div className="userInfo__col2">
                    <div className="userInfo__info info">
                        <div className="userInfo__block">
                            <h3 className="userInfo__title">
                                {this.props.data.fullName}
                            </h3>
                            <span className="userInfo__subtitle">
                                {this.props.data.status}
                            </span>
                            <span className="userInfo__divider"></span>
                        </div>
                        <div className="userInfo__row">
                            <div className="userInfo__item">
                                <span className="userInfo__category">Country:</span>
                            </div>
                            <div className="userInfo__item">
                                <span className="userInfo__subtitle">{this.props.data.country}</span>
                            </div>
                        </div>
                        <div className="userInfo__row">
                            <div className="userInfo__item">
                                <span className="userInfo__category">City:</span>
                            </div>
                            <div className="userInfo__item">
                                <span className="userInfo__subtitle">{this.props.data.city}</span>
                            </div>
                        </div>
                        <div className="userInfo__row">
                            <div className="userInfo__item">
                                <span className="userInfo__category">Language:</span>
                            </div>
                            <div className="userInfo__item">
                                <span className="userInfo__subtitle">{this.props.data.language}</span>
                            </div>
                        </div>
                        <div className="userInfo__row">
                            <div className="userInfo__item">
                                <span className="userInfo__category">University:</span>
                            </div>
                            <div className="userInfo__item">
                                <span className="userInfo__subtitle">{this.props.data.university}</span>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserInfo;