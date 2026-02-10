class accountcreationpage {
    elements = {

        //account info
        password: () => cy.get('[data-qa="password"]'),
        genderMale: () => cy.get('#id_gender1'),
        genderFemale: () => cy.get('#id_gender2'),

        //address info
        firstname: () => cy.get('[data-qa="first_name"]'),
        lastName: () => cy.get('[data-qa="last_name"]'),
        address: () => cy.get('[data-qa="address"]'),
        country: () => cy.get('[data-qa="country"]'),
        state: () => cy.get('[data-qa="state"]'),
        city: () => cy.get('[data-qa="city"]'),
        zipcode: () => cy.get('[data-qa="zipcode"]'),
        mobile: () => cy.get('[data-qa="mobile_number"]'),

        days: () => cy.get('#days'),
        months: () => cy.get('#months'),
        years: () => cy.get('#years'),

        submitButton: () => cy.get('[data-qa="create-account"]'),
        successTitle: () => cy.get('h2.title.text-center'),
        continueButton: () => cy.get('[data-qa="continue-button"]'),

        //optional
        newsletter: () => cy.get('#newsletter'),
        offers: () => cy.get('#optin')
    }

    generateEmail() {
        return 'test${Date.now()}@gmail.com'
    }

    verifyDateofBirth() {
        this.elements.days().should('be.visible').and('be.enabled'),
        this.elements.months().should('be.visible').and('be.enabled'),
        this.elements.years().should('be.visible').and('be.enabled')
    }

    verifyPageLoaded() {
        cy.contains('Enter Account Information').should('be.visible')
        cy.contains('Address Information').should('be.visible')
    }

    verifyNewsletter() {
        this.elements.newsletter().should('exist')
        this.elements.offers().should('exist')
    }

    verifyVisualElements() {
        this.elements.genderMale().should('be.visible').and('be.enabled'),
        this.elements.genderFemale().should('be.visible').and('be.enabled'),
        this.elements.password().should('be.visible')
    }

    fillMandatoryFields(exclude = []) {
        if (!exclude.includes('password')) this.elements.password().type('Test@1234')
        if (!exclude.includes('firstname')) this.elements.firstname().type('John')
        if (!exclude.includes('lastname')) this.elements.lastName().type('Doe')
        if (!exclude.includes('address')) this.elements.address().type('Main Street')
        if (!exclude.includes('country')) this.elements.country().select('United States')
        if (!exclude.includes('states')) this.elements.state().type('California')
        if (!exclude.includes('city')) this.elements.city().type('Los Angeles')
        if (!exclude.includes('zipcode')) this.elements.zipcode().type('90001')
        if (!exclude.includes('mobile')) this.elements.mobile().type('081234567890')
    }

    submit() {
        this.elements.submitButton()
        .click()
    }

    verifyAccountcreated() {
        this.elements.successTitle()
        cy.url().should('include', '/account_created')
    }

    continueToHome() {
        this.elements.continueButton()
        .should('be.visible')
        .click()
    }
}

export default new accountcreationpage()