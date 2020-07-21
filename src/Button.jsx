import React from 'react';
import classNames from 'classnames';

class Button extends React.Component {
    render() {
        return (
            <button className={`button ${this.props.outline ? 'button--outline' : ''}`}>{this.props.children}</button>
        );
    }
}

export default Button;