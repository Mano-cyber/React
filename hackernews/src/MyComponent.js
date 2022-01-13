import React, { Component } from 'react';
import './App.css'

class MyComponent extends Component {

  render() {
    function formatName(user) {
      return user.firstName + ' ' + user.lastName;
    }

    const user = {
      firstName: 'Jack',
      lastName: 'Smith'
    };
    return (
      <div className="MyComponent">
       <h1>Hello, {formatName(user)}!</h1>
      </div>
    );
  }
}
export default MyComponent;