class user{
    constructor(){
        this.a = 10;
        this.b = 30;
    }
    sum(){
        return this.a + this.b;
    }
    sub(){
        return this.a - this.b;
    }
    mul(){
        return this.a * this.b;
    }
    div(){
        return this.a / this.b;
    }
    mod(){
        return this.a % this.b;
    }
}
let u = new user()
console.log("🚀 ~ file: class.js:7 ~ u:", u)
let add = u.sum()
console.log("Additon is:", add)
let multipl = u.mul()
console.log("Subtraction Is:", multipl)
let divide = u.div()
console.log("Division is:", divide)
let mdl = u.mod()
console.log("Module is:", mdl)