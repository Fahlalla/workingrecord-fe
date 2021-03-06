describe('Profile page', ()=>{
    it("เข้าหน้าแรก", () => {
        cy.visit("http://localhost:3000");
      });

    it('Profile ถูกแสดงขึ้นมา โดยที่ ลำดับบนสุดของหน้า มีคำว่า "ประวัติส่วนตัว"', ()=>{
        cy.get('[data-cy=profile]', {timeout:4000}).contains("Profile").click()
        cy.url().should('contain',"/profile")
    })

    it('กรอกข้อมูลทุก field ให้ครบ', ()=>{
        cy.get('[data-cy=name-input]', {timeout:4000}).type("Pui")
        cy.get('[data-cy=lastName-input]', {timeout:4000}).type("Pui pui")
        cy.get('[data-cy=IDCard-input]', {timeout:4000}).type("1234567890123")
        cy.get('[data-cy=phoneNo-input]', {timeout:4000}).type("0812345678")
        cy.get('[data-cy=address-input]', {timeout:4000}).type("11/1")
        cy.get('[data-cy=province-input]', {timeout:4000}).select('Nan')
        cy.get('[data-cy=district-input]', {timeout:4000}).select('Chatuchuk')
        cy.get('[data-cy=subDistrict-input]', {timeout:4000}).select('Nan')
        cy.get('[data-cy=zipCode-input]', {timeout:4000}).type("10000")
        cy.get('[data-cy=site-input]', {timeout:4000}).type("Foundation Center")
        cy.get('[data-cy=team-input]', {timeout:4000}).type("Team A")
        cy.get('[data-cy=recommender-input]', {timeout:4000}).type("Bambam")
        cy.get('[data-cy=discordAccount-input]', {timeout:4000}).type("Pui pui")
        cy.get('[data-cy=dailyIncome-input]', {timeout:4000}).type("500")
        cy.get('[data-cy=parttimeIncome-input]', {timeout:4000}).type("500")
        cy.get('[data-cy=bankAccount-input]', {timeout:4000}).type("Pui pui")
        cy.get('[data-cy=branch-input]', {timeout:4000}).type("ChatuChuk")
        cy.get('[data-cy=accountNumber-input]', {timeout:4000}).type("0123456789")
    })

    it('เลือกวัน เดือน ปีเกิด', ()=>{
        cy.get('[data-cy=date-input]', {timeout:4000}).click()
        cy.contains('Next').click()
        cy.contains('25').click()

    })
    
    it('กดปุ่ม upload file ', ()=>{
        const filepath = 'Profile.png'
        // cy.get('input[type="file"]').attachFile(filepath)
        cy.get('[data-cy=id-card-upload').attachFile(filepath)
        cy.get('[data-cy=book-bank-uplaod]').attachFile(filepath)
    })

    it('กดปุ่ม "ยืนยันข้อมูล" แสดงว่าบันทึกข้อมูลเสร็จสิ้น', ()=>{
        cy.get('[data-cy=confirm-button]', {timeout:4000}).click()
    })
})