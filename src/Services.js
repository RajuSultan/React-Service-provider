import React from 'react'

const Services = () => {
    const service=[
        {
            name: "Illustration",
            heading: "Threads",
            imgsrc: "assets/img/portfolio/1.jpg"
        },
        {
            name: "Graphic Design",
            heading: "Explore",
            imgsrc: "assets/img/portfolio/2.jpg"
        },
        {
            name: "Identity",
            heading: "Finish",
            imgsrc: "assets/img/portfolio/3.jpg"
        },
        {
            name: "Branding",
            heading: "Lines",
            imgsrc: "assets/img/portfolio/4.jpg"
        },
        {
            name: "Website Design",
            heading: "Southwest",
            imgsrc: "assets/img/portfolio/5.jpg"
        },
        {
            name: "Photography",
            heading: "Window",
            imgsrc: "assets/img/portfolio/6.jpg"
        }
        
    ]
    
    // console.log(service[0].name);
  return (
    <section className="page-section bg-light" id="portfolio">
    <div className="container">
        <div className="text-center">
            <h2 className="section-heading text-uppercase">Services</h2>
            <h3 className="section-subheading text-muted">Pick the best one from Our side.</h3>
        </div>
        
        <div className="row">
            {
                service.map(
                    item=>
                        <div key={item.imgsrc} className="col-lg-4 col-sm-6 mb-4">
           
                            <div className="portfolio-item">
                                <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
                                   <div className="portfolio-hover">
                                      <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                  </div>
                                   <img className="img-fluid" src={item.imgsrc} alt="..." />
                                </a>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">{item.heading}</div>
                                    <div className="portfolio-caption-subheading text-muted">{item.name}</div>
                                    <p>{item.name}</p>
                                </div>
                            </div>
                        </div>     
                )
            }

        </div>
    </div>
</section>
  )
}

export default Services



