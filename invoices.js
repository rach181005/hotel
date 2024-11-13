document.addEventListener("DOMContentLoaded", function () {
    const invoiceForm = document.getElementById('invoiceForm');
    invoiceForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const invoiceData = {
            reservationId: document.getElementById('invoiceReservationId').value,
            invoiceDate: document.getElementById('invoiceDate').value,
            amount: document.getElementById('invoiceAmount').value,
        };

        fetch('/invoices', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(invoiceData),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.message); // Handle success
            // Optionally reload or dynamically update the invoice list
        })
        .catch(error => console.error('Error:', error));
    });
});
