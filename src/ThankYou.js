import React, { Component } from 'react';
import './App.css';

const ThankYou = (props) => {
    return (
        <div className="ThankYou">
            <div>
            <h1>Thank you!</h1>
            <h2>Your form has been sent with the following information:</h2>
            <div>
            <ul>
            <li>Full name: {props.fullName}</li>
            <li>Phone: {props.phone}</li>
            <li>Email Address: {props.emailAddress}</li>
            <li>Address: {props.address}</li>
            <li>City: {props.city}</li>
            <li>State: {props.state}</li>
            <li>Country: {props.country}</li>
            <li>Zip-code: {props.zip}</li>
            <li>How did you hear about us: {props.hearabout}</li>
            <li>Cities: {props.cities}</li>
            <li>Discipline: {props.discipline}</li>
            <li>Other Disciplines: {props.otherDisciplines}</li>
            <li>Portfolio: {props.portfolio}</li>
            <li>Anything else: {props.anythingelse}</li>
            </ul>
            </div>
            </div>
        </div>
    );
  }

  export default ThankYou;

