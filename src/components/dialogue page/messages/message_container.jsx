//import React from 'react';
import {connect} from 'react-redux'

//actionCreators
import {sendMessageCreator, changeNewMessageCreator} from '../../../redux/dialogPage_reducer'


//Компоненты
import Message from './messages'

let mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText,
        treeId: state.dialogsPage.currentDialogTree.id,
        authorId: 1,                                                                //ХардКОД - исправить
        data: state.dialogsPage.currentDialogTree.messages
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (treeId, authorId, date) => {dispatch(sendMessageCreator(treeId, authorId, date))},
        changeNewMessageText: (text) => {dispatch(changeNewMessageCreator(text))},
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Message)