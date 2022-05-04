import { Container, Row, Col, Modal, Button, Form } from "react-bootstrap";
import React from "react";
import styled from "styled-components";
import { BiPencil } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { useState, useEffect } from "react";
import MyExperience from "./MyExperience";

const MyProfile = () => {
  const [profile, setProfile] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [profileFormData, setProfileFormData] = useState({
    name: "",
    surname: "",
    email: "",
    bio: "",
    title: "",
    area: "",
  });

  useEffect(() => {
    profileData();
  }, []);

  const profileData = async () => {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/me",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjZmZThkZjE3YzRlMDAwMTVkN2EwODYiLCJpYXQiOjE2NTE1MDEyODAsImV4cCI6MTY1MjcxMDg4MH0.BHHzfw3iAtpCQMfwrq8GQMzEPn91MUE6-VDBzBtHR_I",
        },
      }
    );
    let profileData = await response.json();
    // console.log(profileData);
    setProfile(profileData);
    setProfileFormData(profileData);
  };

  const editData = async (e) => {
    e.preventDefault();
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/",
      {
        method: "PUT",
        body: JSON.stringify(profileFormData),
        headers: {
          "content-type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjZmZThkZjE3YzRlMDAwMTVkN2EwODYiLCJpYXQiOjE2NTE1MDEyODAsImV4cCI6MTY1MjcxMDg4MH0.BHHzfw3iAtpCQMfwrq8GQMzEPn91MUE6-VDBzBtHR_I",
        },
      }
    );
    console.log(response);
    setShow(false);
  };
  return (
    <>
      <Wrapper>
        <Header>
          <Container>
            <Row>
              <Col></Col>
              <Col>
                <div className=" d-flex justify-content-end mt-3">
                  <BiPencil size="1.3rem" color="white" />
                </div>
              </Col>
            </Row>
          </Container>
        </Header>
        <AvatarLogo>
          <img className="jumbotron-img" src={profile.image} alt="avatar" />
        </AvatarLogo>
        <Body>
          <Container>
            <Row>
              <Col md={8}>
                <div className="jumbotron-body">
                  <h3>
                    {profile.name}
                    <span className="text-muted ml-1">(Him/He)</span>
                  </h3>
                  <p>{profile.bio}</p>
                  <p>
                    <span className="text-muted"> {profile.area}</span>
                    <b>
                      <a href="asd#" target="_blank" className="ml-2">
                        {profile.username}
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
                <div className=" d-flex justify-content-end mb-3 text-muted">
                  <BiPencil size="1.5rem" onClick={handleShow} />
                </div>
                <h6>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </h6>
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
                    <span className=" d-flex justify-content-end">
                      <BiPencil />
                    </span>
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
                    <span className=" d-flex justify-content-end">
                      <IoClose />
                    </span>
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
      <MyExperience />
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit intro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={editData}>
            <Form.Group>
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                value={profileFormData.name}
                onChange={(e) =>
                  setProfileFormData({
                    ...profileFormData,
                    name: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Surname:</Form.Label>
              <Form.Control
                type="text"
                value={profileFormData.surname}
                onChange={(e) =>
                  setProfileFormData({
                    ...profileFormData,
                    surname: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                value={profileFormData.email}
                onChange={(e) =>
                  setProfileFormData({
                    ...profileFormData,
                    email: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Bio:</Form.Label>
              <Form.Control
                type="text"
                value={profileFormData.bio}
                onChange={(e) =>
                  setProfileFormData({
                    ...profileFormData,
                    bio: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Title:</Form.Label>
              <Form.Control
                type="text"
                value={profileFormData.title}
                onChange={(e) =>
                  setProfileFormData({
                    ...profileFormData,
                    title: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Area:</Form.Label>
              <Form.Control
                type="text"
                value={profileFormData.area}
                onChange={(e) =>
                  setProfileFormData({
                    ...profileFormData,
                    area: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleClose}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MyProfile;

const Wrapper = styled.div`
  position: relative;
  min-height: 65vh;
  background-color: rgb(255, 255, 255);
  border: 0.1px solid #e0dfdc;
  border-radius: 15px;
  overflow: hidden;
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
