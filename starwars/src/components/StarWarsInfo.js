import React, { useState, useEffect } from 'react';
import StarWarsChars from './StarWarsChars'
import axios from 'axios'

const StarWarsInfo = (props) => {

    const [charInfo, setCharInfo] = useState([])

    useEffect(() => {
        axios
            .get(`https://swapi.co/api/people/`)
            .then(res => {
                // console.log(res.data.results)
                setCharInfo(res.data.results)
            })
            .catch(err => console.log(err.response))
    }, [])

    

    return (
        <div className="cardCont"> 
            {charInfo.map(char => <StarWarsChars key={char.name} char={char}/>)}
        </div>
    )
}

export default StarWarsInfo;