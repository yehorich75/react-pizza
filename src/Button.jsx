import React from 'react';

class Button extends React.Component {
    render() {
        console.log(this.props)
        
        return <button className="button">{this.props.children}</button>
    }
}

export default Button;