
import {idNewEmployees} from '../fixtures/dataSmoke.json'
import {inputObj} from '../fixtures/dataFeature.json'
describe('Tests for list', () => {
    beforeEach(() => {
      cy.visit('https://employeestest2.herokuapp.com/')
    })
    it('Test adding star to empl',()=>{
        for (let index = 0; index < 3; index++) {
            cy.addEmployee(idNewEmployees,inputObj.Name,inputObj.Salary);
            cy.addStar();
            cy.likeIsOn(); 
        }
        cy.testAppInfoComponent(6);
    })  
  })