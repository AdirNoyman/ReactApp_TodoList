import React, { Component } from 'react';
import uuid from 'uuid/v4';
import './NewTodoForm.css';

class NewTodoForm extends Component {

    constructor(props) {
        super(props);

        this.state = {

            task: ""
        };

        this.handelChange = this.handelChange.bind(this);
        this.handelSubmit = this.handelSubmit.bind(this);

    }

    handelChange(evt) {

        this.setState({

            [evt.target.name]: evt.target.value
        });
    }

    handelSubmit(evt) {

        evt.preventDefault();
        this.props.createTodo({ ...this.state, id: uuid(), completed: false });
        this.setState({ task: "" });

    }

    render() {
        return (

            <div>
                <form className="NewTodoForm" onSubmit={this.handelSubmit}>
                    <label htmlFor="task">Add New Todo</label>
                    <input type="text"
                        name="task"
                        id="task"
                        placeholder="New Todo"
                        value={this.state.task}
                        onChange={this.handelChange} />
                    <button>Add Todo</button>
                </form>
            </div>
        );
    }
}


export default NewTodoForm;
