import React, { useCallback, useEffect, useState } from 'react';

function UseCallback() {
  const [count, setCount] = useState(0)

  const updateLocalStorage = useCallback(
    () => window.localStorage.setItem('count', count),
    [count]
  )

  useEffect(() => {
    updateLocalStorage()
  }, [updateLocalStorage])

  return (
    <div>
      <h2>UseCallback</h2>
      <p>Count { count }</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default UseCallback