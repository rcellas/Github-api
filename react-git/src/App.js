import React, { Component } from 'react';
import User from './User';
import './App.css';

class App extends Component {

  //para que me coga el usuario
  state ={
    user:{}
  }

  //para que me pinte la información que le solicito del usuario
  getUser=()=>{
    const name=this.refs.name.value;
    //tdd para ver si coge correctamente el usuario.
    // alert(name)
    //llamada de la api de github
    fetch(`http://api.github.com/users/${name}`)
    .then(response =>response.json())
    //tdd para comprovar si da la info del usuario de github
    // .then(data =>console.log(data))
    .then(data=> {
      this.setState({
        //información que solicitamos del usuario dentro de la api de github
        user:{
          name:data.name,
          location:data.location,
          avatar:data.avatar,
          followers:data.followers,
          following:data.following,
          login:data.login,
        }
      })
    })
  }

  render() {
    const {user} =this.state;
    return (
      <div className="App">
      <i class="fa fa-github"></i> <i class="fab fa-react"></i>
      <h1><b>GitHub Api</b> with <b>React.js</b></h1>
      {/* para poner el nombre del usuario */}
       <input type="test" placeholder="Nombre del usuario" ref="name"/>
       <button class="btn btn-1" onClick={this.getUser}>Buscar usuario</button>
       {/* prueba para ver que nos imprime la información que le pedimos del usuario */}
      {/* <pre><code>{JSON.stringify(user)}</code></pre> */}
      {/* llamada del componente user.jsx */}
      <User user={user}/>
      </div>
    );
  }
}

export default App;
