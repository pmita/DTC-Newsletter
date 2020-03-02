import React from 'react'
import BackgroundImage from 'gatsby-background-image'

export default function Header({backgroundImage, 
                                styleClass, 
                                title, 
                                children}) {
    return (
        <BackgroundImage className={styleClass} 
                         fluid={backgroundImage}
        >
            <h1 className="title text-uppercase text-center display-4 font-weight-bold">
                {title}
            </h1>
            {children}
        </BackgroundImage>
    );
}

Header.defaultProps = {
    title: "default title",
    styleClass: "default-background"
}