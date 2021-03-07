import React, { Component } from "react";

import "./App.css";

class App extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    fetch(`https://randomuser.me/api/?results=10&nat=us`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        let items = data.results.map((person) => {
          return (
            <table>
              <tr>
                <td>
                  <img src={person.picture.medium} />
                </td>
                <td>
                  {person.name.first} {person.name.last}
                </td>
                <td>{person.email}</td>
                <td>{person.dob.age}</td>
                <td>{person.phone}</td>
              </tr>
            </table>
          );
        });
        this.setState({ items: items });
        console.log(this.state.items);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Employee Directory</h1>
        </header>
        <table>
          <thead>
            <tr>
              <th scope="col">picture</th>
              <th scope="col">name</th>
              <th scope="col">email</th>
              <th scope="col"> age</th>
              <th scope="col">phone</th>
            </tr>
          </thead>
        </table>

        {this.state.items}
      </div>
    );
  }
}

export default App;
