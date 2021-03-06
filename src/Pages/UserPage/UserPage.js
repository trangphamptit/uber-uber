import React, { Component } from "react";
import "./UserPage.scss";
import male from "../../img/male.png";
import female from "../../img/female.png";
import CircleButton from "../../components/buttons/CircleButton";
import iconbutton from "../../img/iconbutton.png";
import { withFormik, Field, Form } from "formik";
import * as Yup from "yup";
import { thisExpression } from "@babel/types";
class UserPage extends Component {
  constructor(props) {
    super(props);
  }
  setGender(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="userpage">
        <Form className="formUserpage">
          <h4>Enter your Infor</h4>
          <Field
            id="name-field"
            type="text"
            placeholder="Enter your full name"
            name="username"
          />
          <label>{this.props.errors.username}</label>
          <span className="select-gender">Select gender</span>
          <div className="choose-gender" onChange={this.setGender.bind(this)}>
            <label className="gender">
              <Field type="radio" value="male" name="gender" />
              <img src={male} />
            </label>
            <label className="gender">
              <Field type="radio" value="female" name="gender" />
              <img src={female} />
            </label>
          </div>
          <label>{this.props.gender}</label>
          <div className="upload-photo">
            <Field
              className="fileUpload"
              type="file"
              id="avatar"
              name="avatar"
              accept="image/png, image/jpeg"
            />

            <label style={{ left: "0px", position: "absolute" }} for="avatar">
              Upload profile picture
            </label>
          </div>
          <label>{this.props.errors.avatar}</label>
          <CircleButton imgSrc={iconbutton} onClick={this.handleSubmit} />
        </Form>
      </div>
    );
  }
}

const UserPageForm = withFormik({
  mapPropsToValues({ username, gender, avatar }) {
    return {
      username: "",
      gender: "",
      avatar: ""
    };
  },

  handleSubmit(values, { props }) {
    const { username, gender, avatar } = values;
    console.log(values);
    localStorage.setItem("username", username);
    localStorage.setItem("gender", gender);
    let tmps = avatar.split("\\");
    let filename = tmps[tmps.length - 1];
    localStorage.setItem("avatar", filename);
    props.history.push("/showmappage");
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("username is required"),
    gender: Yup.string().required("gender is required"),
    avatar: Yup.string().required("avatar is required")
  })
})(UserPage);
export default UserPageForm;
