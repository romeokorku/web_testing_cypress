class ProductPage
{
getItem()
{
   return  cy.get('h4.card-title')   
}

getcheckOutButton()
{
    return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link') 
}
}

export default ProductPage;