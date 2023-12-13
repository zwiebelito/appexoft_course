import React, {Component} from 'react';
import styles from './LikeButton.module.css'

class LikeButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            message: ''
        }
    }

    incrementCounter = () => {
        this.setState({counter: this.state.counter + 1, message: ''})
    }

    decrementCounter = () => {
        if (this.state.counter > 0){
            this.setState({counter: this.state.counter - 1})
        } else {
            this.setState({counter: 0, message: 'it`s the minimal number of likes'})
        }
    }

    render() {
        return (
            <div className={styles.main}>
                <div className={styles.images}>
                    <img onClick={this.incrementCounter} className={styles.like} src="https://www.pngplay.com/wp-content/uploads/9/Facebook-Logo-PNG-HD-Quality.png"/>
                    <img onClick={this.decrementCounter} className={styles.dislike} src="https://cdn-icons-png.flaticon.com/512/8766/8766096.png" alt="dislike button"/>
                </div>
                <h4>Likes: {this.state.counter} {this.state.message}</h4>
            </div>
        );
    }
}

export default LikeButton;