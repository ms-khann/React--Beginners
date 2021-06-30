import React from 'react'
import { withRouter } from 'react-router-dom';

function User(props){
    console.log();
    return (
        <h1>User ID = {props.match.params.id}</h1>
    )
}

export default withRouter(User);