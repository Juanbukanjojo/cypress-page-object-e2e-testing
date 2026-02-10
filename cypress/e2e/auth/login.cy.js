describe('User Login', () => {

    const clearForm = () => {
        cy.get('[data-qa="login-email"]').clear()
        cy.get('[data-qa="login-password"]').clear()
    }

    it('register flow: visual, negative, positive', () => {
        
        //visit website
        cy.visit('https://automationexercise.com/login')

        //visual test - register form

        //go to /login page first
        cy.get('a[href="/login"]').click()
        cy.url().should('include', '/login')

        cy.log('Login form is displayed correctly')
        cy.get('.login-form').should('be.visible')
        cy.get('[data-qa="login-email"]')
            .should('be.visible')
            .should('have.attr', 'placeholder', 'Email Address')
        cy.get('[data-qa="login-password"]')
            .should('be.visible')
            .should('have.attr', 'placeholder', 'Password')
        cy.get('[data-qa="login-button"]').should('be.visible')

        //negtive test - login with empty email and password
        cy.log('Negative: submit login form with empty email and password')
        cy.get('.login-form')
            .find('button[type="submit"]')
            .click()
        
        cy.url().should('include', '/login')
        
        cy.get('[data-qa="login-email"]').should('have.value', '')
        cy.get('[data-qa="login-password"]').should('have.value', '')
        
        //negative test - submit with empty email address
        cy.log('Negative: submit with empty email address')
        cy.get('[data-qa="login-password"]').type('Test@1234')
        cy.get('.login-form')
            .find('button[type="submit"]')
            .click()
        //user proceed register without fill the email 
        //the result, user still on the /login page
        cy.url('include', '/login')
        
        //negative test - submit with empty password
        cy.log('negative: submit with empty password')
        clearForm()
        cy.get('[data-qa="login-email"]').type('TestId125@gmail.com')
        cy.get('.login-form')
            .find('button[type="submit"]')
            .click()
        cy.url().should('include', '/login')

        //negative test - submit with invalid email format
        cy.log('negative: submith with invalid email format')
        clearForm()
        cy.get('[data-qa="login-password"]').type('Test@1234')
        cy.get('[data-qa="login-email"]').type('JohnDoe')
        cy.get('.login-form')
            .find('button[type="submit"]')
            .click()
        cy.url().should('include', '/login')

        //negative test - submit with invalid password
        cy.log('negative: submit with invalid password')
        clearForm()
        cy.get('[data-qa="login-email"]').type('TestId125@gmail.com')
        cy.get('[data-qa="login-password"]').type('Test111')
        cy.get('.login-form')
            .find('button[type="submit"]')
            .click()
        cy.url().should('include', '/login')

        //positive test - submit with valid name and email
        cy.log('positive: submit with valid email and passowrd')
        clearForm()
        cy.login('TestId125@gmail.com', 'Test@1234')
        cy.url().should('include', '/signup')
        

    })
})