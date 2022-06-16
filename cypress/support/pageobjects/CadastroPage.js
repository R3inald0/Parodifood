import Elements from "../elements/Elements";
const elements =  new Elements

const url = Cypress.config('baseUrl')


class CadastroPage{

    acessarSite(){
        cy.visit(url)
    }

    fazerCadastro(email, senha, senha){

        if (email == 'alicemiguel.souza@hotmail.com' && senha == "satell5566"){

            cy.get(elements.campoEmail()).type(email)
            cy.get(elements.campoSenha()).type(senha)
            cy.get(elements.campoSenha()).type(senha)
            cy.get(elements.botaoCadastrar()).click()
            // validar tela principal
            cy.url().should('be.equal', 'https://parodify.herokuapp.com/users/sign_up')
            cy.get(':nth-child(1) > .is-size-5').should('be.visible')


        }
    

    } // fecha função
    




} export default LoginPage;

