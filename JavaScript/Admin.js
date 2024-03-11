import User from "./User.js";

export default class Admin extends User {
    constructor(name, email, birth, role = 'admin', active = true){
        super(name, email, birth, role, active)
    }

    showInfos(){
        return `${this.name}, ${this.email}, ${this.birth}, ${this.role}, ${this.active}`
    }

    createCourse(courseName, vacancies){
        return `Course ${courseName} created with ${vacancies} vacancies`
    }
}