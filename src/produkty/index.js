const data1 = {
  n: '',
  produkty: [
    { id: 1, name: 'bike 1', category: 'men', src: 'bike_men', prize: '300$' },
    { id: 2, name: 'bike 2', category: 'women', src: 'bike_women', prize: '350$' },
    { id: 3, name: 'bike 3', category: 'kids', src: 'bike_kids', prize: '200$' },
    { id: 4, name: 'bike 4', category: 'men', src: 'bike_men', prize: '500$' },
    { id: 5, name: 'bike 5', category: 'men', src: 'bike_men', prize: '380$' },
    { id: 6, name: 'bike 6', category: 'kids', src: 'bike_kids', prize: '300$' },
    { id: 7, name: 'bike 7', category: 'women', src: 'bike_women', prize: '410$' },
    { id: 8, name: 'bike 8', category: 'kids', src: 'bike_kids', prize: '320$' },
    { id: 9, name: 'bike 9', category: 'men', src: 'bike_men', prize: '600$' },
    { id: 10, name: 'bike 10', category: 'women', src: 'bike_women', prize: '500$' },
    { id: 11, name: 'bike 11', category: 'men', src: 'bike_men', prize: '420$' },
    { id: 12, name: 'bike 12', category: 'kids', src: 'bike_kids', prize: '300$' }
  ]
}

//reducer1
function produkty(state = data1, action) {
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

export default produkty