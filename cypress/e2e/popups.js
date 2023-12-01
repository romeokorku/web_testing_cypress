describe('PopUps', () => {
    it('Test PopUps', () => {

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get("#alertbtn").click();
    cy.get('input[value="Confirm"]').click();

    cy.on('winddow:alert',(str)=>
    {
        expect(str).to.equal('Hello,share this practice page and share your knowledge')
    })
    
    })

})
