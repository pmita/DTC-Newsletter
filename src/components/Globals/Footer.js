import React from 'react'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto my-auto footer-text text-center text-capitalize">
                        <p>&copy; Copyright {new Date().getFullYear().toString()} DTC - All rights reserved </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
