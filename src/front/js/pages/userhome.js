import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Card from 'react-bootstrap/Card';

export const UserHome = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="d-flex">
      <Card border="primary" className="health-data" style={{ width: '18rem', marginRight: "7px", boxShadow: "3px 3px 3px #9E9E9E" }}>
        <Card.Header>Date of birth</Card.Header>
        <Card.Body>
          <Card.Title>{store.user.dob}</Card.Title>
         
        </Card.Body>
      </Card>
      <br />

      <Card border="secondary" className="health-data" style={{ width: '18rem', marginRight: "7px", boxShadow: "3px 3px 3px #9E9E9E" }}>
        <Card.Header>Height</Card.Header>
        <Card.Body>
          <Card.Title>170m</Card.Title>
         
        </Card.Body>
      </Card>
      <br />

      <Card border="success" className="health-data" style={{ width: '18rem', marginRight: "7px", boxShadow: "3px 3px 3px #9E9E9E" }}>
        <Card.Header>Weight</Card.Header>
        <Card.Body>
          <Card.Title>80kg</Card.Title>
         
        </Card.Body>
      </Card>
      <br />

      <Card border="danger" className="health-data" style={{ width: '18rem', marginRight: "7px", boxShadow: "3px 3px 3px #9E9E9E" }}>
        <Card.Header>Blood pressure</Card.Header>
        <Card.Body>
          <Card.Title>110/80mmHg</Card.Title>
         
        </Card.Body>
      </Card>
      <br />

      <Card border="warning" className="health-data" style={{ width: '18rem', marginRight: "7px", boxShadow: "3px 3px 3px #9E9E9E" }}>
        <Card.Header>VO2 Max</Card.Header>
        <Card.Body>
          <Card.Title>45.4</Card.Title>
         
        </Card.Body>
      </Card>
      <br />

      <Card border="info" className="health-data" style={{ width: '18rem', marginRight: "7px", boxShadow: "3px 3px 3px #9E9E9E" }}>
        <Card.Header>Cholesterol</Card.Header>
        <Card.Body>
          <Card.Title>198</Card.Title>
         
        </Card.Body>
      </Card>
      
    </div>
  );
};
