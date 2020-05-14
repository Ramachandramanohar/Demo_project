import React, {useState,useEffect} from 'react';
import {Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';

export default function Header (){
    return ( 
        <>
        <Navbar bg="light justify-content-between">
            <Navbar.Brand href="#home">Logo</Navbar.Brand>
            <h5>User Name</h5>
        </Navbar>
       </>
     );
}

