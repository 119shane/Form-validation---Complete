const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirm = document.getElementById("confirm")

// Functions

function usernameErrFunc(username, msg) {
    const inputContainer = username.parentElement
    inputContainer.className = "input_container error"
    const small = inputContainer.querySelector("small")
    small.textContent = msg
}

function userInputSuccFunc(input, msg) {
    const inputContainer = input.parentElement
    inputContainer.className = "input_container success"
    const small = inputContainer.querySelector("small")
    small.textContent = msg
}

// Check email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(input.toLowerCase()))
  }
// Event listners

form.addEventListener('submit', (e)=> {
    e.preventDefault()
    if(username.value === ""){
        usernameErrFunc(username, "Username is Required")
    }else{
        userInputSuccFunc(username, 'Details Accepted')
    }

    if(email.value === ""){
        usernameErrFunc(email, "Email is Required")}
    else if (!checkEmail(email.value)) {
        usernameErrFunc(email, "Invalied Email")
    } 
    else{
        userInputSuccFunc(email, 'Details Accepted')
    }

    if(password.value === ""){
        usernameErrFunc(password, "Password is Required")
    }else{
        userInputSuccFunc(password, 'Details Accepted')
    }

    if(confirm.value === ""){
        usernameErrFunc(confirm, "Password is Required")
    }else{
        userInputSuccFunc(confirm, 'Details Accepted')
    }


})
