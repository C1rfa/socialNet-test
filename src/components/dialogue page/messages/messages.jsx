import React from 'react';


class Message extends React.Component {

    render () {
        
        let items;
        if (this.props.data)
        {
            items = this.props.data.map(item => {
                return (
                    <div className="messages__item">
                        <div className="messages__row">
                            <img src={item.avatar} alt="" className="avatar messages__avatar"/>
                            <span className="messages__name">{item.firstName}</span>
                            <span className="messages__time">{item.messageTime}</span>
                        </div>
                        <div className="messages__row">
                            <span className="messages__text">{item.message}</span>
                        </div>
                    </div>
                )
            })
        }

        let renderInput = () => {

            let inputText = React.createRef()

            let onChangeText = () => {
                if (inputText.current.value)
                    this.props.changeNewMessageText(inputText.current.value)
            }

            let sendMessage = () => {
                let date = new Date()
                let thDt = date.getHours() + ':' + date.getMinutes() + ' ' + date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
                this.props.sendMessage(this.props.treeId, this.props.authorId, thDt)
            }

            return (
                <div className="messages__footer">
                    <textarea type="text" ref={inputText} value={this.props.newMessageText} onChange={onChangeText} className="messages__input"/>
                    <button className="message__send" onClick={sendMessage}>Send</button>
                </div>
            )
        }

        return (
            <div className="messages">
                <div className="messages__body">
                    {items ? items.reverse(): null}
                </div>  
                {items ? renderInput(): null}
            </div>
        )
    }
}
export default Message;