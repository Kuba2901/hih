window.onload = function () {
    var submitBtn = document.getElementById("submitBtn");
    var form = document.getElementById("form");
    function validateForm() {
        var firstName = document.getElementById("firstName");
        var lastName = document.getElementById("lastName");
        var email = document.getElementById("email");
        if (firstName.value != "" && lastName.value != "" && email.value != "") {
            showMessage(true);
        }
        else {
            showMessage(false);
        }
    }
    function showMessage(success) {
        var successAlert = document.getElementById("success-alert");
        var errorAlert = document.getElementById("error-alert");
        if (success) {
            // @ts-ignore
            successAlert === null || successAlert === void 0 ? void 0 : successAlert.style.display = "block";
            // @ts-ignore
            errorAlert === null || errorAlert === void 0 ? void 0 : errorAlert.style.display = "none";
        }
        else {
            // @ts-ignore
            successAlert === null || successAlert === void 0 ? void 0 : successAlert.style.display = "none";
            // @ts-ignore
            errorAlert === null || errorAlert === void 0 ? void 0 : errorAlert.style.display = "block";
        }
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    submitBtn === null || submitBtn === void 0 ? void 0 : submitBtn.addEventListener("click", function () { return validateForm(); });
};
