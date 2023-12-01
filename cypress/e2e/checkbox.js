describe('My First Checkbox', () => {
    it('Test Checkbox', () => {

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get("#checkBoxOption1").check().should("be.checked")
    cy.get("#checkBoxOption1").check().should("have.value","option1")   
    })

    it('Test UnCheckbox', () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")   
    cy.get("#checkBoxOption1").uncheck()
    cy.get("#checkBoxOption1").uncheck().should("not.be.checked")
    cy.get('input[type="checkbox"]').check(['option2','option3']) //check([]) is sending argument to check to look for option 2 and option 3.

 
    })
  })