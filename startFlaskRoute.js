// Get the button and container from HTML:
const button = document.getElementById("theButton")
const data = document.getElementById("info")

const cars = [{"A":"B"}];
// Create an event listener on the button element:
// Create an event listener on the button element:
button.onclick= function(){
    
    // Get the receiver endpoint from Python using fetch:
    fetch("http://127.0.0.1:63676/receiver",                       // execute the route
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
        // Strigify the payload into JSON:
        body:JSON.stringify(cars)}).catch((err) => console.error(err)); 

// $.post( "/postmethod", {
//     javascript_data: data 
// });
} 

