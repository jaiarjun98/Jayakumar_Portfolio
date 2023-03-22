import React, { Component } from 'react';
import Myprofile from './Myprofile';

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            first: ''
        }
    }
    render() {
        return (
            <div>
                Header called with Myprofile component
                <Myprofile />
            </div>
        )
    }
}

export default Header