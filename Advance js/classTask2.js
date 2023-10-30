class email{
    constructor(mail){
        this.mail =mail
    }
    getName(){
        return this.mail.split("@")[0]
    }
    getExtension(){
        return this.mail.split("@")[1].split(".")[0]
    }
    getDomain(){
        return this.mail.split(".")[1]
    }
}
let Mail = new email("kaushikpatil42161@gmail.com")
console.log("🚀 ~ file: classTask.js:10 ~ Mail:", Mail)
let Name = Mail.getName()
console.log("🚀 ~ file: classTask.js:12 ~ Name:", Name)
let Extension = Mail.getExtension()
console.log("🚀 ~ file: classTask.js:20 ~ Extension:", Extension)
let Domain = Mail.getDomain()
console.log("🚀 ~ file: classTask.js:12 ~ Name:", Domain)
