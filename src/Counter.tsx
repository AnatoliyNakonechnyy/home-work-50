import { useCallback, useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []); 

  return (
    <div>
      <p>Значення лічильника: {count}</p>
      <button onClick={increment}>Збільшити</button>
    </div>
  );
}

export default Counter;
