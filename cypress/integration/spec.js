describe("Sapper template app", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("has the correct <h1>", () => {
    cy.contains("h1", "Great success!");
  });

  it("navigates to /flight-logs", () => {
    cy.get("nav a").contains("Flight Log").click();
    cy.url().should("include", "/flight-logs");
  });

  it("navigates to /blog", () => {
    cy.get("nav a").contains("Maintanence").click();
    cy.url().should("include", "/blog");
  });
});
