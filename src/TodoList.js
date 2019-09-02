import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import './TodoList.css';


class TodoList extends Component {

    constructor(props) {
        super(props);

        this.state = {

            todos: []

        };

        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        this.completion = this.completion.bind(this);

    }

    create(newTodo) {

        if (newTodo.task) {

            this.setState({

                todos: [...this.state.todos, newTodo]
            });

        }
    }

    remove(id) {

        this.setState({

            todos: this.state.todos.filter(todo => todo.id !== id)

        });

    }

    update(id, updatedTask) {

        const updatedTodos = this.state.todos.map(todo => {

            if (todo.id === id) {

                return { ...todo, task: updatedTask }
            } else {

                return todo;
            }

        });

        this.setState({ todos: updatedTodos });
    }

    completion(id) {

        const updatedTodos = this.state.todos.map(todo => {

            if (todo.id === id) {

                return { ...todo, completed: !todo.completed }
            } else {

                return todo;
            }

        });

        this.setState({ todos: updatedTodos });

    }

    render() {

        const todosList = this.state.todos.map(todo => <Todo
            key={todo.id}
            id={todo.id}
            task={todo.task}
            completed={todo.completed}
            removeTodo={this.remove}
            updateTodo={this.update}
            toggleTodo={this.completion} />);

        return (

            <div className="TodoList">
                <h1>Adir's Todo List <span>A simple React App</span></h1>
                <ul>
                    {todosList}
                </ul>
                <NewTodoForm createTodo={this.create} />

            </div>


        );



    }
}

export default TodoList;
