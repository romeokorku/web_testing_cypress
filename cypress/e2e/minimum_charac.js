describe('Validation Test', () => {
    it('double field test', () => {
     cy.visit(Cypress.env('url')+"/angularpractice/") 
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

     cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()

     cy.get('tr td:nth-child(4) strong').each(($el, index, $list) =>{
        cy.log($el.text())
     })                             //this will capture the price and display on the test runner
     //now becos the value has currency and . we have to split and remove that.
     var sum=0
     cy.get('tr td:nth-child(4) strong').each(($el, index, $list) =>{
        cy.log($el.text())

        const actualText=$el.text()
        var res = actualText.split(" ")
        res= res[1].trim()
        sum=Number(sum)+Number(res)
        cy.log(res)
     }).then(function()
     {
        cy.log(sum)
     })                  
     
    })
  })