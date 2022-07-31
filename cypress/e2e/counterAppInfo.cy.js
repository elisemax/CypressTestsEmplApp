import {idNewEmployees} from '../fixtures/dataSmoke.json'
import {inputObj} from '../fixtures/dataFeature.json'
describe('Simple test to add new Employee', () => {
    beforeEach(() => {
      cy.visit('https://employeestest2.herokuapp.com/')
    })
    it('Test Counter increase',()=>{
        cy.addEmployee(idNewEmployees,inputObj.Name,inputObj.Salary);
        cy.addEmployee(idNewEmployees,inputObj.Name,inputObj.Salary);
        cy.testAppInfoComponent(5);
    })
    it('Test Counter decrease',()=>{
        cy.deleteEmployee();
        cy.deleteEmployee();
        cy.testAppInfoComponent(1);
    })
    it('Test Counter bonus',()=>{
        cy.addEmployee(idNewEmployees,inputObj.Name,inputObj.Salary);
        cy.addBonus();
        cy.addEmployee(idNewEmployees,inputObj.Name,inputObj.Salary);
        cy.addBonus();
        cy.testAppInfoComponent(5,3);
        cy.addBonus();
        cy.testAppInfoComponent(5,2);
    })    
  })