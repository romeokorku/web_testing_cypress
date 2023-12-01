/// <reference types="Cypress" />
//import example from '../fixtures/example.json'
describe('Second Test Suite',()=>
{
    before(function(){
        //runs once before all tests in the block
        //cy.fixtures('example').then(function(data)
        //cy.fixture('example')
        cy.fixture('example').then((data) =>            //
        {
            this.data = data
        })
     })

it('First Test Case',function () {
    cy.visit('https://rahulshettyacademy.com/angularpractice/')
    cy.get('form input[name="name"]:nth-child(2)').type(this.data.name);
    cy.get('select').select(this.data.gender)

   
        
    
    
    
    

    })


})
