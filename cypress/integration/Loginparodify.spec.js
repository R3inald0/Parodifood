describe('Login', function () {
    it('User should be logged in', function () {
    cy.viewport(920, 617)
        cy.visit('https://parodify.herokuapp.com/users/sign_in')
        cy.get('#new_user').should('be.visible')

        
        cy.get('#user_email').type('alicemiguel.souza@hotmail.com')
        cy.get('#user_password').type('satell5566')
        cy.get('input[value="Log in"]').click()

        cy.get('nav[class*="is-fixed-top"] a')
             .should('have.attr', 'href', '/users/sign_out');

    })

    it('User not found', function () {
        cy.viewport(920, 617)
        cy.visit('https://parodify.herokuapp.com/users/sign_in')
        cy.get('#new_user').should('be.visible')
 
        cy.get('#user_email').type('alicemiguel.souza@hotmail.com')
        cy.get('#user_password').type('123456')
        cy.get('input[value="Log in"]').click()

        cy.get('.message-body')
            .should('contain', 'Oops! Email e/ou senha incorretos.')
    
    })

    it('Incorrect password', function () {
        cy.viewport(920, 617)
        cy.visit('https://parodify.herokuapp.com/users/sign_in')
        cy.get('#new_user').should('be.visible')
 
        cy.get('#user_email').type('alicemiguel.souzaAAA@hotmail.com')
        cy.get('#user_password').type('123456')
        cy.get('input[value="Log in"]').click()

        cy.get('.message-body')
            .should('contain', 'Oops! Email e/ou senha incorretos.')


    })
   
})