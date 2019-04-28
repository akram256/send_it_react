import React from "react";
import Parcel from "./Parcel";

export const AllParcels = props => {
  const retriveddata = props.parcels ? props.parcels : [];
  const allparcels = retriveddata.map(parcel => (
    <Parcel
      key={parcel.parcel_id}
      parcel_id={parcel.parcel_id}
      parcel_name={parcel.parcel_name}
      destination={parcel.destination}
      pickup_location={parcel.pickup_location}
      reciever={parcel.reciever}
      weight={parcel.weight}
      current_location={parcel.current_location}
      order_date={parcel.order_date}
      parcel_status={parcel.parcel_status}
    />
  ));

  return (
    <div>
     
      <table className="table table-bordered table-dark">
        <thead className="thead-dark">
          <tr>
            <th>Parcel_Id</th>
            <th>parcel_name</th>
            <th>destination</th>
            <th>Pickup_location</th>
            <th>reciever</th>
            <th>weight</th>
            <th>status</th>
            <th>order_date</th>
            <th>current_location</th>
          
            <th />
          </tr>
        </thead>
        <tbody>{allparcels}</tbody>
      </table>
    </div>
  );
};

export default AllParcels;
