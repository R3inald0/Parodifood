describe('Search', function () {
    it('', function () {

        cy.intercept(
        'GET',                         
        '**?q=cypress.oi**'
        ).as('getSearchResults')

        cy.visit('https://duckduckgo.com')
    

    it.only('types and hits ENTER', () => {})
        cy.get('input[type="text"]')
        .should('be.visible')
        .type('cypress.io{enter}')

      })

  it('types and clicks the magnifying glass button', () => {})

  it('types and submits the form directly', () => {})



    })


