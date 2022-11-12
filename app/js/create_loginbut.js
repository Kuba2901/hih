window.onload = function () {
    var navbar = document.querySelector(".navbar");
    var navLogin = document.createElement("a");
    navLogin.innerHTML = '<a href="/sites/login.html" style="float: left;font-size: 16px;color: white;text-align: center;padding: 14px 16px;text-decoration: none;">Zaloguj się</a>';
    navbar === null || navbar === void 0 ? void 0 : navbar.appendChild(navLogin);
};
