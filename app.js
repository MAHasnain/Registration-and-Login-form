// registration form inputs and elements

// registration form inputs and elements
const login_email_input = document.getElementById("login_email_input")
const login_pass_input = document.getElementById("login_pass_input")


function registerUser() {
    event.preventDefault();
    const reg_email = document.getElementById("reg_email")
    const reg_username = document.getElementById("reg_username")
    const reg_phone = document.getElementById("reg_tel")
    const reg_password = document.getElementById("reg_pass")
    const reg_confirm_password = document.getElementById("reg_conf_pass")

    let users = JSON.parse(localStorage.getItem("users"))
    if (!users) {
        users = []
    }

    if (reg_email.value && reg_username.value && reg_password.value && reg_phone.value) {
        for (let i = 0; i < users.length; i++) {
            if (users[i].email === reg_email) {
                alert("User with this email already exists");
                emptyInputVals(reg_email, reg_username, reg_phone, reg_password, reg_confirm_password)
            }
        }
    }




}

function emptyInputVals() {
    for (let i = 0; i < arguments.length; i++) {
        arguments[i].value == "";
    }
}

function loginUser() { }