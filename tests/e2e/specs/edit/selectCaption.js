module.exports = {
    'open video': browser => {
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
            .assert.visible('//*[@id="app"]/div[1]/div[2]/main/div/div/div/div[2]/div[4]/a')
            .click('//*[@id="app"]/div[1]/div[2]/main/div/div/div/div[2]/div[4]/a')
            .waitForElementVisible('//*[@id="app"]/div[1]/div[2]/main/div/div/div[1]/div/h1')
            .assert.containsText('//*[@id="app"]/div[1]/div[2]/main/div/div/div[1]/div/h1', 'Dont Jump Edward')
            .click('//*[@id="app"]/div[1]/div[2]/main/div/div/div[1]/div/div/div[1]/div[1]')
            .pause(250)
            .click('/html/body/div/div[2]/div/div[1]')
            .assert.visible('//*[@id="app"]/div[1]/div[2]/main/div/div/div[1]/div/div[2]')
            .assert.containsText('//*[@id="app"]/div[1]/div[2]/main/div/div/div[1]/div/div[2]', 'Caption loaded successfully')
            .end()
    }
}