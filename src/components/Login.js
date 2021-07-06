import React from "react";
import PropTypes from 'prop-types';
import axios from "axios";

const loginUser = (credentials) =>{
    axios.post('https://proyecto-equipo7-bedu.herokuapp.com/v1/usuarios/login', credentials).then(response=>response).catch(error=>error);
};

const Login = (props) => {
    const setToken = props.setToken ;
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();

    const handleSubmit =  e => {
        e.preventDefault();
        const token = loginUser({
          email,
          password
        });
        setToken(token);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <p>Username</p>
                <input type="text" onChange={e => setEmail(e.target.value)}/>
            </label>
            <label>
                <p>Password</p>
                <input type="password" onChange={e => setPassword(e.target.value)}/>
            </label>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  };

export default Login;