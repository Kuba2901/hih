window.onload = function () {
    const submitBtn = document.getElementById("submitBtn") as HTMLInputElement;
    const form = document.getElementById("form") as HTMLElement;

    function validateForm() {
        // FIELDS
        const firstName = document.getElementById("firstName") as HTMLInputElement;
        const lastName = document.getElementById("lastName") as HTMLInputElement;
        const email = document.getElementById("email") as HTMLInputElement;

        // Validate
        if (firstName.value != "" && lastName.value != "" && email.value != "") {
            showMessage(true);
        } else {
            showMessage(false);
        }
    }

    function showMessage(success) {
        const successAlert = document.getElementById("success-alert") as HTMLElement;
        const errorAlert = document.getElementById("error-alert") as HTMLElement;

        if (success) {            
            // @ts-ignore
            successAlert?.style.display = "block";
            
            // @ts-ignore
            errorAlert?.style.display = "none";
        } else {
            // @ts-ignore
            successAlert?.style.display = "none";
            
            // @ts-ignore
            errorAlert?.style.display = "block";
        }

        window.scrollTo(
            {
                top: 0,
                behavior: "smooth"
            }
        )
    } 

    submitBtn?.addEventListener("click", () => validateForm());
}