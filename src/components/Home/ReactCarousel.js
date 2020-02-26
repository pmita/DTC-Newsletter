import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Img from "gatsby-image";

export default function ReactCarousel({backgroundImageOne, backgroundImageTwo, backgroundImageThree, descriptionOne, descriptionTwo, descriptionThree}) {
    return (

      
        <Carousel className="container my-3 ">
          <Carousel.Item className="row">
              
              <div className="col-lg-12 col-md-12 col-sm-10 text-center"><Img fluid={backgroundImageOne} /></div>
              
              <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                <Carousel.Caption className="semi-transparent-background">
                <h4>{descriptionOne[0].node.jobTitle}</h4>
                <p>Feel like you could use a change? There is new positions</p>
                </Carousel.Caption>
              </div>
              

          </Carousel.Item>

          <Carousel.Item className="row">

              <div className="col-lg-12 col-md-12 col-md-12 col-sm-10 text-center"><Img fluid={backgroundImageTwo} /></div>

              <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                <Carousel.Caption className="semi-transparent-background">
                    <h4>{descriptionTwo[0].node.eventTitle}</h4>
                    <p>Don't forget to check this one out!</p>
                  </Carousel.Caption>
              </div>

          </Carousel.Item>

          <Carousel.Item className="row text-center">

              <div className="col-lg-12 col-md-12 col-sm-10 text-center"><Img fluid={backgroundImageThree} /></div>

              <div className="col-lg-12 col-md-12 col-sm-12">
                <Carousel.Caption className="semi-transparent-background">
                    <h4>{descriptionThree[0].node.clientTitle}</h4>
                    <p>Great news - We just landed a new project</p>
                </Carousel.Caption>
              </div>

          </Carousel.Item>
        </Carousel>
      
    )
}
