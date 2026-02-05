import './App.css';
import ComplexComponent from './ComplexComponent';
import Counter from './Counter';

function App() {
  return (
    <>
      <p>useCallback</p>
      <Counter />
      <p>useMemo</p>
      <ComplexComponent />
    </>
  );
}

export default App;
