import React from "react"
import {graphql} from "gatsby";
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Globals/Header"
import Menu from "../components/Home/ClientsMenu"

const ClientsPage = ({data}) => (
  <Layout>
    <SEO title="Clients" />
    <Header backgroundImage={data.clientBackgroundImage.childImageSharp.fluid} 
            title="Current Clients" 
            styleClass="restPages-background" 
    />

    <Menu items={data.clientsMenu} />
  </Layout>
);

export const backgroundEventsquery = graphql`
{
  clientBackgroundImage: file(relativePath: {eq: "ClientPageBackgroundImage.jpg"}){
    childImageSharp{
      fluid (quality:100){
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  clientsMenu: allContentfulClientItem {
    edges {
      node {
        id
        clientTitle
        majorUpdate {
          majorUpdate
        }
      }
    }
  }
}`

export default ClientsPage