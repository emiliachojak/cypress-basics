/// <reference types="cypress" />

import { TodoPage } from "../page-objects/todo-page"

describe('todo actions', () => {
    const todoPage = new TodoPage()

    beforeEach(() => {
        todoPage.navigate()
        todoPage.addTodo('Clean room')
    })

    it('should add a new todo to the list', () => {
        todoPage.getTodoText(0).should('have.text', 'Clean room')
        todoPage.getTodoToggle(0).should('not.be.checked')

    })

    it('should mark a todo as completed', () => {
        todoPage.clickTodoToggle(0)
        todoPage.getTodoText(0).should('have.css', 'text-decoration-line', 'line-through')

    })

    it('should clear completed todos', () => {
        todoPage.clickTodoToggle(0)
        todoPage.clearTodoList()
        todoPage.getTodoList().should('not.have.descendants', 'li')
    })
})