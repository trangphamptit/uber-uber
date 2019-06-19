import React, { Component } from "react";
import "./FormDefaultAddress.scss";
import food2 from "../../img/food1.jpg";
import food1 from "../../img/food2.jpg";
import food3 from "../../img/food3.jpg";
class FormDefaultAddress extends Component {
  render() {
    return (
      <div className="modal-location">
        <div className="address-field">
          <i class="fas fa-briefcase" />
          <article className="content">
            <h4 className="title">Office</h4>
            <p className="address">BDlive24, Road 8 Niketon, gulsan, 1000</p>
          </article>
        </div>

        <div className="address-field">
          <i class="fas fa-igloo" />
          <article className="content">
            <h4 className="title">Home</h4>
            <p className="address">BDlive24, Road 8 Niketon, gulsan, 1000</p>
          </article>
        </div>

        <h4>Near by restaurant</h4>
        <div className="address-image">
          <div>
            <img className="imgItem address-img1" src={food3} />
            <article className="text-content">
              <h5 className="title">Grandiose restaurant</h5>
              <p className="gray address">Airport Road Khikhet 1229</p>
            </article>
          </div>
          <img className="imgItem address-img2" src={food2} />
        </div>

        <h4 className="nearbytitle">Friend near by you</h4>
        <div className="nearby">
          <div className="nearbyitem">
            <img src={food3} alt="" className="nearbyimg" />
            <article className="nearbytext">
              <h5 className="title">Grandiose restaurant</h5>
              <p className="gray address">Airport Road Khikhet 1229</p>
            </article>
          </div>
          <div className="nearbyitem">
            <img src={food3} alt="" className="nearbyimg" />
            <article className="nearbytext">
              <h5 className="title">Grandiose restaurant</h5>
              <p className="gray address">Airport Road Khikhet 1229</p>
            </article>
          </div>
          <div className="nearbyitem">
            <img src={food3} alt="" className="nearbyimg" />
            <article className="nearbytext">
              <h5 className="title">Grandiose restaurant</h5>
              <p className="gray address">Airport Road Khikhet 1229</p>
            </article>
          </div>
        </div>
      </div>
    );
  }
}

export default FormDefaultAddress;
