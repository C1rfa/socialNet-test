import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';

class Post extends React.Component {

    render() {
        let items = this.props.data.map((item) => {

            let editText = React.createRef()
    
            let restorePostClick = () => {
                this.props.restorePostClick(item.id)
            }
    
            let isLiked = () => {                                                                             //ПОМЕНЯТЬ ПОСЛЕ ИЗУЧЕНИЯ МЕХАНИЗМА АУТЕНТИФИКАЦИИ
                if (item.liked.find(id => this.props.id === id))
                    return (
                        <i className="pe-7s-like2 pe-inverse post__icon"></i>
                    )
                else
                    return (
                        <i className="pe-7s-like pe-inverse post__icon"></i>
                    )     
            }
    
            let isEdited = () => {
                if (item.lastVers.length > 0)
                    return (
                        <div className="post__row">
                            <span className="post__name">{this.props.fullName}</span>
                            <span className="post__date">Originally publicated at {item.lastVers[0].date}</span>
                            <span className="post__date">Last edited {item.date}</span>
                        </div>
                    )
                else
                    return (
                        <div className="post__row">
                            <span className="post__name">{this.props.fullName}</span>
                            <span className="post__date">{item.date}</span>
                        </div>
                    )
            }
    
            let isRestorable = () => {
                if (item.lastVers.length > 0)
                    return ( 
                        <button onClick={restorePostClick} className="post__previousVers">
                            <i className="pe-7s-prev pe-inverse"></i>
                        </button>
                    )
            }
    
    
            let likeClick = () => {
                this.props.likeClick(this.props.id, item.id, item.liked.find(id => this.props.id === id) ? false : true )
            }
    
            let postEditSwitcher = () => {
                this.props.editClick(item.id)
            }
    
            let postDelete = () => {
                this.props.deletePostClick(item.id)
            }
    
            let editPostOnChange = () => {
                this.props.editPost(item.id, editText.current.value)
            }
    
            if (item.isEdit)
            {
                return (
                    <div className="post__item">
                        <div className="post__title">
                            <img className='avatar' src={this.props.avatar} alt="avatar"/>
                            <div className="post__row">
                                <span className="post__name">{this.props.fullName}</span>
                            </div>
                        </div>
                        <div className="post__body">
                            <TextareaAutosize ref={editText} value={item.text} onChange={editPostOnChange} className="post__input"/>
                            <button className="post__ok" onClick={postEditSwitcher}>
                                Done
                            </button>
                        </div>
                    </div>
                )}
            else 
            {
                return (
                    <div className="post__item" key={item.id}>
                        <div className="post__title">
                            <img className='avatar' src={this.props.avatar} alt="avatar"/>
                            {isEdited()}
                            <div className="post__buttons">
                                {isRestorable()}
                                <button onClick={postEditSwitcher} className="post__edit">
                                    <i className="pe-7s-pen pe-inverse"></i>
                                </button>
                                <button onClick={postDelete} className="post__delete">
                                    <i className="pe-7s-close-circle pe-inverse"></i>
                                </button>
                            </div>
                        </div>
                        <div className="post__body">
                            <span className="post__text">{item.text}</span>
                        </div>
                        <div className="post__footer">
                            <button onClick={likeClick} className="post__like-button">
                                {isLiked()}
                                <span className="post__like">{item.liked.length}</span>
                            </button>
                        </div>
                    </div>
            )}
        })
    
        let postText = React.createRef()
        let onChangePostText = () =>
        {
            this.props.onChangePostText(postText.current.value)
        }
    
        let onClickPostBtn = () =>                                                                                                                                     //ИЗМЕНИТЬ ПОСЛЕ ИЗУЧЕНИЯ АУТЕНТИФИКАЦИИ
        {   let date = new Date();
            let currentDate = date.getHours() + ':' + date.getMinutes() + ' ' + date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
            this.props.onClickPostBtn(this.props.id, currentDate)
        }
    
        return (
            <div className="post">
                <div className="post__form">
                        <TextareaAutosize onChange={onChangePostText} value={this.props.newPostText} ref={postText} className="post__input"/>
                        <button onClick={onClickPostBtn} className="post__btn">New post</button>
                </div>
                {items.reverse()}
            </div>
        )
    }

}

export default Post;