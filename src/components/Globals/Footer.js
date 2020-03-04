import React from 'react'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto footer-text text-center">
                        <p>&copy; {new Date().getFullYear().toString()} DXC Technology Company. All rights reserved </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
