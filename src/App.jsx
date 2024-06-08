import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {toggleDarkMode} from "./pages/darkModeSlice.js";

const App = () => {
    const {mode} = useSelector ((state)=> state.darkMode)
    const dispatch = useDispatch()
    return (
        <div style={{background:mode? 'black' : 'white', height:'100vh', width:'100vh'}}>
            <button onClick={() => dispatch(toggleDarkMode()) }>Dark Mode</button>
        </div>
    );
};

export default App;