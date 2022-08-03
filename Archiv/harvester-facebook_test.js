Feature('My First Test');

Scenario('test something', async ({ I }) => {
    I.amOnPage('https://www.facebook.com/');

    I.wait(5);
    I.click('Nur erforderliche Cookies erlauben')

    I.wait(2);
    const htmlMitOeffnungszeit = await I.grabHTMLFrom('.oeffnungszeitKompakt')
    const htmlMitAdresse = await I.grabHTMLFrom('.mod-AdresseKompakt')

    I.say(htmlMitOeffnungszeit)
    I.say(htmlMitAdresse)
    I.wait(3);
});