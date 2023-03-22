import React, { Component } from 'react'

class Footer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            first: ''
        }
    }
    render() {
        return (
            <div>
                <div>Footer Component Called</div>
            </div>
        )
    }
}

export default Footer