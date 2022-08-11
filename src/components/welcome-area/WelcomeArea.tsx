import React, { useEffect } from "react";
import WOW from "wowjs";
import "animate.css/animate.min.css";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./WelcomeArea.module.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function WelcomeArea() {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className={`${classes.welcomeArea} wow fadeInUp`} id="home">
      <Particles
        className={classes.tsparticles}
        init={particlesInit}
        options={{
          fullScreen: { enable: false, zIndex: 0 },
          particles: {
            position: "relative",
            number: {
              value: 30,
              density: {
                enable: true,
                area: 1025.908125981517,
              },
            },
            color: {
              value: "#7EDA84",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nbSides: 4,
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.3083770200778445,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                // opacityMin: 0.1,
                sync: false,
              },
            },
            size: {
              value: 8.33451405615796,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                // sizeMin: 0.1,
                sync: false,
              },
            },
            lineLinked: {
              enable: true,
              distance: 116.68319678621143,
              color: "#ffffff",
              opacity: 0.35838410441479224,
              width: 0.833451405615796,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              outMode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 1166.8319678621144,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            // detectOn: "canvas",
            events: {
              onhover: {
                enable: false,
                mode: "grab",
              },
              onclick: {
                enable: false,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                lineLinked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                // speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                // particlesNb: 4,
              },
              remove: {
                // particlesNb: 2,
              },
            },
          },
          retina_detect: true,
        }}
        // loaded={particlesLoaded}
      />
      <Container>
        <Row>
          <Col xs={12} md={6} className="self-center">
            <div className={`${classes.welcomeRight} wow fadeInLeft`}>
              <div className={classes.welcomeText}>
                <h1 className="">
                  The only stable rewards staking protocol on the{" "}
                  <span className={classes.animateCharcter}>
                    SOLANA Blockchain
                  </span>
                </h1>
                <h4>Earn up to 25% Stable rewards!</h4>
              </div>
              <div className={classes.welcomeBtn}>
                <a href="#" className={`${classes.gradientBtn} mr-5`}>
                  Early Access
                </a>
                <a href="#" className={`${classes.gradientBtn}`}>
                  Read the Greenpaper
                </a>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} className="wow fadeInUp">
            <div className="welcome-img">
              <img src="img/welcome-img4.png" alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default WelcomeArea;
