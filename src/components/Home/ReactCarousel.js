import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Img from "gatsby-image";

export default function ReactCarousel({backgroundImageOne, 
                                       backgroundImageTwo, 
                                       backgroundImageThree, 
                                       descriptionOne, 
                                       descriptionTwo, 
                                       descriptionThree}) {
    return (
        <Carousel className="container my-3">

          <Carousel.Item className="row fixed-width-carousel">
              <div className="col-lg-12 col-md-12 col-sm-10 text-center">
                <Img fluid={backgroundImageOne} />
              </div>
              
              <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                  <Carousel.Caption className="semi-transparent-background">
                  <h6>{descriptionOne[0].node.jobTitle}</h6>
                  <p>Feel like you could use a change? We have new positions</p>
                  </Carousel.Caption>
              </div>
          </Carousel.Item>

          <Carousel.Item className="row fixed-width-carousel">
              <div className="col-lg-12 col-md-12 col-md-12 col-sm-10 text-center">
                <Img fluid={backgroundImageTwo} />
                </div>

              <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                  <Carousel.Caption className="semi-transparent-background">
                    <h6>{descriptionTwo[0].node.eventTitle}</h6>
                    <p>Don't forget to check this one out!</p>
                  </Carousel.Caption>
              </div>
          </Carousel.Item>

          <Carousel.Item className="row text-center fixed-width-carousel">
              <div className="col-lg-12 col-md-12 col-sm-10 text-center">
                <Img fluid={backgroundImageThree} />
              </div>

              <div className="col-lg-12 col-md-12 col-sm-12">
                  <Carousel.Caption className="semi-transparent-background">
                      <h6>{descriptionThree[0].node.clientTitle}</h6>
                      <p>Great news - We just landed a new project</p>
                  </Carousel.Caption>
              </div>
          </Carousel.Item>

        </Carousel> 
    )
}
