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