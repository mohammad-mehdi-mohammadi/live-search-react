import React from "react";
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LiveSearch from "./components/LiveSearch";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import UserDetail from "./components/UserDetail/UserDetail";


function App() {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route exact path='/live-search'><LiveSearch/></Route>
                <Route exact path='/user-detail/:id' component={UserDetail}/>
                <Route exact path='/home' component={Home}/>
            </Switch>
        </div>
    );
}

export default App;
