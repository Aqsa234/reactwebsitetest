import React from "react";
import { Route, Switch,Redirect } from "react-router";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Navbar from "./Navbar";
import User from './User.jsx';
import Search from './Search.jsx';
import Error from "./Error.jsx";


const App = () => {
    const Name = () => {
        return <h1>hello i am name  page</h1>
    };
    return(
        <>
        <Navbar/>
        <Switch>
            <Route exact path="/" render={ () => <About name='About'/>}/>
            <Route exact path="/service" render={ () => <Service name='Service'/>}/>
            <Route exact path="/search" component={Search}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/contact/name" component={Name}/>
            <Route exact path="/user/:name/:lname" component={User}/>
            {/* <Route exact  component={Error}/> */}
            <Redirect to="/"/>

        </Switch>
        </>

    );
}   
export default App; 