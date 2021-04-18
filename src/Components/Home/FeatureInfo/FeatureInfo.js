import React from 'react';
import home from '../../../images/house.png'
import toys from '../../../images/toys.png'
import paint from '../../../images/paint.png'
import slide from '../../../images/slide.png'
import Features from '../Features/Features';
import './FeatureInfo.css'
const  featuresData = [
    {
        img:home,
        name:"HAPPY ENVIRONMENT"
    },
    {
        img:toys,
        name:"ACTIVE LEARNING"
    },
    {
        img:paint,
        name:"CREATIVE LESSONS"
    },
    {
        img:slide,
        name:"AMAZING PLAYGROUND"
    }
]

const FeatureInfo = () => {
    return (
        <section className="feature-container ">
            <div className="d-flex justify-content-center ">
            <div className="row ">
            {
                featuresData.map (info =><Features info={info}></Features>)
            }
        </div>
    </div> 
        </section>
           
    );
};

export default FeatureInfo;