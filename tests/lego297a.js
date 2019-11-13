module.exports = {

    '@tags': ['lego297a'],   
        'TC_Lego_Footer'(client) {
        const page = client.page.legoFooter();
    
            page
            .navigate()
            .waitForElementVisible('body', 60000)
            .maximizeWindow()
            .pause(10000)
            .acceptCookies()
            .clickRequestLegoCatalog()
            .pause(3000)
            .assert.urlContains('https://lego.maf.demo.emakina.ae/request-lego-catalog')
            .pause(3000);
               
            client.saveScreenshot('tests_output/screenshots/lego297a.png')
        },
    }
