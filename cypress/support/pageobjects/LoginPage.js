import Elements from "../elements/Elements";
const elements =  new Elements

const url = Cypress.config('baseUrl')


class LoginPage{

    acessarSite(){
        cy.visit(url)
    }

    fazerLogin(email, senha){

        if (email == 'alicemiguel.souza@hotmail.com' && senha == "satell5566"){

            cy.get(elements.campoEmail()).type(email)
            cy.get(elements.campoSenha()).type(senha)
            cy.get(elements.botaoEntrar()).click()
            // validar tela principal
            cy.url().should('be.equal', 'https://parodify.herokuapp.com/')
            cy.get('.icon > .fas').should('be.visible')

            
    
        }else{
            cy.get(elements.campoEmail()).type(email)
            cy.get(elements.campoSenha()).type(senha)
            cy.get(elements.botaoEntrar()).click()
            // validar erro de login
            cy.get('.message-body').should('be.visible').and('contain', 'Oops! Email e/ou senha incorretos.')

        }
    

    } // fecha função
    




} export default LoginPage;

