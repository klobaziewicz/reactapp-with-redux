import Search from '../components/search';
import Produkty from '../components/produkty';
import React, { useState, useEffect } from 'react';

function Home() {
    let [count, setCount] = useState({ changed: false, category: 'all', search: ''});

    let zmiana = (a) => {
        console.log(a);
        setCount(count = { search: true, category: a, search: ''})
    }
    
    let szukaj = (a) => {
        console.log(a);
        setCount(count = { search: true, category: 'all', search: a})
    }

    return (
        <div>
            <Search szukaj_name={szukaj.bind(this)} zmiana_kat={zmiana.bind(this)}></Search>
            <Produkty search={count.search} kateg={count.category}></Produkty>

        </div>

    )
}

export default Home;