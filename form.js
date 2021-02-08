document.addEventListener("DOMContentLoaded", () => {

    // Get the modal
    const modal = document.getElementById("modal");

    // Get the button that opens the modal
    const btn = document.getElementById("submit-btn");

    // Get the button that closes the modal
    const close = document.getElementById("close-btn");

    // When the user clicks the button, open the modal 
    btn.onclick = function (e) {
        modal.style.display = "block";
        e.preventDefault();
    }

    // When the user clicks on Close button, close the modal
    close.onclick = function () {
        modal.style.display = "none";
        document.location.reload()
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.location.reload()
        }
    }

    function validateForm() {
        let firstName = document.myfrom.firstname.value;
        let lasttName = document.myfrom.lastname.value;
        let email = document.myfrom.email.value;
        let phone = document.myfrom.phone.value;
        let message = document.myfrom.message.value;

    }

})

