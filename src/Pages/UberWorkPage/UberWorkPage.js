import React, { Component } from "react";
import "./UberWorkPage.scss";
class UberWorkPage extends Component {
  render() {
    return (
      <div className="uberworkpage">
        <form className="uberworkform">
          <h1>How Uber works</h1>
          <div className="uberworkcontent">
            <p>
              On demand transportation technology is our core service. and the
              app that connects driver-partners and riders is what makes at
              possible. Here's how is works, step by step.{" "}
            </p>
            <div className="worksteps">
              <article>
                <h4>Step1: A rider opens the app</h4>
                <p className="gray">
                  The rider enters their destination into the Where to? box on
                  the top of the screen; taps each ride option to see the wait
                  time, car sizes, and price, then confirms their pickup
                  location and taps Request.
                </p>
              </article>
              <article>
                <h4>Step2: The rider is matched with a driver</h4>
                <p className="gray">
                  The rider enters their destination into the Where to? box on
                  the top of the screen; taps each ride option to see the wait
                  time, car sizes, and price, then confirms their pickup
                  location and taps Request.
                </p>
              </article>
              <article>
                <h4>Step3: The driver picks up the rider</h4>
                <p className="gray">
                  The rider enters their destination into the Where to? box on
                  the top of the screen; taps each ride option to see the wait
                  time, car sizes, and price, then confirms their pickup
                  location and taps Request.
                </p>
              </article>
              <article>
                <h4>Step4: The driver takes the rider to the destination</h4>
                <p className="gray">
                  The rider enters their destination into the Where to? box on
                  the top of the screen; taps each ride option to see the wait
                  time, car sizes, and price, then confirms their pickup
                  location and taps Request.
                </p>
              </article>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default UberWorkPage;
