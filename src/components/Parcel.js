import React, { Component } from 'react'

export const Parcel = props => {
    return (
      <tr>
        <td>{props.parcel_id}</td>
        <td>{props.parcel_name}</td>
        <td>{props.pickup_location}</td>
        <td>{props.destination}</td>
        <td>{props.reciever}</td>
        <td>{props.weight}</td>
        <td>{props.parcel_status}</td>
        <td>{props.order_date}</td>
        <td>{props.current_location}</td>
      </tr>
    );
  };
  
  export default Parcel;