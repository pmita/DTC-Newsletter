import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Globals/Header"
import Menu from "../components/Home/EventsMenu"

const EventsPage = ({data}) => (
  <Layout>
    <SEO title="Events" />
    <Header backgroundImage={data.eventsBackgroundimage.childImageSharp.fluid} 
            title="Current Events" 
            styleClass="restPages-background" 
    />

    <Menu items={data.eventsMenu} />
  </Layout>
);

export const Eventsquery = graphql`
{
  eventsBackgroundimage: file(relativePath: {eq: "SecondaryEventPageBackgroundImage.jpg"}) {
    childImageSharp {
      fluid (quality:100){
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  eventsMenu: allContentfulEventItem{
    edges{
      node{
        id
        eventTitle
        eventCategory
        eventMajorDescription{
          eventMajorDescription
        }
        eventMajorDescription2{
          eventMajorDescription2
          json
        }
        eventMinorDescription
        eventPrice
        eventImage{
          fluid(maxHeight:300){
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
}`

export default EventsPage
