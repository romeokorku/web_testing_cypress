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

})
   


})