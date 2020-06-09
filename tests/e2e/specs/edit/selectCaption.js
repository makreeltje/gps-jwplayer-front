module.exports = {
    'open video': browser => {
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
            .assert.visible('//*[@id="app"]/div[1]/div[2]/main/div/div/div/div[2]/div[4]/a')
            .click('//*[@id="app"]/div[1]/div[2]/main/div/div/div/div[2]/div[4]/a')
            .waitForElementVisible('//*[@id="app"]/div[1]/div[2]/main/div/div/div[1]/div/h1')
            .assert.containsText('//*[@id="app"]/div[1]/div[2]/main/div/div/div[1]/div/h1', 'Dont Jump Edward')
            .click('//*[@id="app"]/div[1]/div[2]/main/div/div/div[1]/div/div/div[1]/div[1]')
            .pause(250)
            .click('//*[@id="list-item-83-0"]')
            .assert.visible('//*[@id="app"]/div[1]/div[2]/main/div/div/div[1]/div/div[2]')
            .assert.containsText('//*[@id="app"]/div[1]/div[2]/main/div/div/div[1]/div/div[2]', 'Caption loaded successfully')
            .end()
    }
}