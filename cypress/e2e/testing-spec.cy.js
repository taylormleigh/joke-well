const base = () => cy.visit('http://localhost:3000');

let isError = false;
const requestApi = () => {
  cy.get('.get-new-joke').click().request({failOnStatusCode: false, url:'https://karljoke.herokuapp.com/jokes/random'})
    .then( (response) => {
      //success
      if (response.status === 200) {
        isError = false;
      }
      //failure
      if (response.status !== 200) {
        isError = true;
      }
    })
};

describe('Home - layout loads correctly', () => {
  it('Checks that the main layout components have loded', () => {
    base();
    //layout components
    cy.get('#page-layout').should('exist').should('be.visible')
    cy.get('.header').should('exist').should('be.visible')
    cy.get('main').should('exist').should('be.visible')
    cy.get('.get-new-joke').should('exist').should('be.visible')

    //test API conditional rendering
    requestApi();
    //  API called with no error:
    if (!isError) {
      cy.get('.joke-container').should('exist').should('be.visible')
    }
    //  API called with error:
    if (isError) {
      cy.get('.error-message').should('exist').should('be.visible')
    }
  })
})

describe('Header - loads & functions correctly', () => {
  it('Checks that the header functions correctly', () => {
    base();
    //Get random joke button
    cy.get('.get-new-joke').should('exist').should('be.visible')
    cy.get('.get-new-joke').click()
    cy.get('.loading-message').should('be.visible')
    
    //View API docs
    cy.get('.api-docs-link').should('exist').should('be.visible')
    // cy.get('.api-docs-link').click()
    // cy.url().should('eq', 'https://github.com/15Dkatz/official_joke_api')

  })
})

describe('Joke - loads & functions correctly', () => {
  it('Checks that the joke component functions correctly if API does return a random joke', () => {
    base();
    requestApi();

    if (!isError) {
      //joke Setup
      cy.get('.joke-container').should('exist').should('be.visible')
      cy.get('.joke-setup').should('exist').should('be.visible')
      cy.get('.joke-punchline').should('exist').should('not.be.visible')
      cy.get('.toggle-punchline').should('exist').should('be.visible')

      //Punchline - show
      cy.get('.toggle-punchline').click()
      cy.get('.joke-punchline').should('exist').should('be.visible')

      //Punchline - hide
      cy.get('.toggle-punchline').click()
      cy.get('.joke-punchline').should('exist').should('not.be.visible')
    }
  })
})