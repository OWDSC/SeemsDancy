const fs = require('fs')
const suchbegriff = 'Hip-Hop Party'

console.log("HIER BIN ICH")

Feature('My First Test');

Scenario('test something', async ({ I }) => {
//
// Aufruf der Facebook-Webseite    
    I.amOnPage('https://www.facebook.com/');

// Cookies akzeptieren
    I.wait(4);
    I.click('Nur erforderliche Cookies erlauben')
    
    I.wait(2);
    I.say('I accepted the cookies')


// Login auf Facebook
    I.wait(3);
    I.fillField('E-Mail-Adresse oder Telefonnummer', 'oliver@familie-wieder.de');
    I.wait(3);
    //I.fillField('Passwort', 'Dezentralisierung_ist_die_2ukunft!');
    I.fillField('Passwort', 'MADCATZ001');
    I.wait(2);
    I.click('Anmelden');

    I.wait(10);
    I.click('Facebook durchsuchen')
    I.wait(5);
    console.log(suchbegriff)
    I.fillField('Facebook durchsuchen', suchbegriff);
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

    //const content = 'https://www.online-druck.biz/gestalten/events-veranstaltungen.html'    // put here the data that was scraped by the Bot (for example image-URL)
    const content = 'https://www.carpediem.life/wp-content/uploads/2021/12/bewusstsein-schoene-bilder-pixabay.jpg'

    fs.writeFile('./test.txt', content, err => {                            // write the parsed content to a local file
    if (err) {
        console.error(err)
        return
    }
    //file written successfully
    })

    console.log(content)

    //try {
    //    fs.writeFileSync('/test.txt', content);
    //    // file written successfully
    //  } catch (err) {
    //    console.error(err);
    //  }


    console.log("GESCHRIEBEN")

});
