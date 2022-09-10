import produkty from "../produkty";
import "../styles/produkty.scss";
import bike_men from "../images/bike_men.png";
import bike_women from "../images/bike_women.png";
import bike_kids from "../images/bike_kids.png";
import { connect } from 'react-redux'
import React, { useState, useEffect } from 'react';

function Produkty(props) {
    let [count, setCount] = useState({ data: [], loaded: false });

    useEffect(() => {
        if (!count.loaded)
            change(window.store.getState().produkty.produkty)
        console.log(window.store.getState().produkty.produkty);
        //console.log(count);
    })

    let change = async (data) => {
        setCount(count = { data: data, loaded: true })
    }

    //onsole.log(props.dane);
    //console.log(window.store.getState());
    //console.log(window.store.getState().produkty);

    return (
        <div>
            <ul className="list">
                {count.data.map(produkt => {
                    if (props.search == '') {
                        if (produkt.src == 'bike_men' && (props.kateg == 'men' || props.kateg == 'all'))
                            return <li className="list_item" key={produkt.id}> <img src={bike_men} /> <div className="rest"><div className="name">{produkt.name}</div> <div className="catg">{produkt.category}</div> </div> <div className="prize">{produkt.prize}</div></li>
                        if (produkt.src == 'bike_women' && (props.kateg == 'women' || props.kateg == 'all'))
                            return <li className="list_item" key={produkt.id}> <img src={bike_women} /> <div className="rest"><div className="name">{produkt.name}</div> <div className="catg">{produkt.category}</div> </div> <div className="prize">{produkt.prize}</div></li>
                        if (produkt.src == 'bike_kids' && (props.kateg == 'kids' || props.kateg == 'all'))
                            return <li className="list_item" key={produkt.id}> <img src={bike_kids} />  <div className="rest"><div className="name">{produkt.name}</div> <div className="catg">{produkt.category}</div> </div> <div className="prize">{produkt.prize}</div></li>
                    } else if (props.search == produkt.name && produkt.src == 'bike_men')
                        return <li className="list_item" key={produkt.id}> <img src={bike_men} /> <div className="rest"><div className="name">{produkt.name}</div> <div className="catg">{produkt.category}</div> </div> <div className="prize">{produkt.prize}</div></li>
                    else if (props.search == produkt.name && produkt.src == 'bike_women')
                        return <li className="list_item" key={produkt.id}> <img src={bike_women} /> <div className="rest"><div className="name">{produkt.name}</div> <div className="catg">{produkt.category}</div> </div> <div className="prize">{produkt.prize}</div></li>
                    else if (props.search == produkt.name && produkt.src == 'bike_kids')
                        return <li className="list_item" key={produkt.id}> <img src={bike_kids} /> <div className="rest"><div className="name">{produkt.name}</div> <div className="catg">{produkt.category}</div> </div> <div className="prize">{produkt.prize}</div></li>
                
                
                })}
            </ul>
        </div>
    );
}

const mapStateToProps = state => ({
    dane: state.produkty
})

export default connect(mapStateToProps, {})(Produkty);