document.addEventListener('DOMContentLoaded', () => {
    const editButton = document.querySelector('.edit-btn');
    editButton.addEventListener('click', () => {
      alert('Edit button clicked!');
    });
  });

document.addEventListener('DOMContentLoaded', () => {
    const tripContainer = document.getElementById('tripContainer');

    const tripHistory = JSON.parse(localStorage.getItem('tripHistory')) || [];

    tripHistory.forEach(trip => {
        const tripElement = document.createElement('div');
        tripElement.classList.add('trip');

        tripElement.innerHTML = `
            <p class="date-time">Trip ${trip.date} - ${trip.time} <span class="${trip.type.toLowerCase().replace(' ', '-')}">${trip.type}</span></p>
            <div class="trip-details">
                <p>Vehicle Type: ${trip.vehicleType}<br>Trip Distance: ${trip.tripDistance} KM</p>
                <p>Emitted <strong>-- grams</strong> of Carbon<br><span class="warning">--</span></p>
            </div>
        `;

        tripContainer.appendChild(tripElement);
    });
});
