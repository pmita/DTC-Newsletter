import React, { Component } from 'react'
import {Link} from 'gatsby'

export default class Navbar extends Component {   
    state = {
        navbarOpen: false,
        css: 'collapse navbar-collapse',
    };
    /* We are initiating a navbarHandler event in order for us to toggle the hamburger menu on smaller
    screen sizes*/
    navbarHandler = () =>{
        this.state.navbarOpen
            ? this.setState({
                navbarOpen:false,
                css: "collapse navbar-collapse"
            })
            : this.setState({
                navbarOpen:true,
                css: "collapse navbar-collapse show"
            });
    };
    render() {
        return (
            <nav className="navbar navbar-dark navbar-expand-md navbar-no-bg">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <h1 className="logo-header">Newsletter</h1>
                    </Link>

                    <button className="navbar-toggler" 
                            type="button" 
                            data-toggle="collapse" 
                            data-target="#navbarNav" 
                            aria-controls="navbarNav" 
                            onClick={this.navbarHandler}>
                                <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={this.state.css} id="navbarNav">
                        <ul className="navbar-nav text-center ml-auto">
                            <li className="nav-item"><Link className="nav-link scroll-link" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link scroll-link" to="/jobs">Jobs</Link></li>
                            <li className="nav-item"><Link className="nav-link scroll-link" to="/events">Events</Link></li>
                            <li className="nav-item"><Link className="nav-link scroll-link" to="/clients">Clients</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    };
}

