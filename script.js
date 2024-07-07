document.getElementById('robloxButton').addEventListener('click', function() {
    fetch('https://www.roblox.com/games/18379860529/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            key: '6230927530_5728571899',
            welcome_message: 'Hi Owner, welcome to the game!'
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
