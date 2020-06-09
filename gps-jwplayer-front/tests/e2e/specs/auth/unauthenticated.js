module.exports = {
    'check if page reverts back to login when not authenticated': browser => {
        browser
            .url(browser.launchUrl+'edit/KfhBrgyv')
            .useXpath()
            .waitForElementVisible('//*[@id="app"]')
            .assert.urlContains('/login')
            .end()
    }
}