import { Card, Row, Image, Col, Modal, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { parseISO, format } from "date-fns";
import { BiPencil, BiPlus } from "react-icons/bi";

const MyExperience = () => {
  const [profiles, setProfiles] = useState([]);

  const [addExperience, setAddExperience] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });

  const [editExperiences, setEditExperiences] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });

  useEffect(() => {
    fetchExperience();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [editShow, setEditShow] = useState(false);
  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);

  // this is the function that fetches user experience
  const fetchExperience = async () => {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/626fd65617c4e00015d7a083/experiences",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjZmZDY1NjE3YzRlMDAwMTVkN2EwODMiLCJpYXQiOjE2NTE0OTY1MzUsImV4cCI6MTY1MjcwNjEzNX0.8KY63vz_cG51-fBlBKeyzC8NE1kgqbjKuVVMCqVTllA",
        },
      }
    );
    let responseData = await response.json();
    console.log(responseData);
    setProfiles(responseData);
    setEditExperiences(responseData);
  };
  // this is the function that handles the adding user experience
  const submitExperience = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/626fd65617c4e00015d7a083/experiences",
        {
          method: "POST",
          body: JSON.stringify({ ...addExperience }),
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjZmZDY1NjE3YzRlMDAwMTVkN2EwODMiLCJpYXQiOjE2NTE0OTY1MzUsImV4cCI6MTY1MjcwNjEzNX0.8KY63vz_cG51-fBlBKeyzC8NE1kgqbjKuVVMCqVTllA",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      if (response.ok) {
        console.log(response);
        alert("ok");
        setAddExperience({
          role: "",
          company: "",
          startDate: "",
          endDate: "",
          area: "",
        });
      } else {
        alert("error");
      }
    } catch (error) {
      alert("error", error);
    }
  };

  const editExperience = async (e, _id) => {
    console.log("here is ID", _id);
    e.preventDefault();
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/626fd65617c4e00015d7a083/experiences/62722ad6bf16950015c8004c",
        {
          method: "PUT",
          body: JSON.stringify(editExperiences),
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjZmZDY1NjE3YzRlMDAwMTVkN2EwODMiLCJpYXQiOjE2NTE0OTY1MzUsImV4cCI6MTY1MjcwNjEzNX0.8KY63vz_cG51-fBlBKeyzC8NE1kgqbjKuVVMCqVTllA",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      let editExp = await response.json();
      setEditExperiences(editExp);
    } catch (error) {
      alert("error", error);
    }
  };

  return (
    <>
      <Wrapper className="my-2">
        <div className="mb-3">
          <Card.Body>
            <div className="d-flex justify-content-between my-2">
              <Card.Title
                className="font-weight-bold"
                style={{ fontSize: "16px" }}
              >
                Experience
              </Card.Title>
              <div>
                <BiPlus size="1.5rem" onClick={handleShow} />
              </div>
            </div>
            {profiles.map((profile) => (
              <div key={profile._id}>
                <Row>
                  <Col md={1}>
                    <div>
                      <Link to={""}>
                        <Image
                          src="/assests/profile-picture.png"
                          rounded
                          alt="profile-picture"
                          height="58px"
                        />
                      </Link>
                    </div>
                  </Col>
                  <Col md={10}>
                    <h6
                      className="font-weight-bold my-1"
                      style={{ fontSize: "14px", lineHeight: "1.4" }}
                    >
                      {profile.role}
                    </h6>

                    <p
                      className="text-muted my-1"
                      style={{ fontSize: "13px", lineHeight: "1.4" }}
                    >
                      {profile.company}
                    </p>
                    <p
                      className="m-0 text-muted"
                      style={{ fontSize: "13px", lineHeight: "1.4" }}
                    >
                      {format(parseISO(profile.startDate), "MMMM yyyy")} -{" "}
                      {format(parseISO(profile.endDate), "MMMM yyyy")}
                    </p>
                    <span
                      className="text-muted"
                      style={{ fontSize: "13px", lineHeight: "1.4" }}
                    >
                      {profile.area}
                    </span>
                  </Col>

                  <Col md={1}>
                    <div className="">
                      <BiPencil
                        size="1.1rem"
                        color="black"
                        onClick={handleEditShow}
                      />
                    </div>
                  </Col>
                </Row>
                <div>
                  <hr />
                </div>
              </div>
            ))}
          </Card.Body>
        </div>
      </Wrapper>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Experience</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submitExperience}>
            <Form.Group>
              <Form.Label>Role* </Form.Label>
              <Form.Control
                type="text"
                value={addExperience.role}
                onChange={(e) =>
                  setAddExperience({ ...addExperience, role: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Company*</Form.Label>
              <Form.Control
                type="text"
                value={addExperience.company}
                onChange={(e) =>
                  setAddExperience({
                    ...addExperience,
                    company: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Start Date*</Form.Label>
              <Form.Control
                type="date"
                value={addExperience.startDate}
                onChange={(e) =>
                  setAddExperience({
                    ...addExperience,
                    startDate: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>End Date*</Form.Label>
              <Form.Control
                type="date"
                value={addExperience.endDate}
                onChange={(e) =>
                  setAddExperience({
                    ...addExperience,
                    endDate: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Area*</Form.Label>
              <Form.Control
                type="text"
                value={addExperience.area}
                onChange={(e) =>
                  setAddExperience({ ...addExperience, area: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description*</Form.Label>
              <Form.Control
                type="text"
                value={addExperience.description}
                onChange={(e) =>
                  setAddExperience({
                    ...addExperience,
                    description: e.target.value,
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
      {/* Edit Modal  */}

      <Modal
        show={editShow}
        onHide={handleEditClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Experience</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={editExperience}>
            <Form.Group>
              <Form.Label>Role* </Form.Label>
              <Form.Control
                type="text"
                value={editExperiences.role}
                onChange={(e) =>
                  setEditExperiences({
                    ...editExperiences,
                    role: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Company*</Form.Label>
              <Form.Control
                type="text"
                value={editExperiences.company}
                onChange={(e) =>
                  setEditExperiences({
                    ...editExperiences,
                    company: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Start Date*</Form.Label>
              <Form.Control
                type="date"
                value={editExperiences.startDate}
                onChange={(e) =>
                  setEditExperiences({
                    ...editExperiences,
                    startDate: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>End Date*</Form.Label>
              <Form.Control
                type="date"
                value={editExperiences.endDate}
                onChange={(e) =>
                  setEditExperiences({
                    ...editExperiences,
                    endDate: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Area*</Form.Label>
              <Form.Control
                type="text"
                value={editExperiences.area}
                onChange={(e) =>
                  setEditExperiences({
                    ...editExperiences,
                    area: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description*</Form.Label>
              <Form.Control
                type="text"
                value={editExperiences.description}
                onChange={(e) =>
                  setEditExperiences({
                    ...editExperiences,
                    description: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleEditClose}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MyExperience;
const Wrapper = styled.div`
  position: relative;
  background-color: rgb(255, 255, 255);
  border: 0.1px solid #e0dfdc;
  border-radius: 15px;
  overflow: hidden;
`;
