document.getElementById('robloxButton').addEventListener('click', function() {
    fetch('https://your-github-actions-url.com/action', {
        method: 'POST', // or 'GET' depending on your setup
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            action: 'some_action', // Define the action you want to trigger in your game
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Optionally handle success response from the server
    })
    .catch((error) => {
        console.error('Error:', error);
        // Handle errors
    });
});
