window.onload = function () {
    var loginButton = document.getElementById("loginButton");
    var logoutButton = document.getElementById("logoutButton");
    var loginForm = document.getElementById('loginForm');
    var loggedIn = document.getElementById("loggedIn");
    var loginMessage = document.getElementById("loginMessage");
    var formSection = document.getElementById("formSection");
    ;
    var loggedMessage = document.getElementById("loggedMessage");
    ;
    var logOrReg = document.getElementById("logOrReg");
    ;
    // @ts-ignore
    formSection === null || formSection === void 0 ? void 0 : formSection.style.display = 'block';
    // @ts-ignore
    formSection === null || formSection === void 0 ? void 0 : formSection.style.display = 'flexbox';
    // Check if user is logged in with sessionStorage
    if (sessionStorage.length == 0) {
        // @ts-ignore
        loginForm === null || loginForm === void 0 ? void 0 : loginForm.style.display = "block";
        // @ts-ignore
        loggedIn === null || loggedIn === void 0 ? void 0 : loggedIn.style.display = "none";
    }
    else {
        // @ts-ignore
        loginForm === null || loginForm === void 0 ? void 0 : loginForm.style.display = "none";
        // @ts-ignore
        loggedIn === null || loggedIn === void 0 ? void 0 : loggedIn.style.display = "block";
        // @ts-ignore
        logOrReg === null || logOrReg === void 0 ? void 0 : logOrReg.innerText = 'Logowanie przebiegło';
        // @ts-ignore
        loginMessage === null || loginMessage === void 0 ? void 0 : loginMessage.innerText = "Zalogowano jako: ".concat(JSON.parse(sessionStorage.getItem("currentUserCredentials"))['email']);
        // @ts-ignore
        loggedMessage === null || loggedMessage === void 0 ? void 0 : loggedMessage.innerText = "Zalogowano!";
    }
    function logoutUser() {
        sessionStorage.removeItem("currentUserCredentials");
        // @ts-ignore
        loginForm === null || loginForm === void 0 ? void 0 : loginForm.style.display = "block";
        // @ts-ignore
        loggedIn === null || loggedIn === void 0 ? void 0 : loggedIn.style.display = "none";
        removeAdditionalMessage();
    }
    function logUser() {
        var _a, _b;
        var userExists = false;
        var user;
        var emailInput = document.getElementById("emailAddress");
        var emailValue = (_a = emailInput.value) !== null && _a !== void 0 ? _a : "";
        var passwordInput = document.getElementById("password");
        var passwordValue = (_b = passwordInput.value) !== null && _b !== void 0 ? _b : "";
        var users = [];
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            // @ts-ignore
            users.push(JSON.parse(localStorage.getItem(key)));
        }
        if (users.length > 0) {
            for (var i = 0; i < users.length; i++) {
                var foundEmail = users[i]["email"];
                var foundPassword = users[i]["password"];
                if (emailValue == foundEmail && passwordValue == foundPassword) {
                    userExists = true;
                    user = users[i];
                    break;
                }
            }
            if (userExists) {
                console.log("user found");
                var userPassword = user['password'];
                var userEmail = user['email'];
                var foundUser = {
                    "email": userEmail,
                    "password": userPassword
                };
                sessionStorage.setItem("currentUserCredentials", JSON.stringify(foundUser));
                // @ts-ignore
                loggedIn.style.display = "block";
                // @ts-ignore
                logOrReg === null || logOrReg === void 0 ? void 0 : logOrReg.innerText = 'Logowanie przebiegło';
                // @ts-ignore
                loginMessage === null || loginMessage === void 0 ? void 0 : loginMessage.innerText = "Zalogowano jako: ".concat(emailValue);
                // @ts-ignore
                loginForm.style.display = "none";
            }
            else {
                var newUser = {
                    "email": emailValue,
                    "password": passwordValue
                };
                localStorage.setItem("userCredentials".concat(localStorage.length), JSON.stringify(newUser));
                sessionStorage.setItem("currentUserCredentials", JSON.stringify(newUser));
                // @ts-ignore
                loggedIn.style.display = "block";
                // @ts-ignore
                loginForm.style.display = "none";
                // @ts-ignore
                logOrReg === null || logOrReg === void 0 ? void 0 : logOrReg.innerText = 'Rejestracja przebiegła';
                // @ts-ignore
                loginMessage === null || loginMessage === void 0 ? void 0 : loginMessage.innerText = "Zarejestrowano jako: ".concat(emailValue);
            }
        }
        else {
            var newUser = {
                "email": emailValue,
                "password": passwordValue
            };
            localStorage.setItem("userCredentials".concat(localStorage.length), JSON.stringify(newUser));
            sessionStorage.setItem("currentUserCredentials", JSON.stringify(newUser));
            // @ts-ignore
            loggedIn.style.display = "block";
            // @ts-ignore
            loginForm.style.display = "none";
            // @ts-ignore
            loginMessage === null || loginMessage === void 0 ? void 0 : loginMessage.innerText = "Zarejestrowano jako: ".concat(emailValue);
        }
        // @ts-ignore
        loggedMessage === null || loggedMessage === void 0 ? void 0 : loggedMessage.innerText = "Zalogowano!";
        createAdditionalMessage();
    }
    function createAdditionalMessage() {
        var formSection = document.getElementById("formSection");
        var loginFeatures = document.createElement("p");
        loginFeatures.id = "loginFeatures";
        loginFeatures.innerText = "Logowanie w przyszłości zapewni Ci dostęp do podglądu terminów lekcji, prac domowych i łatwego umawiania następnych spotkań.";
        loginFeatures.style.color = "#f2f2f2";
        formSection === null || formSection === void 0 ? void 0 : formSection.appendChild(loginFeatures);
    }
    function removeAdditionalMessage() {
        var loginFeatures = document.getElementById("loginFeatures");
        loginFeatures === null || loginFeatures === void 0 ? void 0 : loginFeatures.remove();
    }
    loginButton === null || loginButton === void 0 ? void 0 : loginButton.addEventListener("click", function () { return logUser(); });
    logoutButton === null || logoutButton === void 0 ? void 0 : logoutButton.addEventListener("click", function () { return logoutUser(); });
};
