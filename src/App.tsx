import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { depositMoney, withdrawMoney, bankruptMoney } from './state/actionsCreators';
import { State } from './state/reducers';

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state: State) => state.bank);

  return (
    <div className="App">
      <h1>{state}</h1>
      <button onClick={() => dispatch(depositMoney(10))}>DEPOSIT</button>
      <button onClick={() => dispatch(withdrawMoney(10))}>WITHDRAW</button>
      <button onClick={() => dispatch(bankruptMoney())}>BANKRUPT</button>
    </div>
  );
}

export default App;
