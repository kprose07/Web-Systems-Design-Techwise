describe('Todo List', () => {
  beforeEach(() => {
    // Visit the application
    //Local server for my computer
    cy.visit('http://127.0.0.1:5173/');
  });

  it('should add a new todo item', () => {
    // Get the input and button elements by id
    cy.get('#InputSelect', { timeout: 10000 }).should('exist');
    cy.get('#InputSelect').type('Test new todo');
    cy.get('#add').click();

    // Assert that the new todo is visible
    cy.contains('Test new todo').should('be.visible');
  });

  // Add more tests here
});
