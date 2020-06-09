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
            .setValue('/html/body/div/div[3]/div/div/div[1]/div/div/div[1]/div/div/div[1]/div/input', 'Test')
            .setValue('/html/body/div/div[3]/div/div/div[1]/div/div/div[2]/div/div/div[1]/div/input', 'User')
            .setValue('/html/body/div/div[3]/div/div/div[1]/div/div/div[3]/div/div/div[1]/div/input', 'testuser@email.com')
            .setValue('/html/body/div/div[3]/div/div/div[1]/div/div/div[4]/div/div/div[1]/div/input', 'secret')
            .setValue('/html/body/div/div[3]/div/div/div[1]/div/div/div[5]/div/div/div[1]/div/input', 'secret')
            .click('//*[@id="app"]/div[3]/div/div/div[2]/button[2]')
            .assert.visible('//*[@id="inspire"]/div/div/div[2]')
            .assert.containsText('//*[@id="inspire"]/div/div/div[2]', 'The email has already been taken')
            .end()
    }
}