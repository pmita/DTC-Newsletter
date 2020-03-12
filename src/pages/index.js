import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Globals/Header"
import Carousel from "../components/Home/ReactCarousel"
import ReactMarkdown from "react-markdown"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Header backgroundImage={data.indexBackgroundImage.childImageSharp.fluid} 
            title="Montly Newsletter" 
            styleClass="default-background" 
    />

    <section className="menu my-3">
        <h1 className="text-center text-uppercase">DTC updates</h1>
        <ReactMarkdown className="container my-4" source={data.indexBriefDescription.edges[0].node.majorUpdate.majorUpdate} />
        <Carousel backgroundImageOne={data.carouselBackgroundImageOne.childImageSharp.fluid} 
                  backgroundImageTwo={data.carouselBackgroundImageTwo.childImageSharp.fluid}
                  backgroundImageThree={data.carouselBackgroundImageThree.childImageSharp.fluid}
                  descriptionOne={data.carouselDescriptionOne.edges}
                  descriptionTwo={data.carouselDescriptionTwo.edges}
                  descriptionThree={data.carouselDescriptionThree.edges} 
        />
    </section>

  </Layout>
);

export const query = graphql`
{
  indexBackgroundImage: file(relativePath: {eq: "IndexPageBackgroundImage.jpg"}){
    childImageSharp{
      fluid (quality:100){
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  carouselBackgroundImageOne: file(relativePath: {eq: "JobsCarouselBackgroundImage.jpg"}){
    childImageSharp{
      fluid (quality:100){
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  carouselBackgroundImageTwo: file(relativePath: {eq: "EventsCarouselBackgroundImage.jpg"}){
    childImageSharp{
      fluid (quality:100){
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  carouselBackgroundImageThree: file(relativePath: {eq: "ClientCarouselBackgroundImage.jpg"}){
    childImageSharp{
      fluid (quality:100){
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  carouselDescriptionOne: allContentfulJobItem{
    edges{
      node{
				id
        jobTitle
      }
    }
  }
  carouselDescriptionTwo: allContentfulEventItem{
    edges{
      node{
        id
        eventTitle
      }
    }
  }
  carouselDescriptionThree: allContentfulClientItem {
    edges {
      node {
        id
        clientTitle
      }
    }
  }
  indexBriefDescription: allContentfulBriefUpdate{
    edges{
      node{
        id
        majorUpdate{
          majorUpdate
        }
      }
    }
  }
}`;

export default IndexPage;
