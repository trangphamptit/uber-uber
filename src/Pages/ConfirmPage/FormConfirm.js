import React, { Component } from "react";
import "./FormConfirm.scss";
import arrow_right from "../../img/arrow_right.png";
import { withRouter } from "react-router-dom";
import RectangleButton from "../../components/buttons/RectangleButton";
import goback from "../../img/goback.png";
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
  goBack = () => {
    this.props.history.goBack();
  };
  render() {
    const { history, goBack } = this.props;
    return (
      <form className="formConfirm">
        <div className="field">
          <i class="fas fa-map-marker-alt" />
          <article>
            <h4>From</h4>
            <p>{this.state.fromAddress}</p>
          </article>
        </div>

        <div className="field">
          <i class="fas fa-map-marker-alt" />
          <article>
            <h4>To</h4>
            <p>{this.state.toAddress}</p>
          </article>
        </div>

        <div className="field ">
          <i class="fas fa-map-marker-alt" />
          <article>
            <h4>Price</h4>
            <p>Kilomets: 3.85km</p>
            <p>Time: 35minutes</p>
          </article>

          <select class="breakdown">
            <option value="volvo">Fake breakdown</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div className="redirect">
          <button
            className="btn goback-btn"
            type="button"
            onClick={this.goBack}
          >
            <img src={goback} />
            back
          </button>
          <div className="btn gonext-btn">
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
