context('LEARTOFLY', () => {
    beforeEach(() => {
        cy.visit("https://hml-app.learntofly.global/login")
    })
        it('Acessar o sistema com um usuário inválido e senha válida', () => {
        cy.get(':nth-child(1) > .mat-form-field > .mat-form-field-wrapper').type("biomariliavitorio@gmail.com")
        cy.get(':nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("123456")
        cy.get('.mat-flat-button').click()
            })

it('Acessar o sistema com um login incompleto', () => {
       cy.get(':nth-child(1) > .mat-form-field > .mat-form-field-wrapper').type("testeqa")
       cy.get(':nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("123456")
       cy.get('.mat-flat-button').click()
             })

it('Acessar o sistema com usuário e senha válidos', () => {
        cy.get(':nth-child(1) > .mat-form-field > .mat-form-field-wrapper').type("testeqa@mailinator.com")
        cy.get(':nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("123456")
        cy.get('.mat-flat-button').click()
                    })
        });