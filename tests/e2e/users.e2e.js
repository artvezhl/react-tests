const UsersPage = require('../pages/users.page');

describe('Users page test', () => {
    it('is users loaded', async () => {
        await UsersPage.loadingData();
    })

    it('is user deleted', async () => {
        await UsersPage.loadingData();
        await UsersPage.deleteUser();
    })
})
