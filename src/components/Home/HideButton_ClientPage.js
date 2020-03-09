import React, { Component } from 'react'

export default class HideButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOn: false,
            text: "Tell me more",
            paragraphOne: props.paragraphOne
        };
      }

    toggleButton =() => {
        this.state.isOn
        ? this.setState({
            isOn: false,
            text: "Tell me more"
        })
        : this.setState({
            isOn: true,
            text: "Got it"
        })
    }

    render() {
        if (this.state.paragraphOne.length>0){
            return (
                <div>
                    {this.state.isOn && (<>
                                            <p className="my-3 text-justify">{this.state.paragraphOne}</p>
                                         </>)}
                    <button className="btn btn-yellow text-capitalize m-3" onClick={this.toggleButton}>{this.state.text}</button>
                </div>
            );
        }
        else {
            return (
                <div>
                    {this.state.isOn && (<>
                                            <p className="my-3 text-justify">No more details</p>
                                        </>)}
                    <button className="btn btn-yellow text-capitalize m-3" onClick={this.toggleButton}>{this.state.text}</button>
                </div>
        );
        }
    }
}