import React from 'react'
import Header from '../Components/Header'
import Footer from "../Components/Footer";

import { useForm } from 'react-hook-form';

const Contact = () => {

  return (
    <div>

        <Header></Header>
      <div className="main-frame">
        <div className=''>
              <div className='container'>
                <div className='row '>
                  <div className='col-12 text-center'>
                    <div className='contactForm'>
                      <form id='contact-form' noValidate>
                        {/* Row 1 of form */}
                        <div className='row formRow m-2'>
                          <div className='col-6'>
                            <input
                              type='text'
                              name='name'
                              className='form-control formInput'
                              placeholder='Name'
                            ></input>
                          </div>
                          <div className='col-6'>
                            <input
                              type='email'
                              name='email'
                              className='form-control formInput'
                              placeholder='Email address'
                            ></input>
                          </div>
                        </div>
                        {/* Row 2 of form */}
                        <div className='row formRow m-2'>
                          <div className='col'>
                            <input
                              type='text'
                              name='subject'
                              className='form-control'
                              placeholder='Subject'
                            ></input>
                          </div>
                        </div>
                        {/* Row 3 of form */}
                        <div className='row formRow m-2'>
                          <div className='col'>
                            <textarea
                              rows={3}
                              name='message'
                              className='form-control formInput'
                              placeholder='Message'
                            ></textarea>
                          </div>
                        </div>
                        <br />
                      </form>
                      <button style={{backgroundColor:"black", color:'white'}}className='btn' >
                          Submit
                        </button>
                    </div>
                  </div>
                </div>
              </div>
        </div>
        </div>
        <Footer></Footer>



    </div>
  )
}

export default Contact