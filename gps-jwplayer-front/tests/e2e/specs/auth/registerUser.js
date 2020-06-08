module.exports = {
    'register known account': browser => {
        browser
            .init()
            .useXpath()
            .waitForElementVisible('//*[@id="app"]')
            .assert.titleContains('gps-jwplayer-front')
            .assert.visible('//*[@id="inspire"]/div/main/div/div/div/div/div/div/form/button[3]')
            .click('//*[@id="inspire"]/div/main/div/div/div/div/div/div/form/button[3]')
            .assert.visible('//*[@id="app"]/div[3]/div')
            .setValue('//*[@id="input-48"]', 'Test')
            .setValue('//*[@id="input-51"]', 'User')
            .setValue('//*[@id="input-54"]', 'testuser@email.com')
            .setValue('//*[@id="input-57"]', 'secret')
            .setValue('//*[@id="input-60"]', 'secret')
            .click('//*[@id="app"]/div[3]/div/div/div[2]/button[2]')
            .assert.visible('//*[@id="inspire"]/div/div/div[2]')
            .assert.containsText('//*[@id="inspire"]/div/div/div[2]', 'The email has already been taken')
            .end()
    }
}