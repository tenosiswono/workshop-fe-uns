import { useEffect, useState } from 'react';

function Greeting({ initialName = ''}) {
  const [name, setName] = useState(
    window.localStorage.getItem('name') || initialName
  )
  const [greeting, setGreeting] = useState('Hallo')

  function onChange(event) {
    setName(event.target.value)
    console.log('setState')
  }

  function onChangeGreeting(event) {
    setGreeting(event.target.value)
    console.log('setState')
  }

  useEffect(() => {
    window.localStorage.setItem('name', name)
    console.log('useEffect')
  }, [name])

  return (
    <div style={{ margin: '24px'}}>
      <h1>useState dan useEffect</h1>
      <form>
        <div style={{ marginBottom: '12px' }}>
          <label htmlFor="name">Name: </label>
          <input
            id="name" 
            type="text" 
            value={name}
            onChange={onChange}
          />
        </div>
        <div style={{ marginBottom: '12px' }}>
          <label htmlFor="greeting">Greeting: </label>
          <input
            id="greeting" 
            type="text" 
            value={greeting}
            onChange={onChangeGreeting}
          />
        </div>
      </form>
      {name ? <strong>{greeting} {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting initialName="Jhon" />
}

export default App;
