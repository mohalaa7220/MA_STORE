let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
    password = id("password"),
    email = id("email"),
    form = id("form"),
    submit = classes("submit"),
    errorMsg = classes("error_message"),
    errorMsgPassword = classes("error_password");

// Adding the submit event Listener

form.addEventListener("submit", (e) => {
    e.preventDefault();
    engine(password, 2, "Password cannot be blank");
    engine(email, 1, "Email cannot be blank");
    engine(username, 0, "Username cannot be blank");
});

// engine function which will do all the works

let engine = (id, serial, message) => {
    if (id.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";
    } else {
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";
        location.href = "index.html";
    }
};

/*--------------------Toggle Show/Hide Password------------- */
let showPassword = document.querySelector("#show_password");
showPassword.addEventListener("click", () => {
    if (password.type === "password") {
        password.type = "text";
        showPassword.className = "fa fa-eye-slash";
    } else {
        password.type = "password";
        showPassword.className = "fa fa-eye";
    }
});