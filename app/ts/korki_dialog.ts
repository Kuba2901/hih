window.onload = function () {
    const form = document.getElementById("form");
    const submitBtn = document.getElementById("submitBtn");

    function handleForm(event) { event.preventDefault(); } 
    form?.addEventListener('submit', handleForm);


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
        const successAlert = document.getElementById("success-alert");
        const errorAlert = document.getElementById("error-alert");

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