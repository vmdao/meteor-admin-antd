import React, { Component } from 'react';
class LayoutDefault extends Component {
    render() {
        const {content} = this.props;
        return (
            <div>{content}</div>
        )
    }
}

export default LayoutDefault;