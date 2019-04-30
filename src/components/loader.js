import React, { Component } from 'react'

export class Loader extends Component {
    render() {
        return (
            <div>
                <div class="spinner-grow" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        )
    }
}

export default Loader
