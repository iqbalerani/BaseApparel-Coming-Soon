document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("emailInput");
  const submitButton = document.getElementById("submitButton");
  const errorIcon = document.getElementById("errorIcon");
  const errorMessage = document.getElementById("errorMessage");

  // Function to validate an email address
  function isEmailValid(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  }

  // Function to handle form submission
  function handleSubmit() {
    const email = emailInput.value;

    if (isEmailValid(email)) {
      // Email is valid, clear error message and hide the error icon
      errorMessage.textContent = "";
      errorIcon.style.display = "none";
    } else {
      // Email is not valid, display error message and show the error icon
      errorMessage.textContent = "Please provide a valid email address";
      errorIcon.style.display = "inline"; // Display the error icon
    }
  }

  // Event listener for the submit button
  submitButton.addEventListener("click", handleSubmit);
});

// const responsiveImage = document.getElementById("responsive-image");

// function loadAppropriateImage() {
//   if (window.innerWidth < 375) {
//     responsiveImage.src = "/images/hero-mobile.jpg";
//   } else {
//     responsiveImage.src = "/images/hero-desktop.jpg";
//   }
// }

// Load the appropriate image when the page loads and on window resize
window.addEventListener("load", loadAppropriateImage);
window.addEventListener("resize", loadAppropriateImage);
