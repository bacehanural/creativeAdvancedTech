module.exports = {

    '@tags': ['lego295a'],   
        'TC_Lego_Footer'(client) {
        const page = client.page.legoFooter();
    
            page
            .navigate()
            .waitForElementVisible('body', 60000)
            .maximizeWindow()
            .pause(10000)
            .acceptCookies()
            .clickContactUs()
            .pause(3000)
            .assert.urlContains('https://lego.maf.demo.emakina.ae/contact-us')
            .pause(3000);
               
            client.saveScreenshot('tests_output/screenshots/lego295a.png')
        },
    }
