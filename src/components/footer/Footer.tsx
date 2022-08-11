import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <div className="footera-area py-24 wow fadeInDown">
      <Container>
        <Row>
          <Col xs={12} sm={6} lg={4}>
            <div className={classes.singleFooter}>
              <div className={`${classes.logoArea} footer`}>
                <a href="#">
                  <img src="img/logo.png" alt="" />
                </a>
              </div>
              <div className="h-4"></div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis ratione non qui, provident eveniet iste tempora esse
                labore, veritatis fugit ea optio accusantium voluptates alias
                error blanditiis enim architecto quae.{" "}
              </p>
              <div className="h-2"></div>
              <p>
                Copyright WeeDeFi &copy;
                <script>document.write(new Date().getFullYear());</script> All
                rights reserved
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={2}>
            <div className={classes.singleFooter}>
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Distribution</a>
                </li>
                <li>
                  <a href="#">Roadmap</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={6} lg={2}>
            <div className={classes.singleFooter}>
              <ul>
                <li>
                  <a href="#">White Paper</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>

                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={4}>
            <div className={classes.singleFooter}>
              <p>Subscribe to our Newsletter</p>
              <div className="space-20"></div>
              <div className={classes.footerForm}>
                <form action="#">
                  <input type="email" placeholder="Email Address" />
                  <a href="" className={`${classes.gradientBtn} subscribe`}>
                    GO
                  </a>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
