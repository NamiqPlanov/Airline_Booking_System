const subscribeForm = document.querySelector('.subscribe_form');

subscribeForm.addEventListener('submit', function (event) {
    event.preventDefault(); 

    const emailInput = subscribeForm.querySelector('input[type="text"]').value; 

    if (emailInput.trim() === "") {
        alert("Please enter your email before subscribing.");
    } else {
        alert("Thank you for subscribing with email: " + emailInput); 
        subscribeForm.reset();
    }
});

document.getElementById("contactBtn").addEventListener("click", function() {
    const contactDiv = document.getElementById("contactInfo");
    contactDiv.style.display = contactDiv.style.display === "none" ? "block" : "none";})


const classSpans = document.querySelectorAll('.booking_nav span');

// Add a click event listener to each span
classSpans.forEach(span => {
    span.addEventListener('click', function() {
        // Remove the active class from all spans
        classSpans.forEach(s => s.classList.remove('active'));
        // Add the active class to the clicked span
        this.classList.add('active');
    });
});

classSpans.forEach(span => {
    span.addEventListener('click', function() {
        classSpans.forEach(s => s.classList.remove('active'));
        this.classList.add('active');
        const message = this.getAttribute('data-message');
        alert(message);
    });
});