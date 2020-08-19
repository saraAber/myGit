import React, { useState } from 'react';
import axios from 'axios';



const Login = (props) => {
    const [Mail, MailLogin] = useState("");
    const mystyle = {
        margin: "1rem 25%",
        padding: "1rem"
    };
    const Submit = (event) => {
        event.preventDefault();
        console.log(Mail, props);
        axios.get('/login').then(x=>{
            console.log(x);
            
        })
    }
    return (
        <div className="ui inverted segment" style={mystyle}>
            <form className="ui inverted form" onSubmit={Submit}>
                <div className="equal width fields">
                    <div class="field">
                        <label>נא לאשר את הכתובת מייל</label>
                        <div className="ui fluid input">
                            <input type="text" placeholder="E-mail" value={Mail} onChange={(event) => MailLogin(event.target.value)} />
                        </div>
                    </div>
                </div>
                <button type="submit" className="ui button">אישור</button>
            </form>
        </div>
    )
}

export default Login
