import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import { BsStarFill } from "react-icons/bs"
import { FcKindle } from "react-icons/fc"

import styled from "styled-components"

const NewsFeedProfile = () => {
  return (
    <>
      <Wrapper>
        <Header></Header>
        <AvatarLogo>
          <img
            className="jumbotron-img"
            src="/assests/profile-picture.png"
            alt="avatar"
          />
        </AvatarLogo>
        <Body>
          <Container>
            <Row className="justify-content-center">
              <Col>
                <div className="jumbotron-body">
                  <Link to="/" className="text-dark text-center">
                    <h5>Sarah Smith</h5>
                  </Link>

                  <p className="my-2 text-muted text-center">
                    Software Engineer at <b>Google</b>
                  </p>
                </div>
                <hr />
                <p style={{ fontSize: "12px" }} className="text-muted">
                  People who viewed your profile{" "}
                  <span className="float-right text-primary">26</span>
                </p>
                <p style={{ fontSize: "12px" }} className="text-muted mb-2">
                  Impressions of your post{" "}
                  <span className="float-right text-primary">69</span>
                </p>
                <hr />
                <p style={{ fontSize: "12px" }} className="text-muted m-0">
                  Access to exclusive tools and insights{" "}
                </p>

                <BsStarFill className="text-warning mt-0" size="" />
                <span className="text-muted" style={{ fontSize: "14px" }}>
                  Reactivate Premium
                </span>
                <hr />
                <FcKindle className="text-dark" size="" />
                <span className="text-muted" style={{ fontSize: "14px" }}>
                  My Items
                </span>
              </Col>
            </Row>
          </Container>
        </Body>
      </Wrapper>

      <Section>
        <Container>
          <Row>
            <Col>
              <h5 className="text-muted my-2">Recent</h5>
              <ul
                className="list-unstyled text-muted"
                style={{ fontSize: "12px" }}
              >
                <li>#JavaScript</li>
                <li>#React</li>
                <li>#Node.js</li>
                <li>#Express.js</li>
                <li>#MongoDB</li>
                <li>#Mongoose</li>
                <li>#Bootstrap</li>
                <li>#HTML</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  )
}

export default NewsFeedProfile
const Wrapper = styled.div`
  position: relative;
  ${"" /* min-height: 65vh; */}
  background-color: rgb(255, 255, 255);
  border: 0.1px solid #e0dfdc;
  border-radius: 15px;
  overflow: hidden;
`

const Header = styled.div`
  min-height: 5rem;
  background-color: blue;
  background-image: url("https://images.unsplash.com/photo-1616763355548-1b606f439f86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29yayUyMHN0YXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60");
  background-size: cover;
  border-radius: 10px 10px 0px 0px;
`

const Body = styled.div`
  background-color: white;
  margin-top: 50px;
  padding-left: 10px;
  padding-right: 10px;
`

const AvatarLogo = styled.div`
  position: absolute;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  ${"" /* margin-top: -3.2rem; */}
  margin-left: 8rem;
  overflow: hidden;
  transform: translate(-50%, -50%);
`
const Section = styled.div`
  background-color: rgb(255, 255, 255);
  border: 0.1px solid #e0dfdc;
  border-radius: 15px;
  overflow: hidden;
  margin-top: 10px;
`
