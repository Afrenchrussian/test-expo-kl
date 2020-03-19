import React from 'react'
import {Button, Grid, Typography, withStyles} from '@material-ui/core'
import image from '../../assets/icon_sm.png'
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import MapCreator from './MapCreation'

function HomeScreen_Mobile(props) {
    const classes = props.classes;
    return (
        <BrowserRouter basename="/tailored-maps-v1">
            <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans&display=swap" rel="stylesheet"/>
            <Switch>
                <Route exact path={"/"}>
                    <div className={classes.main}>
                        <img src={image} className={classes.logo}/>
                        <Typography className={classes.title}>
                            Tailored Maps
                        </Typography>
                        <Grid container direction='column' justify={'center'} style={{width: '100%'}}>
                            <Grid item style={{alignSelf: 'center'}}>
                                <Link to={"/qrScanner"} style={{textDecoration: 'none'}}>
                                    <Button className={classes.buttons}>Scan QR</Button>
                                </Link>
                            </Grid>
                            <Grid item style={{alignSelf: 'center'}}>
                                <Link to={"/createMap"} style={{textDecoration: 'none'}}>
                                    <Button className={classes.buttons}>Create Map</Button>
                                </Link>
                            </Grid>
                            <Grid item style={{alignSelf: 'center'}}>
                                <Link to={"/login"} style={{textDecoration: 'none'}}>
                                    <Button className={classes.buttons} style={{margin: '0px'}}>Login</Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </div>
                </Route>
                <Route exact path={"/qrScanner"}>
                    <div>qr</div>
                </Route>
                <Route exact path={"/createMap"}>
                    <MapCreator/>
                </Route>
                <Route exact path={"/login"}>
                    <div>login</div>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

const styles = {
    main: {
        justifyContent: 'center',
        position: 'absolute',
        transform: 'translateY(-50%)',
        width: '100%',
        top: '50%',
        fontFamily: 'IBM Plex Sans',
    },
    logo: {
        width: '326px',
        marginLeft: '50%',
        transform: 'translateX(-50%)',
        marginBottom: '55px'
    },
    title: {
        fontSize: '65px',
        fontWeight: 'bold',
        marginBottom: '15%',
        textAlign: 'center'
    },
    buttons: {
        fontSize: '52px',
        height: '141px',
        width: '700px',
        textDecoration: 'none',
        textTransform: 'capitalize',
        backgroundColor: '#EDF0F7',
        marginBottom: '89px'
    }
};

export default withStyles(styles)(HomeScreen_Mobile);
