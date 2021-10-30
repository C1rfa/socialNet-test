import React from 'react';


import UserInfoContainer from './profile userInfo/userInfo_container'
import FriendsContainer from './profile friends/friends_container' 
import PostsContainer from './profile post/post_container'

export class Profile extends React.Component {
    render () {
        return(
            <div className="profile">
                <UserInfoContainer /> 
                <FriendsContainer />
                <PostsContainer />
            </div>
        )
    }
}