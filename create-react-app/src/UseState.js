import useLocalStorage from "./hooks/useLocalStorage.js"

function Greeting({ initialName = ''}) {
  const [name, setName] = useLocalStorage('name', '')
  const [greeting, setGreeting] = useLocalStorage('greetings', 'Hallo')
  const [objek] = useLocalStorage('objek', { contoh: 'objek' })
  function onChange(event) {
    setName(event.target.value)
  }

  function onChangeGreeting(event) {
    setGreeting(event.target.value)
  }

  return (
    <div style={{ margin: '24px'}}>
      <h1>useState dan useEffect</h1>
      <code>
        {JSON.stringify(objek)}
      </code>
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
