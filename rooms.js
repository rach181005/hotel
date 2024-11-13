document.addEventListener("DOMContentLoaded", function () {
    const roomForm = document.getElementById('roomForm');
    roomForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const roomData = {
            roomNumber: document.getElementById('roomNumber').value,
            roomType: document.getElementById('roomType').value,
            roomPrice: document.getElementById('roomPrice').value,
        };

        fetch('/rooms', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(roomData),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.message); // Handle success
            // Optionally reload or dynamically update the room list
        })
        .catch(error => console.error('Error:', error));
    });
});
