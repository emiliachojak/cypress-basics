/// <reference types="cypress" />

import { TodoPage } from "../page-objects/todo-page"

describe('filtering', () => {
    const todoPage = new TodoPage()

    beforeEach(() => {
        todoPage.navigate()

        todoPage.addTodo('Clean room{enter}')
        todoPage.addTodo('Learn JavaScript{enter}')
        todoPage.addTodo('Use Cypress{enter}')

        todoPage.clickTodoToggle(1)
    })

    it('should filter "Active" todos', () => {
        todoPage.filterActive()
        todoPage.getTodoListChildren().should('have.length', 2)
    })


    it('should filter "Completed" todos', () => {
        todoPage.filterCompleted()
        todoPage.getTodoListChildren().should('have.length', 1)
    })


    it('should filter "All" todos', () => {
        todoPage.filterAll()
        todoPage.getTodoListChildren().should('have.length', 3)
    })
})