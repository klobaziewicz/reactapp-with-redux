import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux'

const data = {
  najlepszy: 'favourite',
  produkty: [
    'produkt 1', 'produkt 2', 'produkt 3'
  ]
}

//reducer
function produkty(state = data, action) {
  switch (action.type) {
    case 'add':
      return {
        ...state, produkty: [...state.produkty, action.produkt]
      }
    case 'reset':
      return {
        ...state, produkty: []
      }
    default:
      return state
  }
}

const store = createStore(produkty)
window.store = store

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>redux</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
