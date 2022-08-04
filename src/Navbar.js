import React from 'react';
import creatt from './Assets/images/creatt.svg';
function Navbar() {
  return (
    <div className="row p-2">
      <div className="col-md-12">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src={creatt} alt="" style={{height:'60px', width:'100px'}} />
            </div>
            <div className="col-md-4 mt-3">
              <div className="d-flex flex-row text-center justify-content-around">
                <div >Documention</div>
                <div>Pricing</div>
                <div>FAQ</div>
                <div>Contact</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex flex-row mt-2 justify-content-center ">
                <div className="btn btn-primary mx-2">Login</div>
                <div className="btn btn-outline-primary mx-2">Register</div>
              </div>
            </div>
            </div>
        </div>
        </div>
      </div>
  )
};

export default Navbar;