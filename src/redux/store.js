import {User} from './classes/user'
import {Post} from './classes/post'
//Reducers
import {userReducer} from './user_reducer'

let renderTree = ""


//TEST
let mitski = new User('https://unendingkissnyc.files.wordpress.com/2015/10/16662210274_7db295d621_o.jpg?w=1400', 'Mitski', 'Miyawaki', 'USA', 'New York City', 'Hunter College', 'English')
let girlInRed = new User('https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Girl_in_Red_EOTR1.jpg/220px-Girl_in_Red_EOTR1.jpg', 'Mary', 'Ulven', 'Norway', 'Oslo', 'Westerdals Oslo School of Arts, Communication and Technology', 'English')

mitski.addFriend(girlInRed)
girlInRed.addFriend(mitski)

let store = {
    _state: {
        users: [
            {
                user: mitski,
                user_posts: {
                    posts:[
                        {
                            post: new Post (mitski.id, 'I guess I couldn\'t help trying to be the best American girl', '20:20 28/8/2020'),
                            comments: []
                        },
                        {
                            post: new Post (mitski.id, 'But I do, I finally do', '21:03 28/8/2020'),
                            comments: []
                        }
                    ],
                    newPostText: ''
                }
            },
            {   
                user: girlInRed,
                user_posts: {
                    posts:[
                       {
                           post:  new Post (girlInRed.id, 'Oh Hannah I wanna feel you close', '20:20 28/8/2020'),
                           comments: []
                       },
                       {
                           post: new Post (girlInRed.id, 'Oh Hannah Come lie with my bones', '21:03 28/8/2020'),
                           comments: []
                       }
                    ],
                    newPostText: ''
                }
            }
        ],   
    },

    dispatch(action) {
        this._state.users = userReducer(this._state.users,action)
        renderTree(this._state)
    },

    getState() {
        return this._state
    },

    subscriber(observer) {
         renderTree = observer
    },
}
export default store;
window.state = store._state