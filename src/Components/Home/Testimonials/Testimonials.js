import React,{useState,useEffect} from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css'

import axios from 'axios';


const Testimonials = () => {
    const [reviews, serReviews] = useState([]);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      setLoading(false);
      axios
         .get('https://secure-eyrie-65584.herokuapp.com/reviews')
         .then((res) => {
            setLoading(false);
            serReviews(res.data);
         })
         .catch((err) => console.log(err));
   }, []);
    return (
        <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header text-center">
                   <h5 style={{color: '#A7C850'}} className=" text-uppercase">Testimonial</h5>
                   <h1>WHAT THE PARENTS SAY</h1>
               </div>
               <div className="card-deck row  mt-5 pt-5">
                    {
                        reviews.map(testimonial => <Testimonial {...testimonial} key={testimonial._id}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testimonials;