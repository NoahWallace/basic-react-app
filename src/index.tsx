import React, {Fragment} from 'react';
import * as ReactDOM from 'react-dom';
import {Home} from "./views/home";
import './index.module.css';
import {ClassBasedView} from "./views/classBasedView";


const App = () => {
    return (
        <Fragment>
            <Home/>
            <ClassBasedView/>
        </Fragment>
    )
}

ReactDOM.render(<App/>, document.getElementById('app'));