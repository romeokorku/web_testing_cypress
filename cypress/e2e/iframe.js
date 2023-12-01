/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress iframe'
describe ("iframe",()=>{
    it("Test frame",()=>{
cy.visit ("https://rahulshettyacademy.com/AutomationPractice/")

//cy.frameLoaded("#courses-iframe")

//cy.iframe().find("a[href='mentorship']").eq(0).click()

    })
})