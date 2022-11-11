var name = ""
var password = ""

function RequestData() {
    name = prompt("Your name:")
    password = prompt("Your password:")
}

function ReturnTrueOrFalse(name,password){
    var nameRequested = prompt("Name:")
    var passwordRequested = prompt("Password")
    if(nameRequested === name && passwordRequested === password){
        return true
    }else{
        return false
    }
}

RequestData()
console.log(ReturnTrueOrFalse(name,password))