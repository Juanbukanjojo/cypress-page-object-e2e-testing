Cypress.Commands.add('signup', (username, email) => {
    cy.visit('https://automationexercise.com/login')
    cy.get('[data-qa="signup-name"]').type(username)
    cy.get('[data-qa="signup-email"]').type(email)
    cy.get('.signup-form')
        .find('button[type="submit"]')
        .click()

})

Cypress.Commands.add('login', (email, password) => {
    cy.visit('https://automationexercise.com/login')
    cy.get('[data-qa="login-email"]').type(email)
    cy.get('[data-qa="login-password"]').type(password)
    cy.get('.login-form')
        .find('button[type="submit"]')
        .click()

})