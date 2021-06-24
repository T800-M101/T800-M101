import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello my name is Guillermo!
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


class App extends Component {

  constructor(){
    super();

    //Se declara el ESTADO inicial de la aplicación
    this.state = {
      monsters: [],
      searchField: ''
    };

  }


  // Se ejecuta una petición FETCH cuando se monta el componente, se convierte a formato JSON y se modifica el estado del array
    componentDidMount(){
     fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(users => this.setState({ monsters: users}));      
   }

   // Se obtiene el valor del INPUT
    handleChange = (e) =>  this.setState({ searchField: e.target.value});
     
   


    render(){

  // Se desestructura el ESTADO   y se filtra el array en base al valor del INPUT y se guarda en un nuevo array
    const { monsters, searchField} = this.state; 
    const filteredMonsters = monsters.filter( monster => 
          monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

      return (

        <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox
         placeholder="search monsters"
         handleChange={this.handleChange}
        />


          <CardList monsters = {filteredMonsters}/>
          
                  
        </div>
      )
    }



}
export default App;
