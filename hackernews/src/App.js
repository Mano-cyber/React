import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

const list = [ //name, surname, email, number, employeeID
  {
    name: 'Sam',
    surname: 'Smith',
    email: 'sams@gmail.com',
    cellphone: 27727744592,
    employeeID: 1,
  },

  {
    name: 'Paul',
    surname: 'Jones',
    email: 'paul@gmail.com',
    cellphone: 276674322074,
    employeeID: 2,
  },

  {
    name: 'Max',
    surname: 'Payne',
    email: 'Maxp@gmail.com',
    cellphone: 276746553406,
    employeeID: 3,
  },

  {
    name: 'Zacks',
    surname: 'Green',
    email: 'ZGreen@gmail.com',
    cellphone: 278246527406,
    employeeID: 4,
  },

  {
    name: 'William',
    surname: 'Matthews',
    email: 'WillMat@gmail.com',
    cellphone: 27646567406,
    employeeID: 5,
  },
];

class Employee extends Component {

  constructor(props) {
    super(props);

    this.state = {
      list: list,
    };

    this.onDismiss = this.onDismiss.bind(this);

  }

  onDismiss(id) {
    const isNotId = item => item.employeeID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });
  }

  render() {
    return (
      <div className="App">
        {this.state.list.map(item =>
          <div key={item.employeeID}>
            <span>
            {item.surname} {item.name}
            </span>
            <br></br>
            <span>{item.email}</span>
            <br></br>
            <span>{item.cellphone}</span>
            <span>
              <button
                onClick={() => this.onDismiss(item.employeeID)}
                type="button"
              >Dismiss</button>
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default Employee;