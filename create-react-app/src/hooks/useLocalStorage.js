import { useDebugValue, useEffect, useState } from 'react';

function useLocalStorage(
  key,
  defaultValue = '',
  { serialize = JSON.stringify, deserialize = JSON.parse} = {}
) {
  const [state, setState] = useState(() => {
    const value = window.localStorage.getItem(key)
    if (value) {
      try {
        return deserialize(value)
      } catch(e) {
        window.localStorage.removeItem(key)
      }
    }
    return typeof defaultValue === 'function' ? defaultValue() : defaultValue
  })
  useEffect(() => {
    window.localStorage.setItem(key, serialize(state))
  }, [state, key, serialize])

  useDebugValue(`useLocalStorage ${state}`)
  return [state, setState]
}

export default useLocalStorage