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

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('co2Form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const vehicleType = document.getElementById('vehicleType').value;
        const tripDistance = document.getElementById('tripDistance').value;
        const saveTrip = document.getElementById('saveTrip').checked;

        if (saveTrip) {
            saveTripToHistory(vehicleType, tripDistance);
        }

        // Implement your CO2 calculation logic here and display the result
        alert('Trip details saved successfully!');
    });

    function saveTripToHistory(vehicleType, tripDistance) {
        const trip = {
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
            vehicleType,
            tripDistance,
            type: 'Public Transportation' // or 'Private Transportation' based on the page
        };

        let tripHistory = JSON.parse(localStorage.getItem('tripHistory')) || [];
        tripHistory.push(trip);
        localStorage.setItem('tripHistory', JSON.stringify(tripHistory));
    }
});

