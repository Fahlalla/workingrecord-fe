describe("open link", () => {
  it("link page summary", () => {
    cy.visit("http://localhost:3000/summary");
  });
  it("check wording summary page", () => {
    cy.get(".text-3xl", { timeout: 4000 }).contains("Summary");
  });
});
describe("click tab All list", () => {
  it("click tab", () => {
    cy.get("[href='/summary?tab=allList'] > .py-2")
      .contains("รายการทั้งหมด")
      .click();
    cy.url().should("contain", "allList");
  });
  it("check column status all", () => {
    if (1 === 1) {
      cy.get(".px-12 > .pt-4").contains("Export");
    }
  });
});
