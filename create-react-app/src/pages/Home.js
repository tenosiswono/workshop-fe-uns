import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext';

function Home() {
  const [user, setUser] = useContext(UserContext)
  return (
    <div>
      <h2>Home</h2>
      { user?.username
        ? <>
            <div>username: {user.username}</div>
            <button onClick={() => setUser({})}>logout</button>
          </>
        : <button onClick={() => setUser({username: 'user1'})}>login</button>
      }
    </div>
  );
}

export default Home