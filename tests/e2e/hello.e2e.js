const HelloPage = require('../pages/hello.page')

describe('My Hello page App', () => {
    it('should hello title to be exist', async () => {
        await HelloPage.open();
        await HelloPage.toggleTitleWithInput('hello');
        await expect(HelloPage.title).toBeExisting();
        await HelloPage.toggleBtn.click();
        await expect(HelloPage.title).not.toBeExisting();
    })

    it('should hello title not to be exist', async () => {
        await HelloPage.open();
        await HelloPage.toggleTitleWithInput('helfdsflo');
        await expect(HelloPage.title).not.toBeExisting();
    })
})


