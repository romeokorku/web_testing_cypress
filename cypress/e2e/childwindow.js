describe('Dropdowns', () => {
    it('Test Static Dropdown', () => {

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get('#opentab').invoke('removeAttr','target').click();
        //becos u move to a new page based on above, u introduce the origin command and keep all ya test on the new page there.once u come outside the bracket, it treats it as u refering to the parent tab.
    cy.origin("https://www.qaclickacademy.com/",()=>
    {
        cy.get('#navbarSupportedContent a[href="about.html"]').click()
        cy.get(".mt-50 h2").should('contain','QAClick Academy');
    })



    
    })

})
