import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext';

function About() {
  const [user] = useContext(UserContext)
  return (
    <div>
      <h2>About</h2>
      { user?.username ? <div>Hello, {user.username}</div> : <div>Hello, Guest</div>}
    </div>
  );
}

export default About