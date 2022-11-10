window.onload = function() {
    var loginButton = document.getElementById("loginButton");
    var logoutButton = document.getElementById("logoutButton");
    var loginForm = document.getElementById('loginForm');    
    var loggedIn = document.getElementById("loggedIn");
    var loginMessage = document.getElementById("loginMessage");
    var formSection = document.getElementById("formSection");
    var loggedMessage = document.getElementById("loggedMessage");

    // @ts-ignore
    formSection?.style.display = 'block';
    
    // @ts-ignore
    formSection?.style.display = 'flexbox';


    // Check if user is logged in with sessionStorage
    if (sessionStorage.length == 0) {
        // @ts-ignore
        loginForm?.style.display = "block";
        // @ts-ignore
        loggedIn?.style.display = "none";

    } else {
        // @ts-ignore
        loginForm?.style.display = "none";
        // @ts-ignore
        loggedIn?.style.display = "block";

        // @ts-ignore
        loginMessage?.innerText = `Zalogowano jako: ${JSON.parse(sessionStorage.getItem("currentUserCredentials"))['email']}`;
        // @ts-ignore
        loggedMessage?.innerText = "Zalogowano!";
        
    }

    function logoutUser() {
        console.log("Button clicked");
        sessionStorage.clear();

        // @ts-ignore
        loginForm?.style.display = "block";
        // @ts-ignore
        loggedIn?.style.display = "none";
    }


    

    function logUser() {
        var userExists = false;
        var user;

        const emailInput = document.getElementById("emailAddress") as HTMLInputElement ;
        const emailValue = emailInput.value ?? "";
        const passwordInput = document.getElementById("password") as HTMLInputElement ;
        const passwordValue = passwordInput.value ?? "";
        
        // Fetch all users
        const users = [];
        
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            
            // @ts-ignore
            users.push(JSON.parse(localStorage.getItem(key)));
        }


        if (users.length > 0) {
            for (let i = 0; i < users.length; i++) {
                const foundEmail = users[i]["email"];
                const foundPassword = users[i]["password"];

                console.log(foundEmail);

                if (emailValue == foundEmail && passwordValue == foundPassword) {
                    userExists = true;
                    user = users[i]; 
                    break;
                }
            }

            if (userExists) {
                console.log("user found");
                const userPassword = user['password'];
                const userEmail = user['email'];

                const foundUser = {
                    "email": userEmail,
                    "password": userPassword
                };

                sessionStorage.setItem(`currentUserCredentials`, JSON.stringify(foundUser));

                // show login success div, set the message and hide the login form
                // @ts-ignore
                loggedIn.style.display = "block";
                // @ts-ignore
                loginMessage?.innerText = `Zalogowano jako: ${emailValue}`;

                // @ts-ignore
                loginForm.style.display = "none";
            } else {
                console.log("User not found on list");
                const newUser = {
                    "email": emailValue,
                    "password": passwordValue
                };

                // Add user credentials to localStorage and sessionStorage
                localStorage.setItem(`userCredentials${localStorage.length}`, JSON.stringify(newUser));
                sessionStorage.setItem("currentUserCredentials", JSON.stringify(newUser));
                console.log(`User created with email: ${emailValue}`);

                // show login success div, set the message and hide the login form
                // @ts-ignore
                loggedIn.style.display = "block";
                // @ts-ignore
                loginForm.style.display = "none";
                // @ts-ignore
                loginMessage?.innerText = `Zarejestrowano jako: ${emailValue}`;

                
            }
        } else {
            const newUser = {
                "email": emailValue,
                "password": passwordValue
            };

            // Add user credentials to localStorage and sessionStorage
            localStorage.setItem(`userCredentials${localStorage.length}`, JSON.stringify(newUser));
            sessionStorage.setItem("currentUserCredentials", JSON.stringify(newUser));
            console.log(`User created with email: ${emailValue}`);

            // show login success div, set the message and hide the login form
            // @ts-ignore
            loggedIn.style.display = "block";
            // @ts-ignore
            loginForm.style.display = "none";
            // @ts-ignore
            loginMessage?.innerText = `Zarejestrowano jako: ${emailValue}`;
        }
        
        // @ts-ignore
        loggedMessage?.innerText = "Zalogowano!";
    }

    loginButton?.addEventListener("click", () => logUser())
    logoutButton?.addEventListener("click", () => logoutUser())
}
