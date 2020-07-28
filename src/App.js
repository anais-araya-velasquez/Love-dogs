
import React, {Component} from 'react';
import './App.css';
import Filtro from '../src/components/filtro/filtro';
import Header from '../src/components/header/header';


class App extends Component {

  state = {
    contacts: []
  }

  componentDidMount() {

    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.state.contacts = data })
    .catch(console.log)
  }

  render() {
    console.log(this.state.contacts)
    return (
      <div>
      <Header />
      <Filtro  />
      </div>
      
    );
  }

 
}
export default App;
