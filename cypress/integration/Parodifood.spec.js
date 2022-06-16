describe('Cadastro',function () {
    it('User must register', function (){

    cy.visit('http://parodifood.qaninja.academy/')

    cy.get('.btn').should('be.visible').click()
    cy.get('.search-link > .fa').click()
    cy.get('.form-control').type('HABIT`S')

    cy.get(':nth-child(4) > mt-restaurant > a > .place-info-box > .place-info-box-icon > img').click()
    cy.get(':nth-child(1) > .menu-item-info-box > .menu-item-info-box-content > .add-to-cart').click()
    cy.get('.btn-success').click()

    cy.get(':nth-child(2) > .col-sm-6 > mt-input-container > .form-group > .form-control').type('reinaldo')
    cy.get(':nth-child(2) > :nth-child(4) > mt-input-container > .form-group > .form-control').type('reinaldo@hotmail.com')
    cy.get(':nth-child(5) > mt-input-container > .form-group > .form-control').type('reinaldo@hotmail.com')
    cy.get(':nth-child(3) > .col-sm-6 > mt-input-container > .form-group > .form-control').type('altos altos')
    cy.get(':nth-child(3) > :nth-child(3) > mt-input-container > .form-group > .form-control').type('1233')
    cy.get(':nth-child(3) > :nth-child(4) > mt-input-container > .form-group > .form-control').type('esquina')
    cy.get(':nth-child(1) > label > .iradio_flat-red > .iCheck-helper').click()
    cy.get('.col-xs-12 > .btn').click()

    /// Pedido Conluído    

    })

    it('Incorrect empty ', function(){
        cy.visit('http://parodifood.qaninja.academy/')
        cy.get('.btn').should('be.visible').click()
        cy.get('.search-link > .fa').click()
        cy.get('.form-control').type('HABIT`S')

        cy.get(':nth-child(4) > mt-restaurant > a > .place-info-box > .place-info-box-icon > img').click()
         cy.get(':nth-child(1) > .menu-item-info-box > .menu-item-info-box-content > .add-to-cart').click()
          cy.get('.btn-success').click()
          cy.get('.btn').should('be.visible')

        })

          it.only('invalid email ', function(){
            cy.visit('http://parodifood.qaninja.academy/')
        cy.get('.btn').should('be.visible').click()
        cy.get('.search-link > .fa').click()
        cy.get('.form-control').type('HABIT`S')

        cy.get(':nth-child(4) > mt-restaurant > a > .place-info-box > .place-info-box-icon > img').click()
         cy.get(':nth-child(1) > .menu-item-info-box > .menu-item-info-box-content > .add-to-cart').click()
          cy.get('.btn-success').click()
          cy.get(':nth-child(2) > .col-sm-6 > mt-input-container > .form-group > .form-control').type('reinaldo')
    cy.get(':nth-child(2) > :nth-child(4) > mt-input-container > .form-group > .form-control').type('reinaldohotmail.com')
    cy.get(':nth-child(5) > mt-input-container > .form-group > .form-control').type('reinaldohotmail.com')
    cy.get(':nth-child(3) > .col-sm-6 > mt-input-container > .form-group > .form-control').type('altos altos')
    cy.get(':nth-child(3) > :nth-child(3) > mt-input-container > .form-group > .form-control').type('1233')
    cy.get(':nth-child(3) > :nth-child(4) > mt-input-container > .form-group > .form-control').type('esquina')
         
    
   })
   
})
