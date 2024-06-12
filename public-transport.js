document.getElementById('co2Form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Show loading message
    document.getElementById('loadingMessage').style.display = 'block';

    // Simulate a calculation delay
    setTimeout(function() {
        // Hide loading message
        document.getElementById('loadingMessage').style.display = 'none';

        // Show result message
        let resultMessage = document.getElementById('resultMessage');
        resultMessage.innerHTML = `
            Based on the information that you gave us, we have calculated the result of it. 
            Your trip emitted <span style="color: red;">42 grams</span> of Carbon.
            You have exceeded daily use of Carbon. We suggest you to use public transport :)
        `;
        resultMessage.style.display = 'block';
    }, 2000); // Simulate delay
});

// Add event listener to the switch link
document.querySelector('.switch-link').addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = "private-transport.html"; // Redirect to public transport page
});
