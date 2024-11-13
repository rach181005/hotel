document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => {
        if (response.status === 200) {
            window.location.href = '/dashboard'; // Redirect to dashboard
        } else {
            alert('Invalid credentials');
        }
    })
    .catch(error => console.error('Error:', error));
});
