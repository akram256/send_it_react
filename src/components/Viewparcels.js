import React, { Component } from 'react'
import AllParcels from './ParcelTable'
import getallparcels from '../actions/getparcelsAction'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

export class Viewparcels extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {

        this.props.getallparcels();
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

                                    <Link to='/create_parcel' class="nav-link" >Create Parcel Order</Link>
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

                <div class="content mt-4">
                    <div class="orders">
                        <h4>All Parcel Delivery History.</h4>

                        <div class="menu">
                            VIEW ALL YOUR PARCEL ORDER
                        </div>
                        <div class="order-item">
                            <div class="order-content">
                                <div id="specificparcels_table">
                                    <AllParcels parcels={this.props.parcels} />


                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export const mapStateToProps = state => ({
    parcels: state.parcels.parcels,
    errors: state.parcels.errors,
    isSuccessfully_retrived: state.parcels.isSuccessfully_retrived,
});


export default connect(mapStateToProps, { getallparcels })(Viewparcels);