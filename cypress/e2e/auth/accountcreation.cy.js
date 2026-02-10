import accountcreationpages from "../../pages/accountcreationpages"

describe('user account creation', () => {

    const emailgenerate = `test${Date.now()}@gmail.com`

    //to reach account creation, user must create account using username and email
    beforeEach(() => {
        cy.signup('John Doe', emailgenerate)
    })
    

    it('visual test - User account creation', () => {

        //visual test - enter account information form

        cy.log('AC-VIS-01: account creation form is displayed')
        accountcreationpages.verifyPageLoaded()

        //visual test - gender checkbox

        cy.log('AC-VIS-02: gender checkbox')
        accountcreationpages.verifyVisualElements()

        //only email that read-only field
        cy.log('AV-VIS-03: email is read-only')
        cy.get('[data-qa="email"]').should('be.disabled')
        
        //password is visible
        cy.log('AV-VIS-04: password is visible')
        cy.get('[data-qa="password"]').should('be.visible')

        //date of birth markdown is visible and clickable
        cy.log('AC-VIS-05: date of birth markdown is visible and clickable')
        accountcreationpages.verifyDateofBirth()

        //newsletter and offer is visible
        cy.log('AC-VIS-06: newsletter and offer is visible')
        accountcreationpages.verifyNewsletter()

        //visual test - address information form

        cy.log('AC-VIS-07: First name, last name, company name')
        cy.get('[data-qa="first_name"]').should('be.visible').and('be.enabled')
        cy.get('[data-qa="last_name"]').should('be.visible').and('be.enabled')
        cy.get('[data-qa="company"]').should('be.visible').and('be.enabled')

        cy.log('AC-VIS-08: address, country, state, city, zipcode, mobile number')
        cy.get('[data-qa="address"]').should('be.visible').and('be.enabled')
        cy.get('[data-qa="address2"]').should('be.visible').and('be.enabled')
        cy.get('[data-qa="country"]').should('be.visible').and('be.enabled')
        cy.get('[data-qa="state"]').should('be.visible').and('be.enabled')
        cy.get('[data-qa="city"]').should('be.visible').and('be.enabled')
        cy.get('[data-qa="zipcode"]').should('be.visible').and('be.enabled')
        cy.get('[data-qa="mobile_number"]').should('be.visible').and('be.enabled')
    })

    it('AC-NEG-01 negative: submit the form without filling in any mandatory fields', () => {

        accountcreationpages.submit()
            
        //Assertion: user still on /signup
        cy.url().should('include', '/signup')

    })

    it('AC-NEG-02 negative: submit the form without filling password', () => {

        accountcreationpages.fillMandatoryFields(['password'])
        accountcreationpages.submit()
        //Assertion: user still in /signup
        cy.url().should('include', '/signup')

    })
    
    it('AC-NEG-03 Negative: Should not create account when first name is empty', () => {
        
        accountcreationpages.fillMandatoryFields(['firstname'])
        accountcreationpages.submit()
        
        //Assertion: user still on /signup
        cy.url().should('include', '/signup')
    })
    
    it('AC-NEG-04 negative: Should not create account when address is empty', () => {

        accountcreationpages.fillMandatoryFields(['address'])
        accountcreationpages.submit()
 
        //Assertion: user still on /signup
        cy.url().should('include', '/signup')
    })
        
    it('AC-NEG-05 negative: should not create account when mobile number is empty', () => {
        
        accountcreationpages.fillMandatoryFields(['mobile'])
        accountcreationpages.submit()
        
        //Assertion: user still on /signup
        cy.url().should('include', '/signup')
    })
        

    it('AC-HPY-01 happy path: user success create account', () => {
        
        accountcreationpages.fillMandatoryFields()
        accountcreationpages.submit()

        //user success create account
        accountcreationpages.verifyAccountcreated()

        //back to home page
        accountcreationpages.continueToHome()
        
        //logout account
        cy.get('a[href="/logout"]').click()
    })
})
