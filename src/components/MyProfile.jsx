import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import styled from "styled-components";

const MyProfile = () => {
  return (
    <Wrapper>
      <Header></Header>
      <AvatarLogo>
        <img
          className="jumbotron-img"
          src="https://placekitten.com/80/80"
          alt="avatar"
        />
      </AvatarLogo>
      <Body>
        <Container>
          <Row>
            <Col md={8}>
              <div className="jumbotron-body">
                <h3>
                  Tunde Ednut
                  <span className="text-muted ml-1">(Him/He)</span>
                </h3>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>
                  <span className="text-muted"> Greater Manchester Area</span>
                  <b>
                    <a href="asd#" target="_blank" className="ml-2">
                      Contact Info
                    </a>
                  </b>
                </p>

                <p className="my-2">
                  <b>
                    <a href="asd#" target="_blank">
                      100 Connections
                    </a>
                  </b>
                </p>
              </div>
            </Col>
            <Col md={4}>
              <h6>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h6>
              <p>Facilis odit mollitia aliquam harum corporis quibusdam</p>
            </Col>
          </Row>
          <ButtonsClick>
            <button className="jumbotron-btn mr-2  rounded-pill bg-primary text-white text-center px-4 py-2">
              Open to
            </button>
            <button className="jumbotron-btn  mr-2 rounded-pill bg-light border-primary text-primary text-center px-4">
              Add profile section
            </button>
            <button className="jumbotron-btn mr-2 rounded-pill text-center px-4">
              More
            </button>
          </ButtonsClick>
        </Container>
        <Container className="mt-3">
          <Row>
            <Col md={6} className="mb-3">
              <div className="jumbotron-footer-left">
                <p>
                  <strong> Lorem ipsum dolor</strong> sit amet consectetur
                  adipisicing elit.
                </p>
                <b>
                  <a href="asd#" target="_blank" className="">
                    See all details
                  </a>
                </b>
              </div>
            </Col>

            <Col md={6}>
              <div className="jumbotron-footer-right">
                <p>
                  <strong> Lorem ipsum dolor</strong> sit amet consectetur
                  adipisicing elit.
                </p>
                <b className="mt-2">
                  <a href="asd#" target="_blank" className="">
                    Get started
                  </a>
                </b>
              </div>
            </Col>
          </Row>
        </Container>
      </Body>
    </Wrapper>
  );
};

export default MyProfile;

const Wrapper = styled.div`
  position: relative;
  min-height: 65vh;
  background-color: rgb(255, 255, 255);
  border: 1px solid grey;
  border-radius: 15px;
`;

const Header = styled.div`
  min-height: 10rem;
  background-color: blue;
  background-image: url("https://images.unsplash.com/photo-1616763355548-1b606f439f86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29yayUyMHN0YXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60");
  background-size: cover;
  border-radius: 10px 10px 0px 0px;
`;

const Body = styled.div`
  background-color: white;
  margin-top: 50px;
  padding-left: 10px;
  padding-right: 10px;
`;

const AvatarLogo = styled.div`
  position: absolute;
  width: 142px;
  height: 142px;
  border-radius: 50%;
  margin-top: -6rem;
  margin-left: 1.5rem;
  overflow: hidden;
`;

const ButtonsClick = styled.div`
  display: inline-flex;
  margin-right: 4.5rem;
`;
