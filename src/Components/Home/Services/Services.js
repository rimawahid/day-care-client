import ServiceDetail from '../ServiceDetail/ServiceDetail';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Services = () => {
    const [services, setServices] = useState([]);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      setLoading(false);
      axios
         .get('https://secure-eyrie-65584.herokuapp.com/services')
         .then((res) => {
            setLoading(false);
            setServices(res.data);
         })
         .catch((err) => console.log(err));
   }, []);
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{color: '#A7C850'}}>OUR SERVICES</h5>
                <h2>CHOOSE CLASSES FOR YOUR CHILD</h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 ">
                {
                    services.map(service => <ServiceDetail {...service}  key={service._id}></ServiceDetail>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;