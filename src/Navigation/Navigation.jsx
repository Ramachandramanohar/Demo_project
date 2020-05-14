import React, { useState } from 'react';
import { HouseDoor, ColumnsGap, Display, PersonSquare } from 'react-bootstrap-icons';
import {BrowserRouter as Router, Route ,Switch,Link} from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Dashboard from '../Pages/Dashboard';
import User from '../Pages/User';
import './style.scss';

export default function Navigation(){
    return(
        <Router>
                <div className="navigation-bar">
                    <ul>
                        <li>
                            <Link to="/">
                            <HouseDoor color="white" size={26} />
                            </Link>
                        
                        </li>
                        <li>
                            <Link to="/dashboard"> <ColumnsGap color="white" size={26} /></Link>
                    
                        </li>
                        <li>
                            <Link to="/about"> <Display color="white" size={26} /></Link>
                    
                        </li>
                        <li>
                            <Link to="/user"> <PersonSquare color="white" size={26} /></Link>
                    
                        </li>
                    </ul>
                </div>
                <div className="page-body">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/dashboard" component={Dashboard}/>
                        <Route exact path="/user" component={User}/>
                    </Switch>
                </div>
        </Router>
       
    )
}