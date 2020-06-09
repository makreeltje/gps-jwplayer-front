module.exports = {
    'search video': browser => {
        browser
            .init()
            .useXpath()
            .waitForElementVisible('//*[@id="app"]')
            .assert.titleContains('gps-jwplayer-front')
            .assert.visible('//*[@id="input-29"]')
            .setValue('//*[@id="input-29"]', 'testuser@email.com')
            .assert.visible('//*[@id="password"]')
            .setValue('//*[@id="password"]', 'secret')
            .assert.visible('//*[@id="inspire"]/div/main/div/div/div/div/div/div/form/button[1]')
            .click('//*[@id="inspire"]/div/main/div/div/div/div/div/div/form/button[1]')
            .assert.urlContains('http://localhost:8080/')
            .waitForElementVisible('//*[@id="app"]/div/div[2]/main/div/div/div/div[1]/div/div[1]')
            .setValue('//*[@id="input-44"]', 'Dont Jump Edward')
            .useCss()
            .assert.elementCount('.col-12', 1)
            .end()
    }
}