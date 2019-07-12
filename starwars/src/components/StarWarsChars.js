import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Card, CardMedia, CardContent, Container, Grid } from '@material-ui/core/';

const useStyles = makeStyles({
    
    card: {
        background: '#8a7b1294',
        maxWidth: '395px',
        margin: '0 auto'
    },
    name: {
        color: 'white',
        fontSize: '2rem',
        textAlign: 'left',
        fontFamily: 'fantasy',
        margin: '0'
    },
    cardContent: {
        flexDirection: 'column',
        alignItems: 'center'
    }

});

const StarWarsChars = (props) =>{
    console.log(props.char)
    const classes = useStyles()

    return (
        <Card className={classes.card}>
        
        <CardMedia component='img' className={classes.photo} src={require("../Img/starWars.png")} title='StarWars'/>
        
        <CardContent>
            <Grid container className={classes.cardContent}>

                <Grid item><p className={classes.name}>{props.char.name}</p></Grid>
                <Grid item><strong>Year of Birth:</strong><span>{props.char.birth_year}</span></Grid>
                <Grid item><strong>Gender:</strong><span>{props.char.gender}</span></Grid>
                <Grid item><strong>Skin Color:</strong><span>{props.char.skin_color}</span></Grid>
                <Grid item><strong>Weight:</strong><span>{props.char.mass}</span></Grid>

            </Grid>
        </CardContent>

    </Card>
    )
}

export default StarWarsChars;