// import logo from './logo.svg';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Availablecountry from './Component/Availablecountry';
import Clients from './Component/Clients';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Navbar from './Component/Navbar';
import Services from './Component/Services';

function App() {
    // const able=[];
    const [serviceable, setServiceable] = useState();
    const [country, setCountry] = useState();

    useEffect(() => {
                    if(!country){
                        axios.get(`https://restcountries.com/v2/all`)
                        .then(response => {
                        setCountry(response.data) });
                        //  console.log("raju")
                    }
              
                    if(Array.isArray(country)){
                        const able=[];
                      for (let i = 0; i < 9; i++) {
                          able.push(country[i])
                        }
                        setServiceable(able)
                    //    console.log(able);
                        }

          },[country]);
        //   console.log(serviceable);

      
      


  return (
    <div className="" id='page-top'>
        <Navbar></Navbar>
        <Header></Header>
        <Services ></Services>
        <Availablecountry country={serviceable}></Availablecountry>
        <Clients></Clients>
        <Contact></Contact>
        <Footer></Footer>
    </div>
  );
  }

export default App;
