import React, {useState,useEffect } from 'react';
import UserProfile from './UserProfile';
import './style.scss';

export default function UserList(){
    const [user,setUser] = useState(null);
    const [profile,setProfile] = useState(false);
    const [id,setId] = useState(null);
    useEffect( () => {
        async function fetchData() {
            const response = await fetch("https://reqres.in/api/users?page=1")
            const result = await response.json();
            setUser(result);
            console.log(result,"something");
        }
        fetchData();
    }, []);

    const fetchUserdetails = (id) =>{
        setProfile(true);
        setId(id);
    }
    return(
        <div className="user-list">
            {user && 
                    <div className="flx-sec">
                        <div className="id">
                            <h5>Id</h5>
                            {user.data.map(item => (
                                    <p key={item.id} onClick={() =>fetchUserdetails(item.id)}>
                                    {item.id}
                                    </p>
                                    
                                 ))}
                        </div>
                        <div className="email">
                            <h5>Email</h5>
                            {user.data.map(item => (
                                    <p key={item.id}>
                                    {item.email}
                                    </p>
                                 ))}
                        </div>
                        <div className="email">
                            <h5>First Name</h5>
                            {user.data.map(item => (
                                    <p key={item.id}>
                                    {item.first_name}
                                    </p>
                                 ))}
                        </div>
                        <div className="email">
                            <h5>Last Name</h5>
                            {user.data.map(item => (
                                    <p key={item.id}>
                                    {item.last_name}
                                    </p>
                                 ))}
                        </div>
                        <div className="email">
                            <h5>Avatar</h5>
                            {user.data.map(item => (
                                    <p key={item.id}>
                                   <img src={item.avatar} /> 
                                    </p>
                                 ))}
                        </div>
                    </div>
            }
            {
                profile && <UserProfile name={id}/>
            }
        </div>
    )
}