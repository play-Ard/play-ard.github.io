import React, { Component }  from "react"
import "./LoginForm.css";
import logoText from "../Assets/Formal.svg"
import logo from "../Assets/gifLogo.gif"
const LoginForm = () =>{
   

    return (

    <div className="login-for main-frame ">
      <img width={"30%"} src={logo} className="logo" alt="Business view - Reports" />
        <form className="form text-center " >
          <div className="row">
            <div className="m-2">

                <label htmlFor="email">Email</label>
                <input className="m-2" type="email" name="email" placeholder="" />
            
            </div>
          </div>
          <div className="row">
            <div className="m-2">
              <label htmlFor="password">Password</label>
              <input className="m-2"  type="password" name="password" />
            </div>
          </div>
          <button className="formbutton primary">Login</button>
        </form>
    </div>

        )


}



export default LoginForm;