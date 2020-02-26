import React from "react"
import {graphql} from "gatsby";
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Globals/Header";
import Menu from "../components/Home/JobsMenu"

//We are passing the graphql query data as a prop into our function in order for us to utilize its functionality as 
//a function arguement
const JobsPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Header backgroundImage={data.jobsBackgroundImage.childImageSharp.fluid} title="Latest Jobs" styleClass="restPages-background" />
    <Menu items={data.jobsMenu} />
  </Layout>
);
/*Remeber the Header is a component and we can pass data to that component (regardless of being a function or a class)
that will be props. Here in particular we are passing the jobsBackgroundImage itselt (look graphql query below) but also a few attributes that will
help us style this component with css*/

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
        jobResponsibilities{
          jobResponsibilities
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
