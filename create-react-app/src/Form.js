import { useState } from 'react';

const SearchForm = ({ onSubmitKeywords }) => {
  const [email, setEmail] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitKeywords(email)
  }

  function onChange(event) {
    setEmail(event.target.value)
  }

  return (
    <>
      <div>
        <button onClick={() => setEmail('admin@uns.ac.id')}>Set email to "admin@uns.ac.id"</button>
        <button onClick={() => setEmail('user@uns.ac.id')}>Set email to "user@uns.ac.id"</button>
      </div>
      <form onSubmit={handleSubmit}>
        <div style={{ marginRight: '12px' }}>
          <label htmlFor="email">Email:</label>
          <input
            id="email" 
            type="text" 
            value={email}
            onChange={onChange}
          />
        </div>
        <button type="submit">Search</button>
      </form>
    </>
  )
}

function App() {
  function onSubmitKeywords(keywords) {
    alert(`Kalian mencari ${keywords}`)
  }
  return (
    <div>
      <div style={{ margin: '24px' }}>
        <h1>Forms</h1>
        <SearchForm onSubmitKeywords={onSubmitKeywords} />
      </div>
    </div>
  );
}

export default App;
