describe('Validation Test', () => {
    it('double field test', () => {
     cy.visit('https://rahulshettyacademy.com/angularpractice/') 
     cy.get('form input[name="name"]:nth-child(2)').type('Romeo')
     cy.get('form input[name="name"]:nth-child(2)').should('have.attr','minlength','2') //minimum length of 2
     cy.get('form input[name="name"]:nth-child(2)').should('have.attr','type','text')   //field is a text field
     cy.get("#inlineRadio3").should('be.disabled')  // field should be disabled

     //checking for a list of items in a page and select one.
     cy.get(':nth-child(2) > .nav-link ').click()
     cy.get('h4.card-title').each(($el, index, $list) => {
        if ($el.text().includes('Blackberry'))
        {
            cy.get('button.btn.btn-info').eq(index).click()
        }
     })
    })
  })