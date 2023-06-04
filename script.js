const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const Password_confirm = document.getElementById("password confirm")

// Functions

function userInputErrFunc(input, msg) {
    const inputContainer = input.parentElement
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
    if (re.test(input.value.trim())) {
        userInputSuccFunc(input, 'Details accepted');
    } else {
        userInputErrFunc(input, 'Email is not valid');
    }
  }
  
  // Check required fields
  function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
      if (input.value.trim() === '') {
        userInputErrFunc(input, `${getFieldName(input)} is required`);
      } else {
        userInputSuccFunc(input, 'Details accepted');
      }
    });
  }

// Check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
      userInputErrFunc(
        input,
        `${getFieldName(input)} must be at least ${min} characters`
      );
    } else if (input.value.length > max) {
      userInputErrFunc(
        input,
        `${getFieldName(input)} must be less than ${max} characters`
      );
    } else {
      userInputSuccFunc(input, 'Details accepted');
    }
  }

// Check passwords match
function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
      userInputErrFunc(input2, 'Passwords do not match');
    }
  }
  
  // Get fieldname
  function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
  }
  
//   Event listeners
  form.addEventListener('submit', function(e) {
    e.preventDefault();
  
    checkRequired([username, email, password, Password_confirm]);
    checkLength(username, 4, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordsMatch(password, Password_confirm);
  });