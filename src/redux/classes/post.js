export class Post {
    _id 
    _authorId
    _text
    _date
    _isEdit
    _lastVers = []
    _liked = []

    constructor (authorId, text, date) {
        this._id = Post._incrementId()
        this._authorId = authorId
        this._text = text
        this._date = date
        this._isEdit = false
    }

    static _incrementId() {
        if (!this._latestId)
            this._latestId = 1
        else
            this._latestId++
        return this._latestId
    }

    //id
    get id () {
        return this._id
    }

    //authorId
    get authorId () {
        return this._authorId
    }

    //text
    set text (newText) {
        this._text = newText
    }

    get text () {
        return this._text
    }

    //date
    get date () {
        return this._date
    }

    set date (newDate) {
        this._date = newDate
    }

    //status
    get isEdit () {
        return this._status
    }

    set isEdit (newStatus) {
        this._status = newStatus
    }

    saveLastVersion (oldPost) {
        this._lastVers.push ({
            text: oldPost.text,
            date: oldPost.date
        })
    }

    restoreLastVersion () {
        let oldPost = this._lastVers.pop()
        this._text = oldPost.text
        this._date = oldPost.date
    }

    //lastVers
    get lastVers () {
        return this._lastVers
    }
    
    //liked
    get liked () {
        return this._liked
    }

    wasLiked (userId) {
        this._liked.push(userId)
    }

    wasDisliked (userId) {
        let userIndex = this._liked.findIndex( (id) => id === userId)
        this._liked.splice(userIndex,1)
    }
}