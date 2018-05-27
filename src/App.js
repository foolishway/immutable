import React, { Component } from 'react';
import logo from './logo.svg';
import Immutable from 'immutable';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state =
      {
        a: 1,
        b: 2,
        c: {
          d:
            [{ e: 1, b: 2 }, { e: 2, b: 4 }]
        }
      }
  }
  addItem = () => {
    // let list = this.state.app.appData.list;d
    // list.push(list.length + 1);
    // // this.setState({ app: { appData: { list } } });
    let immutableObj = Immutable.fromJS(this.state).updateIn(['c', 'd'], (v) => {
      return v.update(0, (vi) => {
        return vi.set('e', 'e')
        // console.log("vi.get('e')", vi.get('e'));
      });
    });
    console.log('immutableObj', immutableObj.toJS());
    console.log('state', this.state);

  }
  render() {
    let list = this.state.c.d;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <ul>
            {
              list.map((item, index) => (<li key={index}>{item.e}</li>))
            }
          </ul>
        </div>
        <div><button onClick={this.addItem}>新增列表项</button></div>
      </div>
    );
  }
}

export default App;
