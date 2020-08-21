// form label
let username_label = document.querySelector('.username_label');
let fullname_label = document.querySelector('.fullname_label');
let email_label = document.querySelector('.email_label');
let password_label = document.querySelector('.password_label');
let confirm_password_label = document.querySelector('.confirm_password_label');

// form input
let username = document.querySelector('#username').addEventListener('click', () => {
    username_label.classList.add('label_up');
    fullname_label.classList.remove('label_up');
    email_label.classList.remove('label_up');
    password_label.classList.remove('label_up');
    confirm_password_label.classList.remove('label_up');
});


// form input

let fullname = document.querySelector('#fullname').addEventListener('click', () => {
    username_label.classList.remove('label_up');
    email_label.classList.remove('label_up');
    password_label.classList.remove('label_up');
    confirm_password_label.classList.remove('label_up');
    fullname_label.classList.add('label_up');
});

let email = document.querySelector('#email').addEventListener('click', () => {
    username_label.classList.remove('label_up');
    fullname_label.classList.remove('label_up');
    confirm_password_label.classList.remove('label_up');
    password_label.classList.remove('label_up');
    email_label.classList.add('label_up');
});

let password = document.querySelector('#password').addEventListener('click', () => {
    username_label.classList.remove('label_up');
    fullname_label.classList.remove('label_up');
    email_label.classList.remove('label_up');
    confirm_password_label.classList.remove('label_up');
    password_label.classList.add('label_up');
});

let confirm_password = document.querySelector('#confirm_password').addEventListener('click', () => {
    username_label.classList.remove('label_up');
    fullname_label.classList.remove('label_up');
    email_label.classList.remove('label_up');
    password_label.classList.remove('label_up');
    confirm_password_label.classList.add('label_up');
});

let left_section = document.querySelector('.left_section').addEventListener('click', () => {
    username_label.classList.remove('label_up');
    fullname_label.classList.remove('label_up');
    email_label.classList.remove('label_up');
    password_label.classList.remove('label_up');
    confirm_password_label.classList.remove('label_up');
});

let middle_section = document.querySelector('.middle_section').addEventListener('click', () => {
    username_label.classList.remove('label_up');
    fullname_label.classList.remove('label_up');
    email_label.classList.remove('label_up');
    password_label.classList.remove('label_up');
    confirm_password_label.classList.remove('label_up');
});


// forms
let login = document.querySelector('.login');
let signUp = document.querySelector('.sign_up');


// button box

let active_button = document.querySelector('.bg_active_button');
let login_button = document.querySelector('.login_button').addEventListener('click', () => {
    // active_button.classList.remove('active_button_move_right');
    // active_button.classList.add('active_button_move_left');
    active_button.style.left = "0%";
    login.style.left = "50%";
    signUp.style.left = "150%";

});


let signup_button = document.querySelector('.signup_button').addEventListener('click', () => {
    // active_button.classList.remove('active_button_move_left');
    // active_button.classList.add('active_button_move_right');
    // active_button.style.display = "none";
    active_button.style.left = "50%";
    login.style.left = "-150%";
    signUp.style.left = "50%";
});


