document.addEventListener('DOMContentLoaded', () => {
    // Add Guest form submission
    const guestForm = document.getElementById('guestForm');
    guestForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const guestData = {
            name: document.getElementById('guestName').value,
            dob: document.getElementById('guestDOB').value,
            phone: document.getElementById('guestPhone').value,
            email: document.getElementById('guestEmail').value,
            address: document.getElementById('guestAddress').value,
            noOfGuests: document.getElementById('noOfGuests').value
        };

        fetch('/guests', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(guestData)
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            guestForm.reset();
        })
    })
})
