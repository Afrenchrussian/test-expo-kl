import React from 'react'
import {withStyles, Grid} from '@material-ui/core'
import image from '../../assets/icon_sm.png'

function HomeScreen_Desktop(props) {
    const classes = props.classes;
    return(
        <div className={classes.main}>
            <img src={image} className={classes.logo}/>
            <Grid container direction='column'>
                <Grid item>Home</Grid>
                <Grid item>Desktop</Grid>
            </Grid>
        </div>
    )
}

const styles = {
    main: {
        justifyContent: 'center'
    },
    logo: {
        height: '125px',
        width: '125px'
    }
};

export default withStyles(styles)(HomeScreen_Desktop);
