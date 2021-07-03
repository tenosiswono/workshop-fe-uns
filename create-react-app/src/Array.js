import { useState } from "react";

const pokemons = [
  { id: 1, value: 'Pikachu'},
  { id: 2, value: 'Bulbasur'},
  { id: 3, value: 'Charmender'},
  { id: 4, value: 'Squirtle'},
]

function App() {
  const [items, setItems] = useState(pokemons)

  function removeItem(item) {
    setItems(items.filter(i => i.id !== item.id))
  }
  
  function addPokemon() {
    setItems([
      ...items,
      pokemons.find(i => !items.map(i => i.id).includes(i.id))
    ])
  }
  return (
    <div style={{ margin: '24px' }}>
      <h1>Rendering Array</h1>
      <h2>List Pokemon</h2>
      <button disabled={items.length >= pokemons.length} onClick={addPokemon}>Add Pokemon</button>
      <ul style={{ listStyle: 'none', paddingLeft: 0}}>
        {items.map(item => (
          <li key={item.id} style={{ marginBottom: '6px', display: 'flex' }}>
            <span style={{ paddingRight: '24px', width: '100px' }}>
              {item.value}
            </span>
            <button onClick={() => removeItem(item)}>remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
