import React from 'react';

const Testimonial = ({ name, title, description, image }) => {
    
    return (
        <div  className=" col-md-4 ">
            <div style={{height:'300px'}} className="card shadow-sm">
            <div className="card-header d-flex align-items-center">
                <img className="mx-3" src={image} alt="" width="60"/>
                <div>
                    <h6 >{name}</h6>
                    <p className="m-0">{title}</p>
                </div>
            </div>
            <div className="card-body">
                
                <p className="card-text text-secondary mt-4">{description}</p>
            </div>
        </div>
        </div>
    );
};

export default Testimonial;