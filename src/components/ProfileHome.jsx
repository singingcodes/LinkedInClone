import { Container, Row, Col } from "react-bootstrap";
import MySideBar from "./MySideBar";

const ProfileHome = () => {
  return (
    <Container>
      <Row>
        <Col md={8}></Col>
        <Col md={4}>
          <MySideBar />
        </Col>
      </Row>
    </Container>
  );
};
export default ProfileHome;
