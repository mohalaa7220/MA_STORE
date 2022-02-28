let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let password = id("password"),
    email = id("email"),
    form = id("form"),
    errorMsg = classes("error_message");

// Adding the submit event Listener

form.addEventListener("submit", (e) => {
    e.preventDefault();
    engine(password, 1, "Password cannot be blank");
    engine(email, 0, "Email cannot be blank");
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