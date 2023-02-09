import React from 'react';

const Ablecountry = (props) => {
    // console.log(props.country);
    return (    
                        <div className="col-lg-4 col-sm-6 mb-4">
           
                            <div className="portfolio-item">
                                <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
                                   <div className="portfolio-hover">
                                      <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                  </div>
                                   <img className="img-fluid" src={props.country.flag} alt="..." />
                                </a>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">{props.country.name}</div>
                                    
                                </div>
                            </div>
                        </div>     
    );
};

export default Ablecountry;