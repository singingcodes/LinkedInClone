import { Row, Image, Col, Modal, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { parseISO, format } from "date-fns";
import { BiPencil } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useState } from "react";

const SingleExperience = ({ experience }) => {
  const [formData, setFormdata] = useState(experience);
  const [show, setShow] = useState(false);
  const editExperience = async (e, _id) => {
    console.log("here is ID", _id);
    e.preventDefault();
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/626fd65617c4e00015d7a083/experiences/" +
          experience._id,
        {
          method: "PUT",
          body: JSON.stringify(formData),
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjZmZDY1NjE3YzRlMDAwMTVkN2EwODMiLCJpYXQiOjE2NTE0OTY1MzUsImV4cCI6MTY1MjcwNjEzNX0.8KY63vz_cG51-fBlBKeyzC8NE1kgqbjKuVVMCqVTllA",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      setShow(false);
    } catch (error) {
      alert("error", error);
    }
  };

  const handleDelete = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/626fd65617c4e00015d7a083/experiences/" +
          experience._id,
        {
          method: "DELETE",
          body: JSON.stringify(formData),
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjZmZDY1NjE3YzRlMDAwMTVkN2EwODMiLCJpYXQiOjE2NTE0OTY1MzUsImV4cCI6MTY1MjcwNjEzNX0.8KY63vz_cG51-fBlBKeyzC8NE1kgqbjKuVVMCqVTllA",
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        alert("Deleted Succesfully");
      }
    } catch (error) {
      console.log("Error");
    }
  };

  return (
    <>
      <div key={experience._id}>
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
              {experience.role}
            </h6>

            <p
              className="text-muted my-1"
              style={{ fontSize: "13px", lineHeight: "1.4" }}
            >
              {experience.company}
            </p>
            <p
              className="m-0 text-muted"
              style={{ fontSize: "13px", lineHeight: "1.4" }}
            >
              {format(parseISO(experience.startDate), "MMMM yyyy")} -{" "}
              {format(parseISO(experience.endDate), "MMMM yyyy")}
            </p>
            <span
              className="text-muted"
              style={{ fontSize: "13px", lineHeight: "1.4" }}
            >
              {experience.area}
            </span>
          </Col>

          <Col md={1}>
            <div className="">
              <BiPencil
                size="1.1rem"
                color="black"
                onClick={() => setShow(true)}
              />
            </div>
          </Col>
        </Row>
        <div>
          <hr />
        </div>
      </div>

      <Modal
        show={show}
        onHide={() => setShow(false)}
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
                value={formData.role}
                onChange={(e) =>
                  setFormdata({
                    ...formData,
                    role: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Company*</Form.Label>
              <Form.Control
                type="text"
                value={formData.company}
                onChange={(e) =>
                  setFormdata({
                    ...formData,
                    company: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Start Date*</Form.Label>
              <Form.Control
                type="date"
                value={formData.startDate}
                onChange={(e) =>
                  setFormdata({
                    ...formData,
                    startDate: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>End Date*</Form.Label>
              <Form.Control
                type="date"
                value={formData.endDate}
                onChange={(e) =>
                  setFormdata({
                    ...formData,
                    endDate: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Area*</Form.Label>
              <Form.Control
                type="text"
                value={formData.area}
                onChange={(e) =>
                  setFormdata({
                    ...formData,
                    area: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description*</Form.Label>
              <Form.Control
                type="text"
                value={formData.description}
                onChange={(e) =>
                  setFormdata({
                    ...formData,
                    description: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Button variant="danger" onClick={handleDelete}>
              <AiFillDelete />
            </Button>

            <Button variant="primary" type="submit" className="float-right">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SingleExperience;
