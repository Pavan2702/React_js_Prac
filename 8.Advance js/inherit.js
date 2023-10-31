class log_in {
    constructor(obj) {
        this.FeeAmount = obj.fees;
        this.Salary = obj.slr;
    }
    login() {
        console.log("Log in----->");
    }
}
class student extends log_in {
    // login(){
    //     console.log("Student's Log in----->");
    // }
    fee() {
        console.log("Fee is----->", this.FeeAmount);
    }
}
class teacher extends log_in {
    // login(){
    //     console.log("Teacher's Log in----->");
    // }
    constructor(obj,per) {
        super(obj)
        this.incrementPercentage = per;
    }
    incrementSalary() {
        const newSalary = this.Salary * (this.incrementPercentage / 100);
        console.log(`My salary After will be ${newSalary + this.Salary} after 1 year`)
    }
    salary() {
        console.log("salary is----->", this.Salary);
    }
}
let obj = {
    fees: 3000,
    slr: 1000
};
const STD = new student(obj)
STD.login()
STD.fee()
//const LOG = new log_in()
// LOG.login()
const TECH = new teacher(obj,20)
TECH.login()
TECH.incrementSalary()
// TECH.salary()
// TECH.fee()