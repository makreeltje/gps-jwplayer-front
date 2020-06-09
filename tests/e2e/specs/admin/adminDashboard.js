module.exports = {
    'get users if admin': browser => {
        browser
            .init()
            .waitForElementVisible('#app')
            .assert.titleContains('gps-jwplayer-front')
            .assert.visible('input[type=username]')
            .setValue('input[type=username]', 'testuser@email.com')
            .assert.visible('input[type=password]')
            .setValue('input[type=password]', 'secret')
            .assert.visible('button[type=submit]')
            .click('button[type=submit]')
            .assert.urlEquals('http://localhost:8080/')
            .useCss()
            .assert.visible('button[name=menu]')
            .click('button[name=menu]')
            .pause(500)
            .assert.elementPresent('a[href="/admin"]')
            .click('a[href="/admin"]')
            .waitForElementVisible('#app')
            .assert.urlContains('/admin')
            .assert.visible('tbody')
            .pause(500)
            .end()
    }
}