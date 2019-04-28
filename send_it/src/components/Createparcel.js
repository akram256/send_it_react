import React, { Component } from 'react'
import createparcel from '../actions/createparcelActions'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

export class Createparcel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parcel_name: '',
            pickup_location: '',
            destination: '',
            reciever: '',
            weight: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();
        this.props.createparcel({
            parcel_name: this.state.parcel_name,
            pickup_location: this.state.pickup_location, destination: this.state.destination,
            reciever: this.state.reciever, weight: parseInt(this.state.weight)
        }, this.props)
    }
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <a class="navbar-brand" href="#">SEND_IT</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item">

                                    <Link to='/view_parcels' class="nav-link" >View Parcel Orders</Link>
                                </li>
                                <li class="nav-item">

                                    <a href="profile.html" class="nav-link">Profile</a>
                                </li>
                                <li class="nav-item">
                                    <a href="index.html" class="nav-link">(Logout)</a>

                                </li>


                            </ul>

                        </div>
                    </div>
                </nav>
                <div class="content">
                    <div class="orders">
                        <h4>Welcome to SEND_IT.</h4>
                        <h6><i>"Have it, Send it faster "</i></h6>

                        <div class="menu">
                            LET'S SEND IT NOW
                    </div>
                        <form className="order-item" onSubmit={this.onSubmit}>
                            <div className="order-content">
                                <div class="title">Parcel Gift  </div>
                                <div class="field">
                                    <input type="text" name="parcel_name"
                                        value={this.state.parcel_name} onChange={this.onChange} placeholder="parcel_name" required />
                                    <input type="text" name="pickup_location"
                                        value={this.state.pickup_location} onChange={this.onChange} placeholder="pickup_location" required />
                                    <input type="text" name="destination"
                                        value={this.state.destination} onChange={this.onChange} placeholder="destination" required />
                                    <input type="text" name="reciever"
                                        value={this.state.reciever} onChange={this.onChange} placeholder="reciever" required />
                                    <input type="number" name="weight"
                                        value={this.state.weight} onChange={this.onChange} placeholder="weight" required />

                                </div>

                            </div>
                            <div className="order-button">
                                <button className="button completed">Create_order</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export const mapStateToProps = state => ({
    createdata: state.createReducers.createdata,
    errors: state.createReducers.errors,
    isSuccessfully_created: state.createReducers.isSuccessfully_created,
});


export default connect(mapStateToProps, { createparcel })(Createparcel);
