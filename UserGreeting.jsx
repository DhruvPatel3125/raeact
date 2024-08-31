import React from 'react';
import propTypes from 'prop-types';

function UserGreeting(props) {

    // if(props.isLoggedIn){
    //     return <h2>Wellcome {props.Username}</h2>
    // }
    // else{
    //     return<h2>Plese LoggedIn</h2>
    // }


//   return(props.isLoggeIn ? <h2>Wellcome {props.username}</h2> : 
//                             <h2>Plese loged in</h2>);


    const wellcomemessege = <h2>Wellcome {props.username}</h2>

    const loginprompt = <h2>Plese loged-in to continue</h2>

    return(props.isLoggeIn ? wellcomemessege : loginprompt);



}

export default UserGreeting
