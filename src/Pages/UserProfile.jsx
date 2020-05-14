import React, {useState,useEffect } from 'react';
import {Form,Button,Row,Col} from 'react-bootstrap';
import './style.scss';

export default function UserProfile(props){
    const [userprofile,setUserprofile] = useState(null);
    useEffect( () => {
        async function fetchData() {
            var id = props.name;
            console.log(id,"qqqqqqq");
            const response = await fetch("https://reqres.in/api/users" + "/" + id )
            const result = await response.json();
            setUserprofile(result.data);
            console.log(result.data.email,"something");
        }
        fetchData();
    },[props.name]);
    
   
    return(
          <div>
              <h3>UserProfile Details</h3>
               {userprofile && 
              <Form>
                <Form.Group controlId="formBasicEmail">
                    
                    <Row>
                        <Col>
                        <Form.Label>ID</Form.Label>
                        <Form.Control placeholder="Id"  value={userprofile.id}/>
                        </Col>
                        <Col>
                        <Form.Label>Email</Form.Label>
                        <Form.Control placeholder="Email"  value={userprofile.email}/>
                        </Col>
                    </Row>
                                    
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    
                    <Row>
                        <Col>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control placeholder="First name" value={userprofile.first_name}/>
                        </Col>
                        <Col>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control placeholder="Last name" value={userprofile.last_name}/>
                        </Col>
                    </Row>
                    </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
             </Form>
             }
           
             
          </div>
    )
}