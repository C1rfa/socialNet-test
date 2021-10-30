//import React from 'react';
import {connect} from 'react-redux'

//Компоненты
import UserInfo from './userInfo'

let mapStateToProps = (state) => {
    return {
        data: state.profilePage.userInfo
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

let userInfoContainer = connect(mapStateToProps,mapDispatchToProps) (UserInfo)


export default userInfoContainer