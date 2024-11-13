document.addEventListener("DOMContentLoaded", function () {
    const guestForm = document.getElementById('guestForm');
    guestForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const guestData = {
            guestName: document.getElementById('guestName').value,
            guestDOB: document.getElementById('guestDOB').value,
            guestPhone: document.getElementById('guestPhone').value,
            guestEmail: document.getElementById('guestEmail').value,
            guestAddress: document.getElementById('guestAddress').value,
            noOfGuests: document.getElementById('noOfGuests').value,
        };

        fetch('/guests', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(guestData),
        })
        .then(response => {
            // Check if the response is successful
            if (response.ok) {
                return response.json(); // Parse the response as JSON
            } else {
                throw new Error('Failed to add guest'); // Handle errors
            }
        })
        .then(data => {
            console.log(data.message); // Show success message
            alert(data.message); // Display success message to user
            // Optionally, you can reload the guest list dynamically here
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error adding guest. Please try again.');
        });
    });
});
