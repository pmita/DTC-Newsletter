import React from "react"
import {graphql} from "gatsby";
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Globals/Header";
import Menu from "../components/Home/JobsMenu"

//We are passing the graphql query data as a prop into our function
const JobsPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Header backgroundImage={data.jobsBackgroundImage.childImageSharp.fluid} 
            title="Latest Jobs" 
            styleClass="restPages-background" 
    />
    <Menu items={data.jobsMenu} />
  </Layout>
);
/*We are passing the necessary props for the Header class to work. These include both grapgql queries and 
styling attributes. Remember these are represanted as props!!*/

export const Jobsquery = graphql`
{
  jobsBackgroundImage: file(relativePath: {eq: "JobPageBackgroundImage.jpg"}) {
    childImageSharp {
      fluid (quality:100) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  jobsMenu: allContentfulJobItem{
    edges{
      node{
	id
        jobTitle
        jobCategory
        jobDescription{
          jobDescription
        }
        jobRequirements{
          jobRequirements
        }
        jobEssentials{
          jobEssentials
        }
        jobImage{
          fixed(width:300, height:300){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
        jobLink
      }
    }
  }
}`;

export default JobsPage;
