import { Card, Row, Col, Image, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

const MySideBar = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/",
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
  };

  return (
    <>
      <Card style={{ width: "18rem" }} className="mb-2">
        <Card.Body>
          <Card.Text className="font-weight-bold" style={{ fontSize: "14px" }}>
            Edit public profile & URL{" "}
            <span className="float-right">
              <i class="bi bi-question-circle-fill"></i>
            </span>
          </Card.Text>
          <hr></hr>
          <Card.Text className="font-weight-bold" style={{ fontSize: "14px" }}>
            Add profile in another language{" "}
            <span className="float-right">
              <i class="bi bi-question-circle-fill"></i>
            </span>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }} className="mb-3">
        <Card.Body>
          <Card.Title className="font-weight-bold" style={{ fontSize: "16px" }}>
            People also viewed
          </Card.Title>
          {profiles.splice(0, 5).map((profile) => (
            <Row key={profile._id}>
              <Col sm={3}>
                <Image
                  src={profile.image}
                  rounded
                  alt="profile-picture"
                  height="48px"
                />
              </Col>
              <Col sm={9}>
                <div>
                  <h6
                    className="font-weight-bold mb-0"
                    style={{ fontSize: "14px", lineHeight: "1.4" }}
                  >
                    {" "}
                    {profile.name}
                    <span className="text-muted font-weight-normal">
                      {" "}
                      <i class="bi bi-dot"></i> 2nd
                    </span>
                  </h6>
                  <h6
                    className="text-muted"
                    style={{ fontSize: "13px", lineHeight: "1.4" }}
                  >
                    {" "}
                    {profile.title}
                  </h6>
                  <Button
                    style={{
                      borderRadius: "50px",
                      fontSize: "16px",
                      width: "100px",
                    }}
                    variant="outline-dark"
                    className="font-weight-bold mb-2 text-muted p-1"
                  >
                    Connect
                  </Button>
                </div>
              </Col>
            </Row>
          ))}
          <Row>
            <Col className="p-0">
              <hr></hr>
            </Col>
          </Row>
          <Row className="justify-content-center">
            {/* show more */}
            <Col>
              <h6 className="text-center font-weight-bold m-0 text-muted">
                {" "}
                Show more <i class="bi bi-chevron-compact-down"></i>
              </h6>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* people you may know starts here */}

      <Card style={{ width: "18rem" }} className="mb-3">
        <Card.Body>
          <Card.Title className="font-weight-bold" style={{ fontSize: "16px" }}>
            People you may know
          </Card.Title>
          {profiles.splice(50, 5).map((profile) => (
            <Row key={profile._id}>
              <Col sm={3}>
                <Image
                  src={profile.image}
                  rounded
                  alt="profile-picture"
                  height="48px"
                />
              </Col>
              <Col sm={9}>
                <div>
                  <h6
                    className="font-weight-bold mb-0"
                    style={{ fontSize: "14px", lineHeight: "1.4" }}
                  >
                    {" "}
                    {profile.name}
                    <span className="text-muted font-weight-normal">
                      {" "}
                      <i class="bi bi-dot"></i> 2nd
                    </span>
                  </h6>
                  <h6
                    className="text-muted"
                    style={{ fontSize: "13px", lineHeight: "1.4" }}
                  >
                    {" "}
                    {profile.title}
                  </h6>
                  <Button
                    style={{
                      borderRadius: "50px",
                      fontSize: "16px",
                      width: "100px",
                    }}
                    variant="outline-dark"
                    className="font-weight-bold mb-2 text-muted p-1"
                  >
                    Connect
                  </Button>
                </div>
              </Col>
            </Row>
          ))}
          <Row>
            <Col className="p-0">
              <hr></hr>
            </Col>
          </Row>
          <Row className="justify-content-center">
            {/* show more */}
            <Col>
              <h6 className="text-center font-weight-bold m-0 text-muted">
                {" "}
                Show more <i class="bi bi-chevron-compact-down"></i>
              </h6>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default MySideBar;
