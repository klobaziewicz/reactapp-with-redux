import produkty from './produkty';
import kategorie from './kategorie';
import { compose, createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const allReducers = combineReducers({ produkty, kategorie })
const store = createStore(allReducers, composeWithDevTools())
window.store = store

const addProdukt = produkt => ({type: 'add', produkt})
//store.dispatch(addProdukt('produkt S'))

export default store