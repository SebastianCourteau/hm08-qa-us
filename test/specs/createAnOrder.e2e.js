const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {
    it('Should set the address', async () => {
        await browser.url(`/`)
        await page.fillAddresses( 'East 2nd street, 601', '1300 1st St');
        expect($(page.fromField).toHaveValue('East 2nd street, 601'));
        expect($(page.toField)).toHaveValue('1300 1st St');
    }),

    it('should select the Supportive taxi plan', async () => {
        await browser.url('/')
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const selectSupportive = await $(page.supportiveTaxi);
        await selectSupportive.click();
        await expect(selectSupportive.parentElement()).toHaveElementClass('active');
    }),
    it('Should add a card number', async () => {
        await browser.url('/')
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.fillCardNumber('2345 0000 2345', '12');
        expect($(page.cardNumber).toHaveValue('2345 0000 2345'));
        expect($(page.cvvCode).toHaveValue('12'));
    } ),


    it('should save the phone', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
    }),

    it('should write a message to the driver', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.writeDriverMessage("Hey, hows it going");
        expect($(page.taxiMessage).toHaveValue("Hey, hows it going"));
    }),

    it('should order blankets and handkerchiefs', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const selectBlankets = await $(page.blanketsAndFriends);
        await selectBlankets.click();
        expect(selectBlankets.parentElement()).toHaveElementClass('active');
    }),

    it('should add two ice creams to order', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const selectIceCream = await $(page.addIceCream);
        await selectIceCream.click();
        await selectIceCream.click();
        expect($(page.addIceCream).toHaveValue('2'))
    }),

    it('should display car search modal', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const selectSupportive = await $(page.supportiveTaxi);
        await selectSupportive.click();
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await page.fillCardNumber('2345 0000 2345', '12');
        const openCarSearchModal = await $(page.submitOrder);
        await openCarSearchModal.click();
        expect($(page.carSearchModal).toBeExisting());
    }),

    it('should wait for driver to appear', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const selectSupportive = await $(page.supportiveTaxi);
        await selectSupportive.click();
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await page.fillCardNumber('2345 0000 2345', '12');
        const openCarSearchModal = await $(page.submitOrder);
        await openCarSearchModal.click();
        await browser.pause(33000);
        expect($(page.driverModal).toBeExisting())
    })
})
