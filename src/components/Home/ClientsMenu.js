import React, { Component } from 'react'
import Title from "../Globals/Title"
import ReactMarkdown from 'react-markdown';

export default class ClientsMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
          items: props.items.edges,
          clientContent: props.items.edges
        };
      }

    render() {
        if (this.state.items.length > 0) {
            return (
                <section className="menu py-5">
                        <Title title="Our latest Clients" />
                        {/*We display each data according to the following layout. We make sure we include the image, title, description, etc. while making 
                        sure that each of the field is accessed correctly ---Check Graphql queries---*/}

                        <div className="container-fluid">
                        <div className="row">
                        {this.state.clientContent.map(({ node }) => {
                            return (
                            <div
                                key={node.id}
                                className="container col-lg-6 col-md-6 col-sm-12 my-2 float-left"
                            >

                                <div className="row my-3 text-center">
                                    <div className="col-lg-10 col-md-10 col-sm-12 mx-auto ">
                                        <h4 className="highlighted-text my-3">{node.clientTitle}</h4>
                                        <ReactMarkdown source={node.majorUpdate.majorUpdate} />
                                    </div>
                                </div>
                            </div>
                            );
                        })}
                        </div>
                    </div>
                </section>
            );
        }else {
            return (
              <section className="menu py-5">
                <div className="container">
                  <Title title="best of our menu" />
                  <div className="row">
                    <div className="col-10 col-6 mx-auto text-center text-capitalize">
                      <h1>Sorry, no clients currently</h1>
                    </div>
                  </div>
                </div>
              </section>
            );
        }
    }
}
