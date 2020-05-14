import React from 'react';
import UserList from './UserList';
import {Tabs,Tab} from 'react-bootstrap';
export default function Home(){
    return(
        <div className="home-page">
            <h2> Welcome to Home page</h2>
            <Tabs defaultActiveKey="UserList" id="uncontrolled-tab-example">
                <Tab eventKey="UserList" title="UserList">
                   <UserList/>
                </Tab>
                <Tab eventKey="Userprofile" title="UserProfile">
                   Welcome to User profile page
                </Tab>
               
            </Tabs>
        </div>
    )
}