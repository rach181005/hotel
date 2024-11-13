
const eventForm = document.getElementById('eventForm');
console.log("in the js file");

eventForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const eventData = {
        eventName: document.getElementById('eventName').value,
        date: document.getElementById('eventDate').value, // 'date' instead of 'eventDate'
        venue: document.getElementById('eventDescription').value // 'venue' instead of 'eventDescription'
    };

    fetch('http://localhost:3000/events', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
    })
    .then(response => console.log(response)
    )
    .then(data => {
        console.log(data); // Handle success
    })
    .catch(error => console.error('Error:', error));
});
