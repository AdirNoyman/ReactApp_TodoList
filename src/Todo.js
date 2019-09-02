import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {

    constructor(props) {
        super(props);

        this.state = {

            isEditing: false,
            task: this.props.task
        }

        this.handelRemove = this.handelRemove.bind(this);
        this.handelToggleEdit = this.handelToggleEdit.bind(this);
        this.handelUpdate = this.handelUpdate.bind(this);
        this.handelChange = this.handelChange.bind(this);
        this.handelCompleted = this.handelCompleted.bind(this);
    }

    handelRemove(evt) {

        this.props.removeTodo(this.props.id);

    }

    handelToggleEdit(evt) {

        this.setState(prevState => { return { isEditing: !prevState.isEditing } });
    }

    handelUpdate(evt) {

        evt.preventDefault();
        this.props.updateTodo(this.props.id, this.state.task);
        this.setState(prevState => { return { isEditing: !prevState.isEditing } });
    }

    handelChange(evt) {

        this.setState({

            [evt.target.name]: evt.target.value
        });
    }

    handelCompleted(evt) {

        this.props.toggleTodo(this.props.id);
    }

    render() {

        let result;

        if (this.state.isEditing) {

            result = (

                <div className="Todo">
                    <form className="Todo-edit-form" onSubmit={this.handelUpdate}>
                        <input type="text"
                            value={this.state.task}
                            name="task"
                            onChange={this.handelChange} />
                        <button>Save</button>
                    </form>
                </div>
            );
        } else {

            result = (

                <div className="Todo">
                    <li className={this.props.completed ? "Todo-task completed" : "Todo-task"} onClick={this.handelCompleted}>{this.props.task}</li>
                    <div className="Todo-buttons">
                        <button onClick={this.handelToggleEdit}><i className='fas fa-pen' /></button>
                        <button onClick={this.handelRemove}><i className='fas fa-trash' /></button>
                    </div>
                </div>
            );

        }

        return result;
    }
}

export default Todo;
