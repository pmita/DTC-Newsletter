import React, { Component } from "react";
import Title from "../Globals/Title";
import Img from "gatsby-image";
import HideButton from "./HideButton";

const getCategories = items => {
  let tempItems = items.map(item => {
    return item.node.jobCategory;
  });
  let tempCategories = new Set(tempItems);
  let categories = Array.from(tempCategories);
  categories = ["all", ...categories];
  return categories;
};

export default class JobsMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items.edges,
      jobItem: props.items.edges,
      categories: getCategories(props.items.edges)
    };
  }

/*We have a simple call-able function that determines how many different categories are established within our nodes*/
  filterItems = category => {
    let tempItems = [...this.state.items];
    if (category === "all") {
      this.setState(() => {
        return { jobItem: tempItems };
      });
    } else {
      let items = tempItems.filter(({ node }) => node.jobCategory === category);
      this.setState(() => {
        return { jobItem: items };
      });
    }
  };

  render() {
    /*Make sure that we are getting non-zero data from contentful */
    if (this.state.items.length > 0) {

      /*In case we are getting data then we display the contents according to following layout */
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="Current Jobs" />

            {/*We position the Jobs filtering section directly underneath the section title*/}
            <div className="row mb-5">
              <div className="col-10  mx-auto text-center">
                {this.state.categories.map((category, index) => {
                  return (
                    <button
                      type="button"
                      key={index}
                      className="btn btn-yellow text-capitalize m-3"
                      onClick={() => {
                        this.filterItems(category);
                      }}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>
            </div>


            {/*We display each data according to the following layout. We make sure we include the image, title, description, etc. while making 
              sure that each of the field is accessed correctly ---Check Graphql queries---*/}

            <div className="container-fluid">
            <div className="row">
              {this.state.jobItem.map(({ node }) => {
                return (
                  <div
                    key={node.id}
                    className="container col-lg-4 col-md-6 col-sm-12 my-2 float-left"
                  >
                    <div className="row my-3 text-center">

                        <div className="col-lg-12 col-md-12 col-sm-12  ">
                            <Img fixed={node.jobImage.fixed} />
                        </div>

                        <div className="col-lg-10 col-md-10 col-sm-12 mx-auto ">
                              <h4 className="my-3">{node.jobTitle}</h4>
                              <p className="my-3 text-justify">{node.jobDescription.jobDescription}</p>
                              <p className="my-3 text-justify">Responsibilities{node.jobResponsibilities.jobResponsibilities}</p>

                                {/*We introduce a react component to do the toggling of our show more section. Please note that we are appsing the description
                                  as a prop to our HideButton component*/}
                              <HideButton paragraphOne={node.jobRequirements.jobRequirements} paragraphTwo={node.jobEssentials.jobEssentials}/>
                              <button className="btn btn-yellow text-capitalize m-3">Apply</button>
                        </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      );
    } else {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="best of our menu" />
            <div className="row">
              <div className="col-10 col-6 mx-auto text-center text-capitalize">
                <h1>there are no jobs to display</h1>
              </div>
            </div>
          </div>
        </section>
      );
    }
  }
}
