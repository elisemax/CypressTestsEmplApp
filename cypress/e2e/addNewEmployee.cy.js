import {idNewEmployees} from '../fixtures/dataSmoke.json'
import {inputObj} from '../fixtures/dataFeature.json'
describe('Simple test to add new Employee', () => {
    beforeEach(() => {
      cy.visit('https://employeestest2.herokuapp.com/')
    })
    it('Test add new Empl',()=>{
        let lengthListStart = 3;
            for (let index = 0; index < 4; index++) {
                cy.addEmployee(idNewEmployees,inputObj.Name,inputObj.Salary)
                lengthListStart++;
            }
        cy.lengthOfListEmployee(lengthListStart);
    })
  })