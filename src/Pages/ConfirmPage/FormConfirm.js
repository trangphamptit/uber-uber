import React, { Component } from "react";
import "./FormConfirm.scss";
import arrow_right from "../../img/arrow_right.png";
import { withRouter } from "react-router-dom";
import RectangleButton from "../../components/buttons/RectangleButton";

class FormConfirm extends Component {
  constructor(props) {
    super(props);
    let fromAddress = localStorage.getItem("fromAddress");
    let toAddress = localStorage.getItem("toAddress");
    this.state = {
      fromAddress: fromAddress,
      toAddress: toAddress
    };
  }
  handleSubmit = (history, event) => {
    history.push("./contactpage");
    event.preventDefault();
  };
  render() {
    const { history, goBack } = this.props;
    return (
      <form className="formConfirm">
        <div className="field fromField">
          <i class="fas fa-map-marker-alt" />
          <div className="content">
            <h5>From</h5>
            <label>{this.state.fromAddress}</label>
          </div>
        </div>
        <div className="field toField">
          <i class="fas fa-map-marker-alt" />
          <div className="content">
            <h5>To</h5>
            <label>{this.state.toAddress}</label>
          </div>
        </div>
        <div className="field toField">
          {/* <i class="fas fa-map-marker-alt" /> */}
          <div className="content">
            <h5>Price</h5>
            <p>Kilomets: 3.85km</p>
            <p>Time: 35minutes</p>
          </div>
          <h5 class="fake">Fake breakdown</h5>
        </div>
        <div className="redirect">
          <button
            className="btn goback-btn"
            type="submit"
            onClick={event => this.handleSubmit(goBack, event)}
          >
            click
          </button>
          <div className="btn">
            <RectangleButton
              imgSrc={arrow_right}
              onClick={event => this.handleSubmit(history, event)}
            >
              Confirm
            </RectangleButton>
          </div>
        </div>
      </form>
    );
  }
}

const FormConfirmWithRouter = withRouter(FormConfirm);
export default FormConfirmWithRouter;
