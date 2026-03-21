
// 1. Target the elements in your HTML
const button = document.getElementById('loadDataBtn');
const display = document.getElementById('contentDisplay');

// 2. Add an event listener to the button
button.addEventListener('click', async () => {
    // Show a loading state
    display.innerHTML = '<p>Loading data...</p>';

    // 3. Simulate fetching data (this could easily be an API call later)
    setTimeout(() => {
        // Mock data array
        const fetchedData = [
            'Open-World Adventure', 
            'Story-Driven Epic', 
            'Realistic Simulator'
        ];
        
        // Clear the loading text
        display.innerHTML = ''; 
        
        // 4. Dynamically generate HTML for each piece of data
        fetchedData.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('card'); // Add a CSS class for styling
            card.innerText = item;
            
            // Inject the new element into the DOM
            display.appendChild(card);
        });
    }, 1000); // 1-second delay to mimic network latency
});
