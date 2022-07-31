// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('testAppInfoComponent', (employeesInCompanyAll=3,employeesWithBonus=1) => { 
    cy.get('[data-cy="employeesAll"]').then(elem =>{
        const employeesAll = elem.find('h2').first().text();
        const employeesBonus = elem.find('h2').last().text();
        expect(employeesAll).to.equal(`All Employees in company: ${employeesInCompanyAll}`)
        expect(employeesBonus).to.equal(`Bonus take: ${employeesWithBonus}`)
      })
})
Cypress.Commands.add('testSearchComponent', (btns) => { 
  cy.get('#SearchInput')
  .should('have.attr','type','text')
  .and('have.attr','placeholder','Search employes')
cy.get('#SearchInput').parents('.search-panel').children('.btn-group').children('button').then( elem=>{
  expect(elem.length).to.equal(3);
}) 
btns.forEach( elem=>{ 
  cy.get('#SearchInput')
  .parents('.search-panel')
  .children('.btn-group')
  .should('contain',elem)

})

}) 

Cypress.Commands.add('lengthOfListEmployee', (count) => { 

  cy.get('[data-cy="listId"]').children('li').then( elem =>{
    expect(elem.length).to.equal(count)
   })
})

Cypress.Commands.add('likeIsOn', () => { 
  if(cy.get('[data-cy="listId"]').children('.like').last().should('have.class','like')){
    cy.get('[data-cy="listId"]')
    .children('.like')
    .find('.fa-star')
    .should('have.css','opacity','1')
    .and('have.css','transform','matrix(1, 0, 0, 1, 0, 0)')
  }
})
Cypress.Commands.add('testInputs', (testId,placeholder,type='text') => { 

  cy.get(`${testId}`)
  .should('have.attr','placeholder',`${placeholder}`)
  .and('have.attr','type',`${type}`)
})
Cypress.Commands.add('addEmployee', (id,inputText,inputNumber) => { 

  cy.get(id[0]).type(inputText)
  cy.get(id[1]).type(inputNumber)
  cy.get(id[0]).parent('form').find('button').click()
})
Cypress.Commands.add('deleteEmployee', () => { 

  cy.get('[data-cy="listId"]')
  .children('li')
  .last()
  .find('.btn-trash')
  .click()
})
Cypress.Commands.add('addBonus', () => { 
  cy.get('[data-cy="listId"]')
  .children('li')
  .last()
  .find('.btn-cookie')
  .click()
})
Cypress.Commands.add('addStar', () => { 
  cy.get('[data-cy="listId"]')
  .children('li')
  .last()
  .find('[data-toggle="rise"]')
  .click()
})



