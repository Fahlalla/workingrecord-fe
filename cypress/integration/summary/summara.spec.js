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
  });

  it("check tab Name list", () => {
    cy.get(".py-2")
    .contains("คนที่กรอกแล้ว")
  })

  it("check tab Name list", () => {
    cy.get("[href='/summary?tab=nonexportList'] > .py-2")
    .contains("คนที่ยังไม่ได้กรอก")
  })

});

