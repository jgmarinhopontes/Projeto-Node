const user = {
    name: "Kauê",
    email: "klino@klino.com.br",
    birth: "1996/06/16",
    role: "student",
    active: true,
    showInfo: function() {
        console.log(this.name, this.email, this.birth, this.role, this.active)
    }
}

const admin = {
    name: "Kauê2",
    email: "za@za.com.br",
    role: "admin",
    createCourse(){
        console.log("Course created!")
    }
}

Object.setPrototypeOf(admin, user)
admin.createCourse()
admin.showInfo()

const show = function(){
    console.log(this.name)
}

show.call(user)

const showName = show.bind(user)

showName()