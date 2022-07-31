import React from 'react'
import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'
import LoginForm from '../Components/LoginForm'

const LoginPage = () => {

    return (

        <div className='text-center'>
         
            <Header></Header>

            <div className='containter'>
                <h2> Kullanici Girisi</h2>

            <LoginForm></LoginForm>
            </div>
            <Footer></Footer>

        </div>

    );
}


export default LoginPage