import search_icon from "../images/search.png"
import '../styles/search.scss'
import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import store from "../store";

function Search(props) {
    let [count, setCount] = useState({ search: '', category: '' });
    const { register, handleSubmit } = useForm();

    const handleRegistration = (data) => {
        //search(data.search)
        //console.log(data.search);
        props.szukaj_name(data.search)
    }

    let search = async (a) => {
        setCount(count = { search: a, category: count.category })
    }

    let kategoria = async (a) => {
        props.zmiana_kat(a)
        /*
        console.log('wybrano kategorię ' + a)
        const zmiana_kategorii = kat => ({ type: 'kategoria_zmiana', kat })
        store.dispatch(zmiana_kategorii(a))
        console.log(window.store.getState())
        */
    }

    return (
        <div className="search">
            <span></span>
            <ul>
                <li><button className="category" onClick={() => kategoria('men')}>Men</button></li>
                <li><button className="category" onClick={() => kategoria('women')}>Women</button></li>
                <li><button className="category" onClick={() => kategoria('kids')}>Kids</button></li>
            </ul>
            <form onSubmit={handleSubmit(handleRegistration)}>
                <input type="text" placeholder='search ...' name="search" {...register('search')} required />
                <button type="submit" value="Wyślij"><img src={search_icon}></img></button>
            </form>
            <span></span>
        </div>
    )
}

export default Search;