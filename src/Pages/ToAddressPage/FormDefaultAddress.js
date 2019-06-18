import React, { Component } from "react";
import "./FormDefaultAddress.scss";
import restaurant1 from "../../img/restaurant1.jpg";
import restaurant2 from "../../img/restaurant2.jpg";
class FormDefaultAddress extends Component {
  render() {
    return (
      <div className="modal-location">
        <div className="address-field">
          <i class="fas fa-briefcase" />
          <div className="content">
            <h4 className="title">Office</h4>
            <label className="address">
              BDlive24, Road 8 Niketon, gulsan, 1000
            </label>
          </div>
        </div>
        <div className="address-field">
          <i class="fas fa-igloo" />
          <div className="content">
            <h4 className="title">Home</h4>
            <label className="address">
              BDlive24, Road 8 Niketon, gulsan, 1000
            </label>
          </div>
        </div>
        <h4>Near by restaurant</h4>
        <div className="address-image">
          <div>
            <img className="imgItem address-img1" src={restaurant1} />
            <div className="text-content">
              <h4 className="title">Grandiose restaurant</h4>
              <label className="address">Airport Road Khikhet 1229</label>
            </div>
          </div>
          <img className="imgItem address-img2" src={restaurant2} />
        </div>
      </div>
    );
  }
}

export default FormDefaultAddress;
