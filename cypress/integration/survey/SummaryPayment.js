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

  it("Selected month", () => {
    cy.get("[data-cy=selectedmonth]", { timeout: 4000 })
      .click()
      .contains("พ.ย.")
      .click();
  });

  it("Display selected month", () => {
    cy.get("[data-cy=month]", { timeout: 4000 })
    .contains("พฤศจิกายน");
  });
});

describe("When select someone's card should be display data correctly", () => {
  it("Select P'roof should be return correctly data", () => {
    cy.get("[data-cy=card]", { timeout: 10000 })
    .contains("P'Roof").click();
    cy.get("[data-cy=transferedAmount]")
    .contains("9999");
    cy.get("[data-cy=totalAmount]")
    .contains("999999");
  });
  it("Select P'Jane should be return correctly data", () => {
    cy.get("[data-cy=card]", { timeout: 10000 })
    .contains("P'Jane").click();
    cy.get("[data-cy=transferedAmount]")
    .contains("9990");
    cy.get("[data-cy=totalAmount]")
    .contains("999990");
  });
  it("Select P'Jua should be return correctly data", () => {
    cy.get("[data-cy=card]", { timeout: 10000 })
    .contains("P'Jua").click();
    cy.get("[data-cy=transferedAmount]")
    .contains("9000");
    cy.get("[data-cy=totalAmount]")
    .contains("900000");
  });
});
