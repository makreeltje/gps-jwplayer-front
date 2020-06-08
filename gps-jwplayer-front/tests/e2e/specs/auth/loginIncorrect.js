module.exports = {
    'login information incorrect': browser => {
        browser
            .init()
            .useXpath()
            .waitForElementVisible('//*[@id="app"]')
            .assert.titleContains('gps-jwplayer-front')
            .assert.visible('//*[@id="input-29"]')
            .setValue('//*[@id="input-29"]', 'wrong')
            .assert.visible('//*[@id="password"]')
            .setValue('//*[@id="password"]', 'information')
            .assert.visible('//*[@id="inspire"]/div/main/div/div/div/div/div/div/form/button[1]')
            .click('//*[@id="inspire"]/div/main/div/div/div/div/div/div/form/button[1]')
            .assert.visible('//*[@id="inspire"]/div/div/div[2]/div/div')
            .assert.containsText('//*[@id="inspire"]/div/div/div[2]/div/div', 'The given data was invalid')
            .end()
    }
}