export class User {
    _id
    _avatar
    _firstName
    _lastName
    _country
    _city
    _university
    _language

    constructor(avatar,firstName, lastName, country, city, university, language) {
        this._id = User._incrementId()
        this._avatar = avatar
        this._firstName = firstName
        this._lastName = lastName
        this._country = country
        this._city = city
        this._university = university
        this._language = language
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

     //avatar
     get avatar () {
        return this._avatar
    }

     set avatar (newAvatar) {
         this._avatar = newAvatar
     }


    //Имя
    get firstName () {
        return this._firstName
    }

    set firstName (newFirstName) {
        this._firstName = newFirstName
    }

    get lastName () {
        return this._lastName
    }

    set lastName (newLastName) {
        this._firstName = newLastName
    }

    get fullName() {
        return this._firstName + ' ' + this._lastName
    }

    //Страна
    get country () {
        return this._country
    }

    set country (newCountry) {
        this._country = newCountry
    }

     //Город
     get city () {
        return this._city
    }

    set city (newCity) {
        this._city = newCity
    }

     //Университет
     get university () {
        return this._university
    }

    set university (newUniversity) {
        this._university = newUniversity
    }

     //Язык
     get language () {
        return this._language
    }

    set language (newLanguage) {
        this._language = newLanguage
    }
}