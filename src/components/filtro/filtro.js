import React, { Component } from 'react';
import filtro from './filtro.css';  

class App extends Component {

  constructor(){
    super();

    this.state={
      search:null
    };
  
    this.state = {
      contacts: []
    }
  }

  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data.message })
      console.log(this.state.contacts);
    })
    .catch(console.log)
  }

  searchSpace=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
  } 

  render(){
    
    const Information = []
    Object.keys(this.state.contacts).forEach(key => Information.push({name: key, value: this.state.contacts[key]}))
        
    const items = Information.filter((data)=>{
      if(this.state.search == null || this.state.search == ""){
      }
      else if(data.name.toLowerCase().includes(this.state.search.toLowerCase())){
          return data
      }
    }).map(data=>{
      return(
      <div class="filtro-busqueda">
        <ul>
          <li>
            <span>{data.name}</span>
          </li>
        </ul>
      </div>
      )
    })

    return (
      <div id="filtro" class="filter-fondo">
        <center><h1 class="filter-title">Filtrar por razas <br/>y sub-razas</h1></center>
        <center>
          <div>
            <input class="filtro-input" type="text" placeholder="Ingresar raza"  onChange={(e)=>this.searchSpace(e)} />
            <div class="filtro-dentro">
              <div class="filtro">
                {items}
              </div>
            </div>
            <div class="espacio"></div>
            
          </div>
          
        </center>

      </div>
      
    )
  }
}

export default App;




