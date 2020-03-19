import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import HomeScreen_Mobile from './screens/HomeScreen_Mobile.js'
import HomeScreen_Desktop from "./screens/HomeScreen_Desktop";
import mobile from 'is-mobile'

//const Screen = (mobile())? HomeScreen_Mobile : HomeScreen_Desktop;

const Screen = HomeScreen_Mobile;

ReactDOM.render(
    <Screen />
    , document.getElementById('index')
);

serviceWorker.register();
