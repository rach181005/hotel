document.addEventListener("DOMContentLoaded", function () {
    // Fetch and display guests
    fetch('/guests')
        .then(response => response.json())
        .then(guests => {
            const guestListDiv = document.getElementById('guestList');
            guests.forEach(guest => {
                const guestItem = document.createElement('p');
                guestItem.textContent = `${guest.Name}, ${guest.Phone}`;
                guestListDiv.appendChild(guestItem);
            });
        });

    // Fetch and display reservations
    fetch('/reservations')
        .then(response => response.json())
        .then(reservations => {
            const reservationListDiv = document.getElementById('reservationList');
            reservations.forEach(reservation => {
                const reservationItem = document.createElement('p');
                reservationItem.textContent = `Reservation ID: ${reservation.Reservation_ID}, Guest ID: ${reservation.Guest_ID}`;
                reservationListDiv.appendChild(reservationItem);
            });
        });

    // Similarly, add fetch calls for rooms, events, and invoices
});
