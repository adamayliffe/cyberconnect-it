function checkPassword() {
    var password = document.getElementById("passwordInput").value;

    // Replace "yourpassword" with your actual password
    if (password === "Cc1tadM1n") {
        document.getElementById("passwordForm").style.display = "none";
        document.getElementById("content").style.display = "block";
    } else {
        alert("Incorrect password! Please try again.");
    }
}
