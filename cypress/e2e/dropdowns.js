describe('Dropdowns', () => {
    it('Test Static Dropdown', () => {

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get('select').select('option2').should('have.value','option2')

    
    })

    it('Test Dynamic Dropdown', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("#autocomplete").type('ind')

        cy.get('.ui-menu-item div').each(($el, index, $list) => {       //loop through all the options.
            
            if($el.text()==="India")
            {
            cy.wrap($el).click()  
            }
        
    
        
        })
        cy.get("#autocomplete").should('have.value','India')
    })

})