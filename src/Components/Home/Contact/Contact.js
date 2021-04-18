import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <section className="contact my-5 py-5">
           <div className="container">
               <div className="section-header text-center  mb-5">
                    <h1 style={{color: '#A7C850'}}>HOW TO ENROLL YOUR CHILD?</h1>
                    <h5>CALL +1 000 123 1234 OR FILL IN THE FORM BELOW</h5>
               </div>
               <div className="col-md-9 mx-auto">
                   <form action="">
                   
                       <div className="form-group">
                           <div className="row">
                                <div className="col">
                                <input type="text" className="form-control" placeholder="Student Name"/>
                                </div>
                                <div className="col">
                                <input type="text" className="form-control" placeholder="Parent's Name"/>
                                </div>
                           </div>
                        </div>
                           <br/>
                        <div className="form-group">
                           <div className="row">
                                <div className="col">
                                <input type="text" className="form-control" placeholder="Add us to the writing list"/>
                                </div>
                                <div className="col">
                                <input type="text" className="form-control" placeholder="Phone Number"/>
                                </div>
                           </div>
                        </div>
                           <br/>
                       
                       
                       <div className="form-group">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder=" Your Message "></textarea>
                       </div>
                       <br/>
                       <div className="form-group text-center">
                           <button type="button" className="btn btn-primary"> Submit </button>
                       </div>
                   </form>
               </div>
           </div>
       </section>
    );
};

export default Contact;