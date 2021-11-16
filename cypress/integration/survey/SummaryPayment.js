describe("Home page", () => {
  it("Successfully load", () => {
    cy.visit("http://localhost:3000");
  });
});
describe("Summary Payment page", () => {
  it("Successfully load", () => {
    cy.get("[data-cy=summary-payment]", { timeout: 4000 })
      .contains("Summary Payment")
      .click();
    cy.url().should("contain", "summary-payment");
  });
  it("Display current month by default", () => {
    cy.get("[data-cy=MonthPicker]", { timeout: 3000 })
    .contains('พฤศจิกายน 2021').click();
    //.select("setSelectMonth");
    //cy.get('[data-cy=month]',{timeout:3000}).contains("")
  });
});
