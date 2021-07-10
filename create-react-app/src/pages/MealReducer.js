import { useCallback, useEffect, useReducer, useRef, useState } from "react";

const initialState = { status: 'idle', data: null, error: null }

function httpCallReducer(state, action) {
  switch(action.type) {
    case 'idle': 
      return { status: 'idle', data: null, error: null }
    case 'pending': 
      return { status: 'pending', data: null, error: null }
    case 'resolved':
      return { status: 'resolved', data: action.data, error: null }
    case 'rejected':
      return { status: 'rejected', data: null, error: action.error}
    default:
      throw new Error('unknown action type')
  }
}

function Meals() {
  const [meal, setMeal] = useState('')
  const nameRef = useRef(null)

  function findMeal(event) {
    event.preventDefault()
    setMeal(nameRef.current.value)
  }

  return <div style={{ margin: '24px'}}>
    <h1>Meal Finder</h1>
    <div style={{ marginBottom: '24px'}}>
      <form onSubmit={findMeal}>
        <input type="text" ref={nameRef} />
        <button type="submit">Find Meal</button>
      </form>
    </div>
    { meal ? <p>Hasil Pencarian {meal}</p> : <div>Please Input Meal Name</div> }
    <MealInfo meal={meal} />
  </div>
}

function MealInfo({ meal }) {
  const [state, dispatch] = useReducer(httpCallReducer, initialState)

  const fetchCallback = useCallback(() => {
    if (!meal)
      return
    return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
  }, [meal])

  useEffect(() => {
    const promise = fetchCallback()
    if (!promise) {
      return dispatch({type: 'idle'})
    }
    dispatch({type: 'pending'})
    promise
      .then(res => res.json())
      .then(data => dispatch({type: 'resolved', data}))
      .catch(error => {
        dispatch({type: 'rejected', error})
        console.log(error)
      })
  }, [fetchCallback])
  if (state.status === 'pending') {
    return <div>Loading</div>
  }
  if (state.status === 'resolved') {
    return <div>
      { state.data.meals
        ?  state.data.meals.map(meal => 
          <div key={meal.idMeal}>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <div>id {meal.idMeal}, {meal.strMeal}</div>
          </div>)
        : <div>Not Found</div> }
    </div>
  }
  if (state.status === 'error') {
    return <div>Error <pre>{state.error.toString()}</pre></div>
  }
  return ''
}
function App() {
  return <Meals />
}

export default App