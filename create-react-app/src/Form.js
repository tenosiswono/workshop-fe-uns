import { useRef } from 'react';

const SearchForm = ({ onSubmitKeywords }) => {
  const keywordRef = useRef()

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitKeywords(keywordRef.current.value)
  }
  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex' }}>
      <div style={{ marginRight: '12px' }}>
        <label htmlFor="keywords">Search:</label>
        <input id="keywords" type="text" ref={keywordRef} />
      </div>
      <button type="submit">Search</button>
    </form>
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
