import { useState } from "react";

function Meals() {
  const [meal, setMeal] = useState('')
  const [mealRes, setMealRes] = useState('')

  function onChange(evt) {
    setMeal(evt.target.value)
  }

  function findMeal(evt) {
    evt.preventDefault()
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
      .then(res => res.json())
      .then(data => setMealRes(data))
      .catch(e => console.error(e))
  }

  return <div style={{ margin: '24px'}}>
    <h1>Meal Finder</h1>
    <div style={{ marginBottom: '24px'}}>
      <form onSubmit={findMeal}>
        <input type="text" value={meal} onChange={onChange} />
        <button type="submit">Find Meal</button>
      </form>
    </div>
    { meal ? <code>{JSON.stringify(mealRes)}</code> : <strong>Please Input Your Meal</strong>}
  </div>
}

function App() {
  return <Meals />
}

export default App