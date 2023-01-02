const Page = require('./page');

class UsersPage extends Page {
    get loadingTitle() {
        return $('#users-loading');
    }

    get usersList() {
        return $('#users-list');
    }

    get usersItems() {
        return browser.react$$('User');
    }

    async loadingData() {
        try {
            await this.open();
            await this.loadingTitle.waitForDisplayed({timeout: 2000});
            await this.usersList.waitForDisplayed({timeout: 10000});
        } catch (e) {
            throw new Error('Unable to load users');
        }
    }

    async deleteUser() {
        try {
            const usersCount = await this.usersItems.length;

            if(!usersCount) {
                console.log('usersCount', usersCount);
                throw new Error('Users not found');
            }

            await this.usersItems[0].$('#user-delete').click();

            const usersCountAfterDelete = await this.usersItems.length;

            if (usersCount - usersCountAfterDelete !== 1) {
                throw new Error('User removing is not success or removed more than 1 user.');
            }
        } catch (e) {
            throw new Error('Unable to remove user. ' + e.message);
        }
    }

    open() {
        return super.open('users-test');
    }
}

module.exports = new UsersPage();
