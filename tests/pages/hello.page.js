const Page = require('./page');

class HelloPage extends Page {
    get toggleBtn () {
        return $('#toggle');
    }

    get title () {
        return $('#hello');
    }

    get input () {
        return $('#search ');
    }

    async toggleTitleWithInput (text) {
        await this.input.setValue(text);
        await this.toggleBtn.click();
    }

    open () {
        return super.open('hello');
    }
}

module.exports = new HelloPage();
