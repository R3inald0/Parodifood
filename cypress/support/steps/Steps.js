import LoginPage from  '../pageobjects/LoginPage'
const loginPage = new LoginPage

const newLocal = 'que eu acesse a pagina Parodify';
Given(newLocal, () =>{
    loginPage.acessarSite()
});


When ('efetuar login {} e {}', (email, senha) => {
    loginPage.fazerLogin(email, senha)
    
});

When ('efetuar login sem suceso {} e {}', (email, senha) => {
    loginPage.fazerLogin(email, senha)
});