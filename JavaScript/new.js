// function User(name, email){
//     this.name = name
//     this.email = email

//     this.showInfos = function(){
//         return `${this.name}, ${this.email}`
//     }
// }

// // const newUser = new User('Kauê', 'k@k.com')
// // console.log(newUser.showInfos())

// function Admin(role){
//     User.call(this, 'Kauê', 'k@k.com')
//     this.role = role || 'student'
// }

// Admin.prototype = Object.create(User.prototype)
// const newUser = new Admin('admin')
// console.log(newUser.showInfos())
// console.log(newUser.role)

const user = {
    init: function(name, email){
        this.name = name
        this.email = email
    },

    showInfos: function(name){
        return this.name
    }
}

const newUser = Object.create(user)
newUser.init('Kauê', 'k@k.com')
console.log(newUser.showInfos())
// console.log(user.isPrototypeOf(newUser))


