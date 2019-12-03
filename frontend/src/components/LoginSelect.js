import React from 'react';

const LoginSelect = (props) => {
    return(<div>
        <button onClick={props.signup}>Signup</button>
        <button onClick={props.login}>Login</button>
    </div>)
}

export default LoginSelect;