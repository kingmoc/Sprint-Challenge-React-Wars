import React, { useState, useEffect } from 'react';
import StarWarsChars from './StarWarsChars'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
// import Loader from 'react-loader-spinner';

const useStyles = makeStyles({
    
    cardContainer: {
        color: 'red'
    },

});

const StarWarsInfo = (props) => {
    const classes = useStyles()
    const [charInfo, setCharInfo] = useState([])

    useEffect(() => {
        axios
            .get(`https://swapi.co/api/people/`)
            .then(res => {
                // console.log(res.data.results)
                setTimeout(() => {
                    setCharInfo(res.data.results)
                }, 1500)
            })
            .catch(err => console.log(err.response))
    }, [])

    // if(charInfo === null) {
    //     return <Loader type="Triangle" color="#00BFFF" height="290" width="260" />
    // }

    if (charInfo) {
        return (
            <div className={classes.cardContainer}> 
                {charInfo.map(char => <StarWarsChars key={char.name} char={char}/>)}
            </div>
        )
    }
}

export default StarWarsInfo;