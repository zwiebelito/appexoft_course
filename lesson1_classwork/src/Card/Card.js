import React, {Component} from 'react';

class Card extends Component {
    /*    constructor(props) {
            super(props);
        }*/
    render() {
        const {title, description, image} = this.props;
        return (
            <div /*className={card}*/>
                {image && <img src={image} alt={title}/>}
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        );
    }
}

export default Card;