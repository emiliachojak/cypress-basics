/// <reference types="cypress" />

export class TodoPage {
    navigate() {
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
    }

    addTodo(todoText) {
        cy.get('.new-todo').type(todoText + '{enter}')
    }

    getTodoText(todoIndex) {
        return cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`)
    }

    getTodoToggle(todoIndex) {
        return cy.get(`.todo-list li:nth-child(${todoIndex + 1}) .toggle`)
    }

    clickTodoToggle(todoIndex) {
        this.getTodoToggle(todoIndex).click()
    }

    clearTodoList() {
        cy.contains('Clear').click()
    }

    getTodoList() {
        return cy.get('.todo-list')
    }

    getTodoListChildren() {
        return cy.get('.todo-list li')
    }

    filterActive() {
        cy.contains('Active').click()
    }

    filterCompleted() {
        cy.contains('Completed').click()
    }

    filterAll() {
        cy.contains('All').click()
    }
}