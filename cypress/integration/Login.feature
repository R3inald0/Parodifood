Feature: Fluxo de LoginPage

    Background: Acessar pagina Parodify
        Given que eu acesse a pagina Parodify

    Scenario Outline: Login com sucesso
    When efetuar login <email> e <senha>

    Examples:
        | email                          | senha      | 
        | alicemiguel.souza@hotmail.com  | satell5566 | 



    Scenario Outline: Login sem sucesso
    When efetuar cadastro sem sucesso <email> e <senha>

    Examples:
        | email                          | senha      | 
        | alicemiguel.souza@hotmail.com  | Satell5566 | 
        | licemiguel.souza@hotmail.com   | satell5566 |