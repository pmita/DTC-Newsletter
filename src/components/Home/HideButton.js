import React, { Component } from 'react'

export default class HideButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOn: false,
            text: "Tell me more",
            paragraphOne: props.paragraphOne,
            paragraphTwo: props.paragraphTwo
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
        return (
            <div>
                {this.state.isOn && (<>
                                        <p className="my-3 text-justify">{this.state.paragraphOne}</p>
                                        <p className="my-3 secondary-text text-justify">{this.state.paragraphTwo}</p>
                                     </>)}
                <button className="btn btn-yellow text-capitalize m-3" onClick={this.toggleButton}>{this.state.text}</button>
            </div>
        )
    }
}