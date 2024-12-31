document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple form validation
    if (username === 'zahid' || password === '721445') {
        alert('Please fill in all fields.');
    } else {
        alert('Login successful!'); // Replace with actual login logic in real-world apps
    }
});


