import { useMemo, useState } from 'react';

function ComplexComponent() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const complexComputation = (num: number) => {
    console.log('Виконується складне обчислення...');
    return num * 2;
  };

  const computedValue = useMemo(() => complexComputation(count), [count]);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>Значення лічильника: {count}</p>
      <p>Результат складного обчислення: {computedValue}</p>
      <button onClick={() => setCount((c) => c + 1)}>
        Збільшити лічильник
      </button>
    </div>
  );
}

export default ComplexComponent;
