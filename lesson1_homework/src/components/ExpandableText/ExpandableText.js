import {Component} from "react";
import styles from './ExpandableText.module.css'

class ExpandableText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Lorem...'
        }
    }

    showText = () => {
        this.setState({text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda earum eos error, expedita ipsam' +
                ' laborum laudantium molestiae nobis odit officiis placeat, possimus quibusdam sequi similique sint ' +
                'sit temporibus, ullam vero.'})
    }

    hideText = () => {
        this.setState({text: 'Lorem...'})
    }

    render() {
        return (
            <div className={styles.main}>
                <p>{this.state.text}</p>
                <button onClick={this.state.text === 'Lorem...' ? this.showText : this.hideText}>{this.state.text === 'Lorem...' ? 'Show' : 'Hide'}</button>
            </div>
        )
    }
}

export default ExpandableText;