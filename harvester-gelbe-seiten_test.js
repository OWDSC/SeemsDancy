// Get the button and container from HTML:
const button = document.getElementById("theButton")
const data = document.getElementById("info")



Feature('My First Test');

Scenario('test something', async ({ I }) => {
    I.amOnPage('https://www.gelbeseiten.de/Suche/hundefutter/Mannheim');

    I.wait(5);
    I.click('Akzeptieren')

    I.wait(2);
    const htmlMitOeffnungszeit = await I.grabHTMLFrom('.oeffnungszeitKompakt')
    const htmlMitAdresse = await I.grabHTMLFrom('.mod-AdresseKompakt')

    I.say(htmlMitOeffnungszeit)
    I.say(htmlMitAdresse)
    I.wait(3);
});

const cars = [
	{ "make":"Star Wars", "model":"911S" },
	{ "make":"Darth Vader", "model":"https://images-na.ssl-images-amazon.com/images/I/51H--lU9YGL.jpg" },
	{ "make":"Yoda","model": "https://static.wikia.nocookie.net/jedipedia/images/4/45/Yoda.jpg/revision/latest?cb=20060525211408&path-prefix=de" },
	{ "make":"BB8","model": "https://n-cdn.serienjunkies.de/review/89814-star-wars-force-awakens-tv-spot-bb8-thumbs.jpg?_ga=2.125808458.1540657177.1653423189-757372100.1653423189"}
];
// Create an event listener on the button element:
// Create an event listener on the button element:
button.onclick= function(){
    
    // Get the receiver endpoint from Python using fetch:
    fetch("http://127.0.0.1:5000/receiver", 
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
        // Strigify the payload into JSON:
        body:JSON.stringify(cars)}).then(res=>{
                if(res.ok){
                    return res.json()
                }else{
                    alert("something is wrong")
                }
            }).then(jsonResponse=>{
                
                // Iterate through the data with Map and write your rendering logic:
                jsonResponse.map(Main=>            
       Main.make==="Star Wars"? data.innerHTML +="<p>"+ Main.make+" "+" is a great Franchise":
	   data.innerHTML +="<img src="+Main.model+"><p> this is "+Main.make) 
      //data.innerHTML +="<p>"+ Main.make+" "+"is an average product , " + Main.model) <img src="url" alt="alternatetext">
} 
).catch((err) => console.error(err)); 

// $.post( "/postmethod", {
//     javascript_data: data 
// });
} 

