// Placeholder for form submission
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent successfully!');
  });

//   privacy policy modal script

// Get the modal
var modal = document.getElementById("privacyPolicyModal");

// Get the button that opens the modal
var btn = document.getElementById("privacyPolicyBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-btn")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// toggle button
// Get the menu toggle button and the navigation menu
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

// Add an event listener to the toggle button
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // Toggle the active class
});

