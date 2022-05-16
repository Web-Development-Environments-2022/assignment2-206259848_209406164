$(document).ready(function () {
    var current_user = null;

    // Save username and password in localStorage mechanism (no need to save full name, email and date)
    localStorage.setItem('k', 'k')

    $("#login_form").validate({
        rules:
        {
            username_login: { required: true },
            password_login: { required: true }
        },

        messages:
        {
            username_login: { required: '<br>Please enter a user name' },
            password_login: { required: '<br>Please enter a password' }
        },

        submitHandler:
            function ()
            {
                login();
                reset_login_form();
            }
    });
});

function login() 
{
    let username_input = document.getElementById("username_login").value;
    let passord_input = document.getElementById("password_login").value;
    let real_password = localStorage.getItem(username_input)

    if (real_password == passord_input) 
    {
        showPage('setting_screen');
        current_user = username_input;
    }
    else 
    {
        alert("Username or Password are invalid");
        showPage('login_screen');
    }
}

function reset_login_form()
{
    let form = document.getElementById('login_form');
    form.reset();
}