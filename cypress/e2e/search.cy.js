import {idNewEmployees} from '../fixtures/dataSmoke.json'

describe('Test Search', () => {
    beforeEach(() => {
      cy.visit('https://employeestest2.herokuapp.com/')
    })
    it('Test Search input',()=>{
        cy.addEmployee(idNewEmployees,"Special",1000)
        cy.addEmployee(idNewEmployees,"Special2",300)
        cy.get('#SearchInput').type("Special")
        cy.get('[data-cy="listId"]').children('li').should('be.visible').and('have.length','2')
    })
    it('Test button UpEmpl',()=>{
        cy.addEmployee(idNewEmployees,"Special",2000)
        cy.addStar();
        cy.addEmployee(idNewEmployees,"Special2",2000)
        cy.addStar();
        cy.contains('button','Up Empl').click()
        cy.get('[data-cy="listId"]').children('li').should('be.visible').and('have.length','3')
    })
    it('Test button Salary more than 1000',()=>{
        cy.addEmployee(idNewEmployees,"Special",1000)
        cy.addEmployee(idNewEmployees,"Special",1001)
        cy.contains('button','Sallary more then 1000$').click()
        cy.get('[data-cy="listId"]').children('li').should('be.visible').and('have.length','3')
    })
})