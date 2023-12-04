 //<reference types="Cypress" />
import HomePage from "./pageObjects/HomePage"
import ProductPage from "./pageObjects/ProductPage"
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
const homePage=new HomePage()
const productPage=new ProductPage()

    cy.visit('https://rahulshettyacademy.com/angularpractice/')
homePage.getEditBox().type(this.data.name)
//homePage.getGender().select(this.data.gender)
homePage.getEntrepreneur().should('be.disabled')
homePage.getShopTab().click()


//cy.get(':nth-child(2) > .nav-link ').click()
productPage.getItem().each(($el, index, $list) => {
   if ($el.text().includes('Blackberry'))
   {
       cy.get('button.btn.btn-info').eq(index).click()
   }
})

productPage.getcheckOutButton().click()
cy.contains('Checkout').click()
cy.get('#country').type('India')
cy.wait(8000)
cy.get('.suggestions > ul > li > a').click()
cy.get(".checkbox>label").click()
cy.wait(9000)
cy.get('.ng-untouched >.btn').click()   // or u can use this css for the same element input[type="submit"]
//cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-)') //becuase there are spaces in the text cypress was epecting exact match which in this case did not work. so edit to below command instead.
cy.get('.alert').then(function(element)
{
    const actualText=element.text()
    expect(actualText.includes("Success")).to.be.true

})
})
   


})