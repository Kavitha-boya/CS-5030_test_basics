class todoservice{
    todo_data = {
        "todo":[{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        return this.todos;
    }

    add_todo(todo){
        // Your code here
        this.todos.todo.push(todo);
        return this.todos;
    }

    delete_todo(id){
        // Your code here
        this.todos = this.todos.todo.splice(index, id)
        return this.todos 
    }

    update_todo(id, todo){
        // Your code here
        this.todos.todo[id] = this.todos
        return this.todos
    }
}


module.exports= todoservice;
