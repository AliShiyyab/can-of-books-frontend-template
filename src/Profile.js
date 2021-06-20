  
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function Profile() {
  const { user, isAuthenticated } = useAuth0();

  return <div>{
    isAuthenticated &&
    <>
    <img src={user.picture} alt="img"/>
    <div>Hello {user.name}</div>
    <div>Email: {user.email}</div>
    </>
    }
    </div>;
}

export default Profile;
