import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Widget from '../components/Widget'

const Millionaire = () => {

    const [data, setData] = useState([{}])

    useEffect(() => {

        fetch("http://127.0.0.1:5000/millionaire").then(
            res => res.json()
        ).then(
            data => {
                    setData(data)
                    console.log(data)
            }
        )

    }

    )

  return (
    <div>

        <Header></Header>

        <div className="main-frame">
            <div className="container">
            <div className="row">
                <div className="col-8">
                    
                    <Widget comp_name="Türkiyenin en büyük dagi hangisidir ?"></Widget>

                </div>
                <div className="col">
                    
                    <Widget comp_name="Agri Dagi"></Widget>

                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-8">
                    
                    <Widget comp_name="Ülkemizde 2017 yılında asgari ücret ne kadardı? ?"></Widget>

                </div>
                <div className="col">
                    
                    <Widget comp_name="1400"></Widget>

                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-8">
                    
                    <Widget comp_name="Türkiye’nin sahip olduğu uluslararası telefon kodu nedir?"></Widget>

                </div>
                <div className="col">
                    
                    <Widget comp_name="+90"></Widget>

                </div>
            </div>
            </div>
        </div>

    </div>
  )
}

export default Millionaire