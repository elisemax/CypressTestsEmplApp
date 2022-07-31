/// <reference types="cypress"/>
import {btnsSearch,idNewEmployees} from '../fixtures/dataSmoke.json'

describe('Smoke tests for components', () => {
  beforeEach(() => {
    cy.visit('https://employeestest2.herokuapp.com/')
  })
  it('Test app info component', () => {
    cy.testAppInfoComponent(3,1)
  })
  it('Test search component', ()=>{
    cy.testSearchComponent(btnsSearch)
    cy.get('#SearchInput')
    .parents('.search-panel')
    .children('.btn-group')
    .children('button')
    .first()
    .should('have.class','btn-light')
  })
  it('Test list employees component',()=>{
    cy.likeIsOn();
    cy.lengthOfListEmployee(3);

  })
  it('Test add new employee component',()=>{
      cy.testInputs(idNewEmployees[0],'Name')
      cy.testInputs(idNewEmployees[1],'Salary $?','number')
  })
})