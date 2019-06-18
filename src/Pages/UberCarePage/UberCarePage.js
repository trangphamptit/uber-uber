import React, { Component } from "react";
import "./UberCarePage.scss";
class UberCarePage extends Component {
  render() {
    return (
      <div className="ubercarepage">
        <form className="ubercareform">
          <h1 className="ubercaretitle">
            At Uber we can care about you & the trust you give us
          </h1>
          <p>
            We use your data to provide convenient transportation and delivery
            options, to help drivers maximize their earnings, and to protect the
            safety and security of user. We use your data to provide convenient
            transportation and delivery options, to help drivers maximize their
            earnings, and to protect the safety and security of user.
          </p>
          <article>
            <h4>Your data is work for you</h4>
            <p className="gray">
              We use your data to provide convenient transportation and delivery
              options, to help drivers maximize their earnings, and to protect
              the safety and security of user.{" "}
            </p>
          </article>
          <article>
            <h4>Safety first</h4>
            <p className="gray">
              We use your data to provide convenient transportation and delivery
              options, to help drivers maximize their earnings, and to protect
              the safety and security of user.{" "}
            </p>
          </article>
          <article>
            <h4>You are in control</h4>
            <p className="gray">
              We use your data to provide convenient transportation and delivery
              options, to help drivers maximize their earnings, and to protect
              the safety and security of user.{" "}
            </p>
          </article>
        </form>
      </div>
    );
  }
}

export default UberCarePage;
