import {connect} from 'react-redux'
import Post from './post'

import {likeClickCreator, editPostTextCreator, deletePostCreator, changePostStatusCreator, returnPreviousVersionCreator, changeNewPostCreator, createNewPostCreator } from './../../../redux/user_reducer'


let mapStateToProps = (state) => {
    return {
        data: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        id: state.profilePage.userInfo.id,
        avatar: state.profilePage.userInfo.avatar,
        fullName: state.profilePage.userInfo.fullName,
    }

}

let mapDispatchToProps = (dispatch) => {
    return {
        onClickPostBtn: (userId, currentDate)=> {dispatch(createNewPostCreator(userId,currentDate))},
        onChangePostText: (text)=> {dispatch(changeNewPostCreator(text))},
        likeClick: (userId, postId, likeStatus)=> {dispatch(likeClickCreator(userId, postId, likeStatus))},
        editClick: (postId)=> {dispatch(changePostStatusCreator(postId))},
        deletePostClick: (postId) =>{dispatch(deletePostCreator(postId))},
        restorePostClick: (postId) => {dispatch(returnPreviousVersionCreator(postId))},
        editPost: (postId, newText) => {dispatch(editPostTextCreator(postId, newText))},
    }
}

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Post)

export default PostContainer;