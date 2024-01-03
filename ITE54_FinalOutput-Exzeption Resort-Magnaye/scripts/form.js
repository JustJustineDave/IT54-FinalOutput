const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', () => {
    var fullName = document.getElementById("full_name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var paymentMethod = document.getElementById("payment_method").value;
    if (fullName === "" || email === "" || phone === "" || address === "" || paymentMethod === "") {
        alert("All fields must be filled out");
        return false;
    }
    var gmailPattern = /^[a-zA-Z0-9._-]+@gmail\.com$/;
    if (!gmailPattern.test(email)) {
        alert("Please enter a valid Gmail address");
        return false;
    }
    return true;
});