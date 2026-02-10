describe('user registration', () => {
    
    const emailgenerate = `test${Date.now()}@gmail.com`

    const clearForm = () => {
        cy.get('[data-qa="signup-name"]').clear()
        cy.get('[data-qa="signup-email"]').clear()
    }

    it('register flow: visual, negative, positive', () => {
        
        //visit website
        cy.visit('https://automationexercise.com/login')

        //visual test - register form
        cy.log('RG-VIS-01: Register form is displayed correctly')

        cy.get('a[href="/login"]').click()
        cy.url().should('include', '/login')

        cy.log('RG-VIS-02: signup name and email is visible')
        cy.get('.signup-form').should('be.visible')
        cy.get('[data-qa="signup-name"]')
            .should('be.visible')
            .should('have.attr', 'placeholder', 'Name')
        cy.get('[data-qa="signup-email"]')
            .should('be.visible')
            .should('have.attr', 'placeholder', 'Email Address')
        cy.get('[data-qa="signup-button"]').should('be.visible')

        //negtive test - register with empty username and email
        cy.log('RG-NEG-01: submit signup form with empty username and email')
        cy.get('[data-qa="signup-button"]').click()
        
        cy.url().should('include', '/login')
        
        cy.get('[data-qa="signup-name"]').should('have.value', '')
        cy.get('[data-qa="signup-email"]').should('have.value', '')
        
        //negative test - empty with username
        cy.log('RG-NEG-02: submit with empty username')
        cy.get('[data-qa="signup-email"]').type(emailgenerate)
        cy.get('[data-qa="signup-button"]').click()
        //user proceed register without fill the username 
        //the result, user still on the /login page
        cy.url().should('include', '/login')
        
        //negative test - submit with empty email
        cy.log('RG-NEG-03: submit with empty email')
        clearForm()
        cy.get('[data-qa="signup-name"]').type('John Doe')
        cy.get('[data-qa="signup-button"]').click()
        cy.url().should('include', '/login')

        //negative test - submit with invalid email format
        cy.log('RG-NEG-04: submit with invalid email format')
        clearForm()
        cy.get('[data-qa="signup-name"]').type('John')
        cy.get('[data-qa="signup-email"]').type('TestId')
        cy.get('[data-qa="signup-button"]').click()
        cy.url().should('include', '/login')

        //happypath test - submit with valid name and email
        cy.log('RG-HPY-01: submit with valid name and email')
        clearForm()
        cy.signup('John Doe', emailgenerate)
        cy.url().should('include', '/signup')
    })

})