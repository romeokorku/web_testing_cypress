describe('My First Test Suite', () => {
    it('My FirstTest case', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    cy.get('.search-keyword').type('ca')
    cy.get('.product:visible').should('have.length',4)
    //parent-child relationship
    cy.get('.products').find('.product').should('have.length',4)
    cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()
    //Get the text in an array
    cy.get('.products').find('.product').each(($el, index, $list) => {
      const textVeg=$el.find('h4.product-name').text()
      if(textVeg.includes('Cashews'))
      {
      cy.wrap($el).find('button').click()  
      }
    })
    //Asynchronous:all the request will hit the server at a time. But for synchronous every request will hit the server in sequence(wait for one to complete before another is executed.opposite for asynchronous).
    //CYPRESS IS ASYNCHRONOUS.
    //assert if logo text is correctly displayed

   //Verify and automate with checkbox

  })
})