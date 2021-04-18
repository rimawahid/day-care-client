import React from 'react';
import './Features.css'
const Features = ({info}) => {
    return (
        <div className="col-md-3 text-center">
            <div className="feature-img">
            <img className="fr-img" src={info.img} alt=""/>
            </div>
            <h5>{info.name}</h5>
        </div>
    );
};

export default Features;