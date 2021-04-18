import React from 'react';
import './ServiceDetail.css'
import { useHistory } from 'react-router';
const ServiceDetail = ({ _id, name, description, price, imageURL }) => {
    const history = useHistory();
    const handleServiceClick = (id) => {
        history.push(`/dashboard/book/${id}`);
     };

    return (
        
        <div className="my-3 col-md-4  " >
            <div className="Card card">
                <div className="Card-img">
                <img className="service-img" src={imageURL} alt= " " />
                </div>
                <div className="card-body text-white bodyBg">
                    <h5 className="card-title text-white">{name}</h5>
                    <p>{description}</p>
                    
                    
                    <div className="card-footer d-flex justify-content-between align-items-center"> 
                        <p className="p-color">{price}$</p>
                        <button className="custom-btn" onClick={() => handleServiceClick(_id)}>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;