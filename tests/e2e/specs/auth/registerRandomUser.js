let r = Math.random().toString(36).substring(7);

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
            .setValue('/html/body/div/div[3]/div/div/div[1]/div/div/div[1]/div/div/div[1]/div/input', 'Random')
            .setValue('/html/body/div/div[3]/div/div/div[1]/div/div/div[2]/div/div/div[1]/div/input', 'User')
            .setValue('/html/body/div/div[3]/div/div/div[1]/div/div/div[3]/div/div/div[1]/div/input', r + '@email.com')
            .setValue('/html/body/div/div[3]/div/div/div[1]/div/div/div[4]/div/div/div[1]/div/input', 'secret')
            .setValue('/html/body/div/div[3]/div/div/div[1]/div/div/div[5]/div/div/div[1]/div/input', 'secret')
            .click('/html/body/div/div[3]/div/div/div[2]/button[2]')
            .waitForElementVisible('//*[@id="app"]/div/div[2]/main/div/div/div/div[1]/div/div[1]')
            .assert.visible('//*[@id="app"]/div[1]/div[1]/header/div/div[3]/a[2]/button')
            .end()
    }
}