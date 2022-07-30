import React from 'react'
import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'
import LoginForm from '../components/LoginForm'

const LoginPage = () => {

    return (

        <div className='text-center'>
         
            <Header></Header>

                <h2> Kullanici Girisi</h2>

            <LoginForm></LoginForm>

            <Footer></Footer>

        </div>

    );
}


export default LoginPage