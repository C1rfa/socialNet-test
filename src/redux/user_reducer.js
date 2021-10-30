import {Post} from './classes/post'
import {User} from './classes/user'

//Action type
const changeNewPostAction='changeNewPostText'
const createNewPostAction='createNewPost'
const likeClickAction='likeClick'
const changePostStatusAction='changePostStatus'
const editPostTextAction='editPostText'
const deletPostAction='deletePost'
const returnPreviousVersionAction='returnPreviousVersion'



//Action creator
export let likeClickCreator = (userId, postId, likeStatus) => {
    return {
        type: likeClickAction,
        userId: userId,
        postId: postId,
        likeStatus: likeStatus,
    }
}

export let changeNewPostCreator = (newText) => {
    return {
        type: changeNewPostAction,
        text: newText,
    }
}

export let createNewPostCreator = (userId,date) => {
    return {
        type: createNewPostAction,
        userId: userId,
        date: date
    }
}

export let editPostTextCreator = (postId, newText) => {
    return {
        type: editPostTextAction,
        postId: postId,
        newText: newText
    }
}

export let deletePostCreator = (postId) => {
    return {
        type: deletPostAction,
        postId: postId,
    }
}

export let changePostStatusCreator = (postId) => {
    return {
        type: changePostStatusAction,
        postId: postId
    }
}

export let returnPreviousVersionCreator = (postId) => {
    return {
        type: returnPreviousVersionAction,
        postId: postId
    }
}

//TEST
let mitski = new User('https://unendingkissnyc.files.wordpress.com/2015/10/16662210274_7db295d621_o.jpg?w=1400', 'Mitski', 'Miyawaki', 'USA', 'New York City', 'Hunter College', 'English')
let girlInRed = new User('https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Girl_in_Red_EOTR1.jpg/220px-Girl_in_Red_EOTR1.jpg', 'Mary', 'Ulven', 'Norway', 'Oslo', 'Westerdals Oslo School of Arts, Communication and Technology', 'English')

let intialState = {
        userInfo: mitski,
        posts:[
                new Post (mitski.id, 'I guess I couldn\'t help trying to be the best American girl', '20:20 28/8/2020'),
                new Post (mitski.id, 'But I do, I finally do', '21:03 28/8/2020'),
            ],
        friends: [{
            id: girlInRed.id,
            avatar: girlInRed.avatar,
            firstName: girlInRed.firstName
        }], //Test
        newPostText: ''
}

export const userReducer = (state = intialState, action) => {
    
    let changeNewPostText = (stateCopy, newText) => {
        stateCopy.newPostText = newText
    }

    let createNewPost = (stateCopy, userId, date) => {
        let newPost = new Post(userId, stateCopy.newPostText, date)

        stateCopy.posts.push(newPost)
        stateCopy.newPostText = ''
    }

    let likeClick = (stateCopy, userId, postId, likeStatus) => {
        let postObject = stateCopy.posts.find(x => x.id === postId)

        if(likeStatus)
            postObject.wasLiked(userId)
        else
            postObject.wasDisliked(userId)
    }

    let editPostText = (stateCopy, postId, newText) => {                       //ОЧЕНЬ ТУПОЙ МЕТОД РЕДАКТИРОВАНИЯ В ЛОБ. ИСПРАВИТЬ КАК НИБУДЬ ПОТОМ
        let postObject = stateCopy.posts.find(x => x.id === postId)

        postObject.text = newText
    }      

    let deletePost = (stateCopy, postId) => {
        let postIndex = stateCopy.posts.findIndex(x => x.id === postId)

        stateCopy.posts.splice(postIndex,1)
    }

    let changePostStatus = (stateCopy, postId) => {
        let postObject = stateCopy.posts.find(x => x.id === postId)

        if (postObject.isEdit)
        {
            postObject.isEdit=false
            if (postObject.text !== postObject.lastVers[postObject.lastVers.length-1].text)
            {
                let date = new Date()
                postObject.date = date.getHours() + ':' + date.getMinutes() + ' ' + date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
            }
            else
                postObject.lastVers.pop()
        }
        else
        {
            postObject.saveLastVersion(postObject)
            postObject.isEdit=true
        }

    }

    let returnPreviousVersion = (stateCopy, postId) => {
        let postObject = stateCopy.posts.find(x => x.id === postId)
        postObject.restoreLastVersion()
    }


    //StateCopy 
    let stateCopy = {...state}
    stateCopy.posts = [...state.posts]
    stateCopy.friends = [...state.friends]

    switch(action.type)
    {
        case changeNewPostAction:
            changeNewPostText(stateCopy, action.text)
            break
        case createNewPostAction:
            createNewPost(stateCopy, action.userId ,action.date)
            break
        case likeClickAction:
            likeClick(stateCopy, action.userId, action.postId, action.likeStatus)
            break
        case editPostTextAction:
            editPostText(stateCopy, action.postId, action.newText)
            break
        case deletPostAction:
            deletePost(stateCopy, action.postId)
            break
        case changePostStatusAction:
            changePostStatus(stateCopy, action.postId)
            break
        case returnPreviousVersionAction:
            returnPreviousVersion(stateCopy, action.postId)
            break
        default:
            console.log("NOPE")
    }
    
    return stateCopy
}

