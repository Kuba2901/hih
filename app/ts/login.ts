window.onload = function() {
    const loginButton = document.getElementById("loginButton") as HTMLInputElement;
    const logoutButton = document.getElementById("logoutButton") as HTMLInputElement;
    const loginForm = document.getElementById('loginForm') as HTMLElement;    
    const loggedIn = document.getElementById("loggedIn") as HTMLElement;
    const loginMessage = document.getElementById("loginMessage") as HTMLElement;
    const formSection = document.getElementById("formSection") as HTMLElement;;
    const loggedMessage = document.getElementById("loggedMessage") as HTMLElement;;
    const logOrReg = document.getElementById("logOrReg") as HTMLElement;;

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
        logOrReg?.innerText = 'Logowanie przebiegło';

        // @ts-ignore
        loginMessage?.innerText = `Zalogowano jako: ${JSON.parse(sessionStorage.getItem("currentUserCredentials"))['email']}`;
        // @ts-ignore
        loggedMessage?.innerText = "Zalogowano!";
        
    }

    function logoutUser() {
        sessionStorage.removeItem("currentUserCredentials");

        // @ts-ignore
        loginForm?.style.display = "block";
        // @ts-ignore
        loggedIn?.style.display = "none";

        removeAdditionalMessage();
    }


    

    function logUser() {
        var userExists = false;
        var user;

        const emailInput = document.getElementById("emailAddress") as HTMLInputElement ;
        const emailValue = emailInput.value ?? "";
        const passwordInput = document.getElementById("password") as HTMLInputElement ;
        const passwordValue = passwordInput.value ?? "";
        
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

                // @ts-ignore
                loggedIn.style.display = "block";
                
                // @ts-ignore
                logOrReg?.innerText = 'Logowanie przebiegło';
                
                // @ts-ignore
                loginMessage?.innerText = `Zalogowano jako: ${emailValue}`;

                // @ts-ignore
                loginForm.style.display = "none";
            } else {
                const newUser = {
                    "email": emailValue,
                    "password": passwordValue
                };

                localStorage.setItem(`userCredentials${localStorage.length}`, JSON.stringify(newUser));
                sessionStorage.setItem("currentUserCredentials", JSON.stringify(newUser));

                // @ts-ignore
                loggedIn.style.display = "block";
                
                // @ts-ignore
                loginForm.style.display = "none";
                
                // @ts-ignore
                logOrReg?.innerText = 'Rejestracja przebiegła';
                
                // @ts-ignore
                loginMessage?.innerText = `Zarejestrowano jako: ${emailValue}`;
            }
        } else {
            const newUser = {
                "email": emailValue,
                "password": passwordValue
            };

            localStorage.setItem(`userCredentials${localStorage.length}`, JSON.stringify(newUser));
            sessionStorage.setItem("currentUserCredentials", JSON.stringify(newUser));

            // @ts-ignore
            loggedIn.style.display = "block";
            // @ts-ignore
            loginForm.style.display = "none";
            // @ts-ignore
            loginMessage?.innerText = `Zarejestrowano jako: ${emailValue}`;
        }
        
        // @ts-ignore
        loggedMessage?.innerText = "Zalogowano!";
        
        createAdditionalMessage();
    }

    function createAdditionalMessage() {
        const formSection = document.getElementById("formSection");
        const loginFeatures = document.createElement("p");
        loginFeatures.id = "loginFeatures";
        loginFeatures.innerText = "Logowanie w przyszłości zapewni Ci dostęp do podglądu terminów lekcji, prac domowych i łatwego umawiania następnych spotkań."
        loginFeatures.style.color = "#f2f2f2";
        formSection?.appendChild(loginFeatures);
    }
    
    function removeAdditionalMessage() {
        const loginFeatures = document.getElementById("loginFeatures");
        loginFeatures?.remove();
    }

    loginButton?.addEventListener("click", () => logUser())
    logoutButton?.addEventListener("click", () => logoutUser())
}


