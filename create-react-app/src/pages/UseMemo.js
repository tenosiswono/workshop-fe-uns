import React, { useMemo, useState } from 'react';

function UseMemo() {
  const [count, setCount] = useState(0)
  const isEven = useMemo(() => {
    return count % 2 === 0
  }, [count])
  return (
    <div>
      <h2>UseMemo</h2>
      <p>Count { count }</p>
      <p>{isEven ? 'even' : 'odd'}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}


export default UseMemo