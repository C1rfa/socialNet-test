//import React from 'react';
import {connect} from 'react-redux'

//Компоненты
import {UserList} from './userList'

//ActionCreators
import {changeFriendsStatusCreator} from './../../redux/usersPage_reducer'

let mapStateToProps = (state) => {
    return {
        data: state.usersPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        friendBtnClick: (userId, status) => {dispatch(changeFriendsStatusCreator(userId, status))},
    }
}



export default connect(mapStateToProps,mapDispatchToProps) (UserList)