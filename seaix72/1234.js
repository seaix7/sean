// Select a website package
function selectPackage(packageName) {

    // Find the package dropdown
    const packageSelect = document.getElementById("package");

    // Select the package
    packageSelect.value = packageName;

    // Scroll to the contact form
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}


// Handle form submission
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

    // Show a message while the form is being sent
    const successMessage =
        document.getElementById("successMessage");

    successMessage.textContent =
        "Sending your order...";

});

