

class user{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get password(){
        return `${this._password}babar`
    }

    set password(value){
        this._password = this.value
    }
}

const first = new user('babar@google.com', 'abc')
console.log(first.password);