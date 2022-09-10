const data2 = {
    kategoria: 'all'
  }
  
  //reducer2
  function kategorie(state = data2, action) {
    switch (action.type) {
      case 'kategoria_zmiana':
        return {
          kategoria: action.kat
        }
      case 'kategoria_reset':
        return {
          kategoria: 'all'
        }
      default:
        return state
    }
  }

export default kategorie