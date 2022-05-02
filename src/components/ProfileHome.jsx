import { Container, Row, Col } from "react-bootstrap"

import MySideBar from "./MySideBar"

import MyProfile from "./MyProfile"

const ProfileHome = () => {
  return (
    <Container>
      <Row>
        <Col md={8}>
          <MyProfile />
        </Col>
        <Col md={4}>
          <MySideBar />
        </Col>
      </Row>
    </Container>
  )
}
export default ProfileHome
