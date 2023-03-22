import React, { Component } from 'react'

class Myprofile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            phone: '',
            address: ''
        }
    }
    render() {
        return (
            <div>
                <div>Myprofile</div>
            </div>
        )
    }
}

export default Myprofile