import { Card, Row, Col, Image, Button, Container } from "react-bootstrap";

const MySideBar = (props) => {
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
          <Row>
            <Col sm={3}>
              <Image
                src="/assests/profile-picture.png"
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
                  Antony Lock
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
                  Software Operations and Implemnetation at Kantar
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
          <Row>
            <Col sm={3}>
              <Image
                src="/assests/profile-picture.png"
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
                  Antony Lock
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
                  Software Operations and Implemnetation at Kantar
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
          <Row>
            <Col sm={3}>
              <Image
                src="/assests/profile-picture.png"
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
                  Antony Lock
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
                  Software Operations and Implemnetation at Kantar
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
          <Row>
            <Col sm={3}>
              <Image
                src="/assests/profile-picture.png"
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
                  Antony Lock
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
                  Software Operations and Implemnetation at Kantar
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
          <Row>
            <Col sm={3}>
              <Image
                src="/assests/profile-picture.png"
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
                  Antony Lock
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
                  Software Operations and Implemnetation at Kantar
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

      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title className="font-weight-bold" style={{ fontSize: "16px" }}>
            People you may know
          </Card.Title>
          <Row>
            <Col sm={3}>
              <Image
                src="/assests/profile-picture.png"
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
                  Antony Lock
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
                  Software Operations and Implemnetation at Kantar
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
          <Row>
            <Col sm={3}>
              <Image
                src="/assests/profile-picture.png"
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
                  Antony Lock
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
                  Software Operations and Implemnetation at Kantar
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
          <Row>
            <Col sm={3}>
              <Image
                src="/assests/profile-picture.png"
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
                  Antony Lock
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
                  Software Operations and Implemnetation at Kantar
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
          <Row>
            <Col sm={3}>
              <Image
                src="/assests/profile-picture.png"
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
                  Antony Lock
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
                  Software Operations and Implemnetation at Kantar
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
          <Row>
            <Col sm={3}>
              <Image
                src="/assests/profile-picture.png"
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
                  Antony Lock
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
                  Software Operations and Implemnetation at Kantar
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
