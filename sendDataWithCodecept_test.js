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


// Login auf Facebook --> hier Facebook anmeldedaten angeben
    I.wait(3);
    I.fillField('E-Mail-Adresse oder Telefonnummer', 'hier die email');
    I.wait(3);
    //I.fillField('Passwort', 'Dezentralisierung_ist_die_2ukunft!');
    I.fillField('Passwort', 'hier das Passwort');
    I.wait(2);
    I.click('Anmelden');

    I.wait(10);
    //I.click('Facebook durchsuchen')
    //I.wait(3);
    console.log(suchbegriff)
    I.fillField('Facebook durchsuchen', 'Hip-Hop Party');
    I.wait(3);
    I.click('Suche nach')


    I.wait(5);
    I.click('Veranstaltungen')
    I.wait(5);
    //I.click({ xpath: '/html/body/div[1]/div/div[1]/div/div[3]/div/div/div/div[1]/div[1]/div[2]/div/div/div/div/div/div[1]/div/div/div/div/div/div/div[2]/div[2]/div/div/div/div/div/div[1]/div/span/span'})
    //I.click('Party')




    //Versuch mehrer Seiten nacheinander aufzurufen
    //locate('Interessiert').at(1)
    //I.click('//*[@id="mount_0_0_QM"]/div/div[1]/div/div[3]/div/div/div/div[1]/div[1]/div[2]/div/div/div/div/div/div[1]/div/div/div/div/div/div/div[2]/div[2]/div/div/div/div')
    I.click('Interessiert')
    I.wait(5)
    //I.click('Interessiert')
    // second element
    //locate('#table td').at(2);

    //I.wait(3)
    //I.click('Interessiert')
    //I.wait(3)

    //locate('data-imgperflogname="profileCoverPhoto"')
        //var currentName = I.grabTextFrom('src=');

    //var currentName = await I.grabTextFrom('//*[@id="mount_0_0_QM"]/div/div[1]/div/div[3]/div/div/div/div[1]/div[1]/div[1]/div[1]/div[1]/div/div/div[2]/div/a/div/div/div/div/img');

    //var currentName = await I.grabValueFrom('//*[@id="mount_0_0_QM"]/div/div[1]/div/div[3]/div/div/div/div[1]/div[1]/div[1]/div[1]/div[1]/div/div/div[2]/div/a/div/div/div/div/img')
    var currentName = await I.grabValueFrom('//*[@id="mount_0_0_QM"]/div/div[1]/div/div[3]/div/div/div/div[1]/div[1]/div[1]/div[1]/div[1]/div/div/div[2]/div/a/div/div/div/div')
    //var currentName = yield I.grabTextFrom('//input[@id="firstName"]');

    //const content_facebook = await I.grabTextFrom('')


    I.wait(20);
	console.log(currentName)

    //const content = 'https://www.online-druck.biz/gestalten/events-veranstaltungen.html'    // put here the data that was scraped by the Bot (for example image-URL)
    //const content = 'https://www.carpediem.life/wp-content/uploads/2021/12/bewusstsein-schoene-bilder-pixabay.jpg'
    const content = 'https://scontent-frt3-1.xx.fbcdn.net/v/t39.30808-6/298319074_6090255590988966_7551239222269917826_n.jpg?stp=dst-jpg_p180x540&_nc_cat=106&ccb=1-7&_nc_sid=340051&_nc_ohc=sFEbFpKu4GMAX8OSSp8&_nc_ht=scontent-frt3-1.xx&oh=00_AT_r8-69KxJFp2HF7ph8taGz_5TgeswLWkt8ja37rMSo3g&oe=62FA7840'

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
