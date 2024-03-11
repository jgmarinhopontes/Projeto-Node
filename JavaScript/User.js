export default class User {
    #name
    #email
    #birth
    #role
    #active
    constructor(name, email, birth, role, active = true){
        this.#name = name
        this.#email = email
        this.#birth = birth
        this.#role = role || 'student'
        this.#active = active
    }

    get name(){
        return this.#name
    }

    get email (){
        return this.#email
    }

    get birth (){
        return this.#birth
    }

    get role (){
        return this.#role
    }

    get active (){
        return this.#active
    }

    set name(newName){
        if (newName === ''){
            throw new Error("empty name")
        }
        this.#name = newName
    }

    // #mountObjUser(){
    //     return({
    //         name: this.#name,
    //         email: this.#email,
    //         birth: this.#birth,
    //         role: this.#role,
    //         active: this.#active
    //     })
    // }

    showInfos(){
        //const objUser = this.#mountObjUser()
        return `${this.name}, ${this.email}, ${this.birth}, ${this.role}, ${this.active}`
    }
}