import React from 'react';
import './HeaderMain.css'
const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="d-flex align-items-center">
           <div className="col-md-4 offset-md-1">
               <h1 className="header-text">WELCOME TO <br/> THE<span style={{color:'#FFDE5A'}}>  KINDERGARTEN!</span></h1>
               <button className="btn custom-btn">ADMIT CLASSES</button>
            </div> 
        </main>
    );
};

export default HeaderMain;