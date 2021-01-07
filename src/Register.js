import React, { useState } from 'react';
import './register.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Alert from 'react-bootstrap/Alert'
// import { Button } from 'react-bootstrap'
function Register() {
    const [OldValue, setValue] = useState({
        name: '',
        username: '',
        password: '',
        email: ''

    })


    function onClick(a) {
        a.preventDefault()

        const values = {
            name: OldValue.name,
            password: OldValue.password,
            username: OldValue.username,
            email: OldValue.email
        }
        console.log(values.name);

        axios.post("http://localhost:4000/app/login", values)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))

        // window.location('/blog')

    }
    function onChange(a) {
        const { name, value } = a.target;
        setValue(previous => {
            return {
                ...previous,
                [name]: value
            }
        })
    }


    // const alert = () => {


    //     if (show) {
    //         return (
    //             <Alert variant="danger" onClose={() => setShow(false)} dismissible>
    //                 <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
    //                 <p>
    //                     Change this and that and try again. Duis mollis, est non commodo
    //                     luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
    //                     Cras mattis consectetur purus sit amet fermentum.
    //     </p>
    //             </Alert>
    //         );
    //     }
    //     return <Button onClick={() => setShow(true)}>Show Alert</Button>;
    // }









    return (
        <>
            <div class="container ">
                <form encType="multipart/form-data" method="post">
                    <div className="mb-3">
                        <label for="name" className="form-label"> Enter your name </label>
                        <input type="name" className="form-control" id="name" onChange={onChange} value={OldValue.name} name='name' />
                    </div>
                    <div className="mb-3">
                        <label for="username" className="form-label">username </label>
                        <input type="username" className="form-control" id="username" onChange={onChange} value={OldValue.username} name='username' />
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" onChange={onChange} value={OldValue.email} name='email' />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" />
                    </div>
                    <div className="mb-3">
                        <label for="confirmPassword" className="form-label">confirm Password</label>
                        <input type="Password" className="form-control" id="confirmPassword" onChange={onChange} value={OldValue.password} name='password' />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Remember me</label>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={onClick}>Submit</button>
                </form>
            </div>

        </>
    )
}

export default Register;
