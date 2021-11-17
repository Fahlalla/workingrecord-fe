describe("เข้าหน้า summary", () => {
  it("พี่รูฟ login มา คลิ๊ก menu Summary ", () => {
    cy.visit("http://localhost:3000/summary");
  });
  it("หน้า Summary ถูกแสดงขึ้นมา โดยที่ ลำดับบนสุดของหน้า มีคำว่า 'summary'", () => {
    cy.get(".text-3xl", { timeout: 4000 }).contains("Summary");
  });
});

describe("พบแท็บ รายการทั้งหมด, คนที่กรอกแล้ว, คนที่ยังไม่ได้กรอก ", () => {
  it("รายการทั้งหมด", () => {
    cy.get("[href='/summary?tab=allList'] > .py-2").contains("รายการทั้งหมด");
  });

  it("คนที่กรอกแล้ว", () => {
    cy.get(".py-2").contains("คนที่กรอกแล้ว");
  });

  it("คนที่ยังไม่ได้กรอก", () => {
    cy.get("[href='/summary?tab=nonexportList'] > .py-2").contains(
      "คนที่ยังไม่ได้กรอก"
    );
  });

  it("default active เป็นแท็บ รายการทั้งหมด", () => {
    cy.url().should("contain", "/summary");
  });
});
