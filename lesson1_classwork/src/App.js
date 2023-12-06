import React, { Component } from "react";
import styles from './App.module.css'
import Card from "./Card/Card";
import Form from "./Form/Form";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            message: 'Hello world!',
            counter: 0
        }
    }

    componentDidMount() {
        setTimeout(()=> {
            this.setState({
                message: 'Hello Universe!'
            })
        }, 5000)
    }

    incrementCounter = () => {
        this.setState({
            counter: this.state.counter + 1, message: 'The count has been incremented by 1'
        })
    }

    decrementCounter = () => {
        this.setState({
            counter: this.state.counter - 1, message: 'The count has been decreased by 1'
        })
    }

    resetCounter = () => {
        this.setState({
            counter: 0, message: 'The count has been reset'
        })
    }

    render() {
        return (
            <div>
                <h1 style={{color: 'red', fontSize: '50px'}}>{this.state.message}</h1>
                <h2>Counter: {this.state.counter}</h2>
                <button style={styles.button} onClick={this.incrementCounter}>Increment</button>
                <button style={styles.button} onClick={this.decrementCounter}>Decrement</button>
                <button style={styles.button} onClick={this.resetCounter}>Reset</button>

                <h1>Responsive Cards</h1>
                <div className={styles.container}>
                    <Card image='https://via.placeholder.com/300' title='Card1' description='Card1'/>
                    <Card image='https://via.placeholder.com/600' title='Card2' description='Card2'/>
                </div>

                <h1>Contact Form</h1>
                <Form />

            </div>
        )
    }

}

export default App;
