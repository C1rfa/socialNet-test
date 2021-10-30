//Action type 
const getDialogTreeAction = 'getDialogTree'
const sendMessageAction = 'sendMessage'
const changeNewMessageAction = 'changeNewMessage'

//Action creators
export const getDialogTreeCreator = (id) =>
{
    return({
        type: getDialogTreeAction,
        id: id,
    })
}

export const changeNewMessageCreator = (text) =>
{
    return({
        type: changeNewMessageAction,
        text: text,
    })
}

export const sendMessageCreator = (treeId, authorId, date) => {
    return ({
        type: sendMessageAction,
        treeId: treeId,
        authorId: authorId,
        date: date,
    })
}


let initialState = {
    myId: 1,
    newMessageText: '',
    currentDialogTree: {},

    dialogTrees: [
        {
            id: 1,
            avatar:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Girl_in_Red_EOTR1.jpg/220px-Girl_in_Red_EOTR1.jpg',
            firstName: 'Mary',
            lastName: 'Ulven',
            contactId: 2,
            messages:[
                {
                    authorId: 2,
                    avatar:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Girl_in_Red_EOTR1.jpg/220px-Girl_in_Red_EOTR1.jpg',
                    firstName: 'Mary',
                    lastName: 'Ulven',
                    messageTime: '23:03 21/9/2020',
                    message: 'Oh Hannah, I wanna feel you close' 
                },
                {
                    authorId: 2,
                    avatar:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Girl_in_Red_EOTR1.jpg/220px-Girl_in_Red_EOTR1.jpg',
                    firstName: 'Mary',
                    lastName: 'Ulven',
                    messageTime: '23:04 21/9/2020',
                    message: 'This is my new song! How you like it?' 
                },
                {
                    authorId: 1,
                    avatar:'https://unendingkissnyc.files.wordpress.com/2015/10/16662210274_7db295d621_o.jpg?w=1400',
                    firstName: 'Mitski',
                    lastName: 'Miyawaki',
                    messageTime: '00:03 22/9/2020',
                    message: 'Cool!' 
                },
                {
                    authorId: 1,
                    avatar:'https://unendingkissnyc.files.wordpress.com/2015/10/16662210274_7db295d621_o.jpg?w=1400',
                    firstName: 'Mitski',
                    lastName: 'Miyawaki',
                    messageTime: '00:05 22/9/2020',
                    message: 'Thats my girl ^_^!' 
                },
            ]
        },
        {
            id: 2,
            avatar:'https://unendingkissnyc.files.wordpress.com/2015/10/16662210274_7db295d621_o.jpg?w=1400',
            firstName: 'Test',
            lastName: 'Test',
            contactId: 999,
            messages:[
                {
                    authorId: 2,
                    avatar:'https://unendingkissnyc.files.wordpress.com/2015/10/16662210274_7db295d621_o.jpg?w=1400',
                    firstName: 'Test',
                    lastName: 'Test',
                    messageTime: '00:03 22/9/2020',
                    message: 'THis' 
                },
                {
                    authorId: 2,
                    avatar:'https://unendingkissnyc.files.wordpress.com/2015/10/16662210274_7db295d621_o.jpg?w=1400',
                    firstName: 'Test',
                    lastName: 'Test',
                    messageTime: '00:03 22/9/2020',
                    message: 'IS' 
                },
                {
                    authorId: 1,
                    avatar:'https://unendingkissnyc.files.wordpress.com/2015/10/16662210274_7db295d621_o.jpg?w=1400',
                    firstName: 'Mitski',
                    lastName: 'Miyawaki',
                    messageTime: '00:04 22/9/2020',
                    message: 'TEST' 
                },
                {
                    authorId: 1,
                    avatar:'https://unendingkissnyc.files.wordpress.com/2015/10/16662210274_7db295d621_o.jpg?w=1400',
                    firstName: 'Mitski',
                    lastName: 'Miyawaki',
                    messageTime: '00:05 22/9/2020',
                    message: 'Ahhha' 
                },
            ]
        },
    ]
}

export const dialogPageReducer = (state = initialState, action) => {

    let getDialogTree = (state, dialogId) => {
        state.currentDialogTree = state.dialogTrees.find(x => x.id  === dialogId)
    }

    let sendNewMessage = (state, treeId, authorId, date) => {
        let dialogTree = state.dialogTrees.find(x => x.id  === treeId)
        dialogTree.messages.push({
            authorId: authorId,
            avatar:'https://unendingkissnyc.files.wordpress.com/2015/10/16662210274_7db295d621_o.jpg?w=1400',           //хардкод ИСПРАВИТЬ 
            firstName: 'Mitski',                                                                                        //хардкод ИСПРАВИТЬ
            lastName: 'Miyawaki',                                                                                       //хардкод ИСПРАВИТЬ
            messageTime: date,
            message: state.newMessageText, 
        })
        state.currentDialogTree = dialogTree
        state.newMessageText = ''
    }

    let changeNewMessage = (state, text) => {
        state.newMessageText = text
    }

    let stateCopy = {...state}
    stateCopy.dialogTrees = [...state.dialogTrees]

    switch(action.type)
    {
        case getDialogTreeAction:
            getDialogTree(stateCopy, action.id)
            break
        case sendMessageAction:
            sendNewMessage(stateCopy, action.treeId, action.authorId, action.date)
            break
        case changeNewMessageAction:
            changeNewMessage(stateCopy, action.text)
            break
        default:
            console.log("MessagesReducer: NOPE")
            break;
    }

    return stateCopy
}