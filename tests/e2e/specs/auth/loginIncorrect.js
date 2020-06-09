module.exports = {
    'login information incorrect': browser => {
        browser
            .init()
            .waitForElementVisible('#app')
            .assert.titleContains('gps-jwplayer-front')
            .assert.visible('input[type=username]')
            .setValue('input[type=username]', 'wrong')
            .assert.visible('input[type=password]')
            .setValue('input[type=password]', 'credentials')
            .assert.visible('button[type=submit]')
            .click('button[type=submit]')
            .assert.visible('.v-snack')
            .assert.containsText('.v-snack', 'The given data was invalid')
            .end()
    }
}