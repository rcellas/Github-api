import React,{Component} from 'react';

//este componente sirve para que nos pinte la información que le hemos solicitado a la api de github
class User extends Component{
    render(){
        const{user}=this.props
        return(
            <div>
                <h3>Información del usuario</h3>
                <h4>{user.avatar}</h4>
                <h5>Nombre del usuario: {user.login}</h5>
                <h5>Nombre de la persona: {user.name}</h5>
                <h5>Followers: {user.followers}</h5>
                <h5>Following: {user.following}</h5>
                <h5>City: {user.location}</h5>
            </div>
        )
    }
}

export default User;