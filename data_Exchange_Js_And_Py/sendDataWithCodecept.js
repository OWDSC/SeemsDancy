const fs = require('fs')

console.log("HIER BIN ICH")

Feature('My First Test');

Scenario('test something', async ({ I }) => {

// Aufruf der Facebook-Webseite    
    I.amOnPage('https://www.facebook.com/');

// Cookies akzeptieren
    I.wait(4);
    I.click('Nur erforderliche Cookies erlauben')
    
    I.wait(2);
    I.say('I accepted the cookies')


// Login auf Facebook
    I.wait(3);
    I.fillField('E-Mail-Adresse oder Telefonnummer', 'wiederkeuer261@gmail.com');
    I.wait(3);
    I.fillField('Passwort', 'Dezentralisierung_ist_die_2ukunft!');
    I.wait(2);
    I.click('Anmelden');

    I.wait(10);
    I.click('Facebook durchsuchen')
    I.wait(5);
    I.fillField('Facebook durchsuchen', 'Hip-Hop Party');
    I.wait(5);
    I.click('Suche nach')


    I.wait(5);
    I.click('Veranstaltungen')
    I.wait(10);
    I.click('Interessiert')
    I.wait(5)
    I.click('Interessiert')
    I.wait(10)


    I.wait(3);
	  console.log("SZENARIO VORBEI")

    const content = 'this is what i want to write to file. Platzhalter. NEU'    // put here the data that was scraped by the Bot (for example image-URL)

    fs.writeFile('./test.txt', content, err => {                            // write the parsed content to a local file
    if (err) {
        console.error(err)
        return
    }
    //file written successfully
    })

    console.log("GESCHRIEBEN")

});
