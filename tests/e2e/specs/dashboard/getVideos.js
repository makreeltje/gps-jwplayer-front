module.exports = {
    'check if videos load in browser': browser => {
        browser
            .init()
            .useXpath()
            .waitForElementVisible('//*[@id="app"]')
            .assert.titleContains('gps-jwplayer-front')
            .useCss()
            .assert.visible('input[type=username]')
            .setValue('input[type=username]', 'testuser@email.com')
            .assert.visible('input[type=password]')
            .setValue('input[type=password]', 'secret')
            .assert.visible('button[type=submit]')
            .click('button[type=submit]')
            .assert.urlContains('http://localhost:8080/')
            .useXpath()
            .waitForElementVisible('//*[@id="app"]/div/div[2]/main/div/div/div/div[1]/div/div[1]')
            .useCss()
            .assert.elementCount('.col-12', 5)
            .end()
    }
}