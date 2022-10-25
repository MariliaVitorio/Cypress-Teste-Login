import usuario from '../fixtures/massaUsuarios.json'

describe('Validar tela de login LEARTOFLY', () => {
    beforeEach(() => {
        cy.visit("https://hml-app.learntofly.global/login")
    })

    it('Acessar o sistema com um usuário valido e senha inválida', () => {
        cy.get(':nth-child(1) > .mat-form-field > .mat-form-field-wrapper').type(usuario.valido.email)
        cy.get(':nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(usuario.invalido.senha)
        cy.get('.mat-flat-button').click()
    })

    it('Acessar o sistema com um usuário inválido e senha válida', () => {
        cy.get(':nth-child(1) > .mat-form-field > .mat-form-field-wrapper').type(usuario.invalido.email)
        cy.get(':nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(usuario.invalido.senha)
        cy.get('.mat-flat-button').click()
    })

    it('Acessar o sistema com um login incompleto', () => {
        cy.get(':nth-child(1) > .mat-form-field > .mat-form-field-wrapper').type(usuario.incompleto.email)
        cy.get(':nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(usuario.valido.senha)
        cy.get('.mat-flat-button').click()
    })

    it('Acessar o sistema com um usuário valido e senha válida', () => {
        cy.get(':nth-child(1) > .mat-form-field > .mat-form-field-wrapper').type(usuario.valido.email)
        cy.get(':nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(usuario.valido.senha)
        cy.get('.mat-flat-button').click()
    })

})