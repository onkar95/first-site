import React, { useState, useEffect } from 'react';


function Page() {
    const [user, setUser] = useState([
        {
            name: '',
            password: ''
        }
    ])
    useEffect((prop) => {
        fetch('/login').then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonData => setUser(jsonData));
    }
    )
    console.log(setUser());

    return (
        <div>
            {/* {user.map(val => {
                return(
                    <h1>hello {val.name}</h1>
                )
            })} */}
        </div>
    )

}


export default Page