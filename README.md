# Automation mystory using cypress
### Link page: http://automationpractice.com/index.php 

### Environment Cypress
   ####    Install [NodeJs](https://nodejs.org/en/download/) 
   ####    Install [Java](https://www.java.com/pt-BR/download/ie_manual.jsp?locale=pt_BR)
   ####    Install [Vscode](https://code.visualstudio.com/) or one IDE your preferences

   <hr>

### Clone Project 
```
   $ git clone https://github.com/m4teuss/mystory-cypress.git
```


### Install Cypress and your dependences 
   
#### Install cypress and cucumber
```
   $ apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
   $ npm install --save-dev cypress cypress-cucumber-preprocessor 
  
   //this command, will create the folder cypress
   $ npx cypress open  
```

#### Remove exemples default of cypress
``` 
   $ cd integration 
   $ rm -r [all folders and files]
```

#### Create 3 new directory to [cypress/supoort]
```
   $ cd cypress/support
   $ mkdir elements
   $ mkdir pageobjects
   $ mkdir steps
```

### Configuration files of project [Cypress x Cucumber]

#### Add -> [cypress/plugins/index.js]
```
   const cucumber = require('cypress-cucumber-preprocessor').default
   module.exports = (on, config) => {
   on('file:preprocessor', cucumber())
   }
```
#### Add -> [package.json]
```
  {
      "scripts": {
           "test:chrome": "cypress run --browser chrome --no-exit"
      },
 
      "cypress-cucumber-preprocessor": {
           "step_definitions": "cypress/support/steps"
      }
   }
```


### Running Tests
``` 
 $ npx cypress run //Hedless
 $ npx cypress open 

```



