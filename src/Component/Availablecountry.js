import React from 'react';
import Ablecountry from '../Ablecountry';

const Availablecountry = (props) => {
    // console.log(props.country)
    return (
        <section className="page-section bg-light" id="portfolio">
             <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Service Available Country</h2>
                    <h3 className="section-subheading text-muted">Pick your one from Our side.</h3>
                </div>
        
                <div className="row">
            
                    {
                        props.country?.map(country=>
                            <Ablecountry key={country.name} country={country}></Ablecountry>
                            )
                    }


                 </div>
            </div>
        </section>
    );
};

export default Availablecountry;