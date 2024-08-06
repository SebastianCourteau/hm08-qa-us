module.exports = {
    // Inputs
    fromField: '#from',
    toField: '#to',
    phoneNumberField: '#phone',
    codeField: '#code',
    taxiMessage: '#comment',
    cardNumber: '#number',
    cvvCode: '.card-second-row #code',
    // Buttons
    callATaxiButton: 'button=Call a taxi',
    phoneNumberButton: '//div[starts-with(text(), "Phone number")]',
    nextButton: 'button=Next',
    confirmButton: 'button=Confirm',
    submitOrder: '.smart-button-wrapper .smart-button',
    supportiveTaxi: '//div[contains(text(), "Supportive")]',
    orderReqs: '.reqs-head',
    paymentMethod: '.pp-text',
    addCard:'//div[contains(text(), "Add card")]',
    linkCard: '//button[contains(text(), "Link")]',
    closeAddCard: '.payment-picker .section.active .close-button',
    loseFocus: '//div[text() = "Adding a card"]',
    blanketsAndFriends: '.r-sw-container .slider.round',
    addIceCream:'.r-counter-container .r-counter .counter-plus',
    // Modals
    phoneNumberModal: '.modal',
    carSearchModal: '.order-body .order-header',
    driverModal: '.order-body .order-buttons .',
    // Functions
    fillAddresses: async function(from, to) {
        const fromField = await $(this.fromField);
        await fromField.setValue(from);
        const toField = await $(this.toField);
        await toField.setValue(to);
        const callATaxiButton = await $(this.callATaxiButton);
        await callATaxiButton.waitForDisplayed();
        await callATaxiButton.click();
    },
    fillPhoneNumber: async function(phoneNumber) {
        const phoneNumberButton = await $(this.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const phoneNumberModal = await $(this.phoneNumberModal);
        await phoneNumberModal.waitForDisplayed()
        const phoneNumberField = await $(this.phoneNumberField);
        await phoneNumberField.waitForDisplayed();
        await phoneNumberField.setValue(phoneNumber);
    },
    submitPhoneNumber: async function(phoneNumber) {
        await this.fillPhoneNumber(phoneNumber);
        // we are starting interception of request from the moment of method call
        await browser.setupInterceptor();
        await $(this.nextButton).click();
        // we should wait for response
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(2000);
        const codeField = await $(this.codeField);
        // collect all responses
        const requests = await browser.getRequests();
        // use first response
        await expect(requests.length).toBe(1)
        const code = await requests[0].response.body.code
        await codeField.setValue(code)
        await $(this.confirmButton).click()
    },
    selectSupportive: async function() {
   const selectSupportive = await page.supportiveTaxi();
   await selectSupportive.click();
   return selectSupportive($supportiveTaxi);
    },

    fillCardNumber: async function(cardNumber, cvvCode) {
        const paymentButton = await $(this.paymentMethod);
        await paymentButton.click();
        const cardAddButton = await $(this.addCard);
        await cardAddButton.click();
        const cardNumberInput = await $(this.cardNumber);
        await cardNumberInput.setValue(cardNumber);
        const cvvCodeInput = await $(this.cvvCode);
        await cvvCodeInput.setValue(cvvCode);
        const focusLossClick = await $(this.loseFocus);
        await focusLossClick.click();
        const linkCardButton = await $(this.linkCard);
        await linkCardButton.click();
        const closeAddCardButton = await $(this.closeAddCard);
        await closeAddCardButton.click();
    },

    writeDriverMessage: async function(taxiMessage) {
        const messageInput = await $(this.taxiMessage);
        await messageInput.setValue(taxiMessage);
    },

    selectBlankets: async function(blanketsAndFriends) {
        const hitBlanketsRadioButton = await $(this.blanketsAndFriends);
        await hitBlanketsRadioButton.click();
        return hitBlanketsRadioButton($blanketsAndFriends);
    },

    selectIceCream: async function(addIceCream) {
        const giveMeIceCream = await $(addIceCream);
        await giveMeIceCream.click();
        return giveMeIceCream($addIceCream);
    },

    openCarSearchModal: async function() {
        const submitOrderButton = await $(this.submitOrder);
        await submitOrderButton.waitForDisplayed();
        await submitOrderButton.click();
        return submitOrderButton($submitOrder);
    }
};

