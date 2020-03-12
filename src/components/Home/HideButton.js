import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

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
                                        <ReactMarkdown className="text-justify" source={this.state.paragraphOne} />
                                        <ReactMarkdown className="text-justify" source={this.state.paragraphTwo} />
                                     </>)}
                <button className="btn btn-yellow text-capitalize m-3" onClick={this.toggleButton}>{this.state.text}</button>
            </div>
        )
    }
}