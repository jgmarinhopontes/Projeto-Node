import User from "./User.js";

export default class Faculty extends User {
    constructor(name, email, birth, role = 'faculty', active = true){
        super(name, email, birth, role, active)
    }

    approveStudent(student, course){
        return `student ${student} approved on the course ${course}`
    }
}