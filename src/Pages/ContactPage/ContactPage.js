import React, { Component } from "react";
import { withFormik, Field, Form, Formik } from "formik";
import "./ContactPage.scss";
import CircleButton from "../../components/buttons/CircleButton";
import iconbutton from "../../img/iconbutton.png";
import { withRouter } from "react-router-dom";
import * as Yup from "yup";
class ContactPage extends Component {
  render() {
    return (
      <div className="contactus">
        <Form className="contactusform">
          <div className="contacttitle">
            <i class="fas fa-envelope" />
            <h1>Contact us</h1>
          </div>

          <div className="groups">
            <div className="group1">
              <div className="entername">
                <p>
                  {" "}
                  <strong>Your Name:</strong>
                </p>
                <Field
                  type="text"
                  name="username"
                  placeholder="enter the issue"
                />
              </div>
              <label>{this.props.errors.username}</label>
              <div className="select">
                <p>
                  {" "}
                  <strong>Select:</strong>
                </p>
                <select class="selectoption">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
            </div>

            <div className="group2">
              <div className="message">
                <p>
                  {" "}
                  <strong>Message:</strong>
                </p>
                <Field
                  type="textarea"
                  name="message"
                  placeholder="enter your message"
                />
              </div>
              <label> {this.props.errors.message}</label>
            </div>
          </div>
          <div className="contactbutton">
            <CircleButton imgSrc={iconbutton} onClick={this.handleSubmit} />
          </div>
        </Form>
      </div>
    );
  }
}
const ContactForm = withFormik({
  mapPropsToValues() {
    return {
      username: "",
      message: ""
    };
  },
  handleSubmit() {
    alert("your booking is successful");
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("your name is required"),
    message: Yup.string().required("pleased enter message")
  })
})(ContactPage);
export default ContactForm;
