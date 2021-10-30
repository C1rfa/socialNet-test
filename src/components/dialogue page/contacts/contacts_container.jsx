//import React from 'react';
import {connect} from 'react-redux'

//actionCreators
import {getDialogTreeCreator} from './../../../redux/dialogPage_reducer'

//Компоненты
import Contacts from './contacts'

let mapStateToProps = (state) => {
    return {
        activeContactId: state.dialogsPage.currentDialogTree.id,
        dialogTrees: state.dialogsPage.dialogTrees
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        expandDialogTree: (dialogId) => {dispatch(getDialogTreeCreator(dialogId))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Contacts)

