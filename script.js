document.getElementById('robloxButton').addEventListener('click', function() {
    fetch('http://localhost:8080/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            key: '6230927530_5728571899',
            script: 'print("Hello world")'
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
        // Handle errors
    });
});
