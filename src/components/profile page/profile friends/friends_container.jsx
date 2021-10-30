//import React from 'react';
import {connect} from 'react-redux'

//Компоненты
import friends from './friends'

let mapStateToProps = (state) => {
    return {
        data: state.profilePage.friends
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

let friendsContainer = connect(mapStateToProps,mapDispatchToProps) (friends)


export default friendsContainer