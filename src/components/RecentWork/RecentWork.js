import React from "react";
import { Link } from "react-router-dom";
import * as Icon from "react-feather";
import OwlCarousel from "react-owl-carousel3";
import List from "../../utils/List";

const slideOptions = {
  items: 4,
  loop: true,
  nav: false,
  autoplay: true,
  dots: true,
  responsive: {
    0: {
      items: 1
    },
    786: {
      items: 2
    },
    1024: {
      items: 3
    },
    1400: {
      items: 4
    }
  }
};

class RecentWork extends React.Component {
  render() {
    return (
      <section className="works-area ptb-80">
        <div className="container">
          <div className="section-title">
            <h2>My Recent Works</h2>
            <div className="bar"></div>
            <p>
              A Selection of 12 case studies with over 18 Projects and
              Assignments here is some of My Work.
            </p>
          </div>
        </div>

        <div className="row m-0">
          {/* <div className="works-slides"> */}
          <OwlCarousel className="owl-theme" {...slideOptions}>
            {List.map(item => (
              <div className="item" key={item.id}>
                <div className="col-lg-12">
                  <div className="single-works">
                    <img src={item.urls} alt="pupster" />

                    <Link to={item.id} className="icon">
                      <Icon.Settings />
                    </Link>

                    <div className="works-content">
                      <h3>
                        <Link to={item.id}>{item.heading}</Link>
                      </h3>
                      <p>{item.detail}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>

          {/* </div> */}
        </div>

        <div className="shape8 rotateme">
          <img src={require("../../assets/images/shape2.svg")} alt="shape" />
        </div>
        <div className="shape2 rotateme">
          <img src={require("../../assets/images/shape2.svg")} alt="shape" />
        </div>
        <div className="shape7">
          <img src={require("../../assets/images/shape4.svg")} alt="shape" />
        </div>
        <div className="shape4">
          <img src={require("../../assets/images/shape4.svg")} alt="shape" />
        </div>
      </section>
    );
  }
}

export default RecentWork;
