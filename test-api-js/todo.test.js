

var todoservice = require('./todo.service.js');
describe('todo test suite', () => {

    test("truth_value", () => {
        expect(true).toBe(true);
    });
    
    let todo_service = new todoservice();

    test("if service instance is created", () => {
        expect(todo_service instanceof todoservice).toBe(true);
    });

    
    // Initial length of the todo list is 3 // 3 default tasks
    test("get_todos", () => {
        expect(todo_service.get_todos().todo.length).toEqual(3);
    });
    
    test("add_todo", () => {
        const todo - {
            "title": "T1",
            "description": "D1",
            "done": false
        };
        expect(todo_service.add_todo(todo).todo.length).toEqual(todo_service.get_todos().todo.length);
    });  
    test("delete_todo", () => {
        const id = '1';
        expect(todo_service.delete_todo(id).length).toEqual(count-1);
    });  
    
    test("update Todo",() => {
            const id = 1;
            const todo = {
                "title": "T1",
                "description": "D1",
                "done": true
            };
            todo_service.update_todo(id,todo);
            expect(todo_service.todos.todo[id]).toEqual(todo);
        // Write all your test cases here that corresponds to software requirements


});
