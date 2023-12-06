import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('This state:', this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label> Name
                    <input type="text" name='name' value={this.state.name} onChange={this.handleChange}/>
                </label>
                <br/>
                <label> Email
                    <input type="email" name='name' value={this.state.email} onChange={this.handleChange}/>
                </label>
                <br/>
                <label> Message
                    <input type="text" name='message' value={this.state.message} onChange={this.handleChange}/>
                </label>
                <br/>
                <button type='submit'>Submit</button>
            </form>
        );
    }
}

export default Form;