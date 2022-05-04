import { Container, Row, Col } from "react-bootstrap"
import NewsFeedExtra from "./NewsFeedExtra"
import NewsFeedPost from "./NewsFeedPost"
import NewsFeedProfile from "./NewsFeedProfile"
const NewsFeed = () => {
  return (
    <>
      <Container className="my-3">
        <Row>
          <Col md={2}>
            <NewsFeedProfile />
          </Col>
          <Col md={6}>
            <NewsFeedPost />
          </Col>
          <Col md={4}>
            <NewsFeedExtra />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default NewsFeed
