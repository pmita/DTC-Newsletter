import React, { Component } from 'react'
import Title from "../Globals/Title";
import Img from "gatsby-image";

const getCategories = items => {
    let tempItems = items.map(item => {
      return item.node.eventCategory;
    });
    let tempCategories = new Set(tempItems);
    let categories = Array.from(tempCategories);
    categories = ["all", ...categories];
    return categories;
  };

export default class EventsMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
          items: props.items.edges,
          eventItems: props.items.edges,
          categories: getCategories(props.items.edges)
        };
      }
      handleItems = category => {
        let tempItems = [...this.state.items];
        if (category === "all") {
          this.setState(() => {
            return { eventItems: tempItems };
          });
        } else {
          let items = tempItems.filter(({ node }) => node.eventCategory === category);
          this.setState(() => {
            return { eventItems: items };
          });
        }
      };

      render() {
        if (this.state.items.length > 0) {
          return (
            <section className="menu py-3">
              <div className="container">
                <Title title="This month's events" />
                <div className="row mb-5">
                  <div className="col-10  mx-auto text-center">
                    {this.state.categories.map((category, index) => {
                      return (
                        <button
                          type="button"
                          key={index}
                          className="btn btn-yellow text-capitalize m-3"
                          onClick={() => {
                            this.handleItems(category);
                          }}
                        >
                          {category}
                        </button>
                      );
                    })}
                  </div>
                </div>
                </div>
                <div className="container-fluid">
                  <div className="row">
                  {this.state.eventItems.map(({ node }) => {
                    return (
                          <div
                            key={node.id}
                            className="container col-lg-3 col-md-6 col-sm-12 my-2 float-left"
                          >
                            
                            <div className="row mx-auto text-center">
                                <div className="col-lg-12 col-md-12 col-sm-10">
                                    <Img fluid={node.eventImage.fluid} />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-10 my-3">
                                      <h6 >{node.eventTitle} - <span className="highlighted-text   mb-0">{node.eventPrice}</span></h6>
                                      <h6 className="my-3 text-center">{node.eventMajorDescription.eventMajorDescription}</h6>
                                      <h6 className="my-3 text-center">{node.eventMinorDescription}</h6>
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
                    <h1>Sorry, no events currently</h1>
                  </div>
                </div>
              </div>
            </section>
          );
        }
      }
}
